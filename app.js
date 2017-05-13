var express = require('express');
var request = require('request');
var cors = require('cors');
var xml2js = require('xml2js');
var FeedParser = require('feedparser');

var app = express();
app.use(cors());
module.exports.app = app;
app.set('port', (process.env.PORT || 5000));

var testing = [];
/*FeedParser Test Code*/
app.get('/feedparser', function(req1,res1){
var url = req1.query.url;
var req = request(url);
var feedparser = new FeedParser();

//suggestion
var collection = [];

req.on('error', function (error) {
  // handle any request errors
});

req.on('response', function (res) {
  var stream = this; // `this` is `req`, which is a stream

  if (res.statusCode !== 200) {
    this.emit('error', new Error('Bad status code'));
  }
  else {
    stream.pipe(feedparser);
  }
});

feedparser.on('error', function (error) {
  // always handle errors
});

feedparser.on('readable', function () {
  // This is where the action is!
  var stream = this; // `this` is `feedparser`, which is a stream
  var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
  var item;

  while (item = stream.read()) {
    console.log(item);
    collection.push(item);    //array of objects
  }
});

//suggestion
feedparser.on('end', function () {
    console.log(collection);
  res1.send(collection);
    //example usage: process data as collection for SQL usage
});
});
/*END FeedParser Test Code*/

/*app.get('/', function(req, res) {
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
*/
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
