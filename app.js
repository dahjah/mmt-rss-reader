var express = require('express');
var request = require('request');
var cors = require('cors');
var xml2js = require('xml2js');
var parser2 = require('node-feedparser');

var app = express();
app.use(cors());
module.exports.app = app;
app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  var count = req.query.count || 15;
  var url = req.query.url;

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

      return res.json(result).channel;
    });
  });
});


/*FeedParser Test Code*/
app.get('/feedparser', function(req,res){
var url = req.query.url;
  request(url,(error, resp, body))->
          parser2(body, (error, ret))->
            console.log(error)
            console.log(ret)
}


/*END FeedParser Test Code*/

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
