const express = require('express');
const app = express();
const middlewareBasicAuth = require('basic-auth-connect');
const fs = require('fs');
const md = require( "markdown" ).markdown;

const walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
      files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist);
    }
    else {
      filelist.push(file);
    }
  });
  return filelist;
};

app.use(/^\/(api|afrostream-backend)/, express.static(__dirname + '/../public/afrostream-backend'));
app.use(/^\/(billings|afrostream-billings)/, express.static(__dirname + '/../public/afrostream-billings'));

app.get('/', (req, res) => {
  res.send(`
    <html><body>
      <h1>public api</h1>
      <a href="/afrostream-backend">afrostream-backend</a><br/>
      <a href="/afrostream-billings">afrostream-billings</a>
    </body></html>
`);
});

app.use('/private', middlewareBasicAuth('afrostream', 'afrostream77'));

app.get('/private', (req, res) => {
  // doc list

});

app.get('/private/*', (req, res) => {
  const m = req.url.match(/\/private\/doc\/markdowns\/([^.]*\.md)/);

  if (m && m[1] && fs.existsSync(__dirname+'/../doc/markdowns/'+m[1])) {
    // fixme: security risk here, shouldn't send non whitelist file.
    res.send(md.toHTML(fs.readFileSync(__dirname+'/../doc/markdowns/'+m[1])));
  } else {
    res.status(404).send();
  }
});

const port = process.env.PORT || 13333

app.listen(port, function () {
  console.log(`up on port ${port}`);
});
