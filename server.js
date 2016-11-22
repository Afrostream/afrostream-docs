const express = require('express');
const app = express();

app.use('/api', express.static(__dirname + '/api'));
app.use(‘/billings’, express.static(__dirname + ‘/billings’));

app.listen(process.env.PORT || 13333, function () {
  console.log('up');
});
