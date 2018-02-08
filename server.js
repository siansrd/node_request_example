const express = require('express');
const app = express();
const request = require('request');

app.use(express.static('client/build'));

app.get('/api/countries', function(req, res) {
  const options = {
    url: 'https://restcountries.eu/rest/v2/all',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
    }
  };
  request(options, function(error, response, body) {
    let json = JSON.parse(body);
    res.json(json)
  });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

app.listen(3000, function () {
  console.log('App running on port '+this.address().port);
});
