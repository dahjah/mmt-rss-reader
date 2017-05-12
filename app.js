var express = require('express');
var request = require('request');
var cors = require('cors');
var xml2js = require('xml2js');

var app = express();
app.use(cors());
module.exports.app = app;
app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  var count = req.query.count || 15;
  var url = 'https://groups.google.com/forum/feed/cugos/topics/rss.xml?num='+count;

  request(url, function(err, response, body) {
    if (err) {
      res.status(err.code || 400);
      return res.json({message: 'error fetching url', error: err.message});
    }

    if (response.statusCode !== 200) {
      res.status(response.statusCode);
      return res.json({message: 'unable to fetch url', code: response.statusCode});
    }

    var parser = new xml2js.Parser({
      explicitArray: false
    });

    parser.parseString(body, function (err, result) {
      if (err) {
        res.status(err.code || 400);
        return res.json({message: 'unable to parse XML'});
      }

      return res.json(result);
    });
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
