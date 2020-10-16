# Monumetric RSS Reader

THIS REPO IS DEPRECATED. Please refer to this one instead: https://github.com/dahjah/feed-to-json

Convert an RSS/Atom feed into an object containing all entries and metadata for the feed using node.js and the FeedParser Library. While This acts similarly to the now-deprecated Google Feeds API, it functions slightly differently. If you need a drop in replacement for that, please see the feednami project, which functions very similarly to mmt-rss-reader, but has an option for google feed api formatting.

This can function as a free alternative to feednami (the returned object is identical to that of the non-google feednami return). If you choose to utilize this tool, you may test using the below request url, **but please use your own hosting for production use.** Feel free to deploy a copy to your own heroku instance, or copy the contents of app.js to your own Node.js server.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

This is based loosely on the rss2js project found here: https://github.com/mapsam/rss2js and the feednami project found here: https://toolkit.sekando.com/docs/en/feednami



# Usage

Just make an HTTP GET request to mmt-rss-reader.herokuapp.com/feedparser?url=https://Your.URL.HERE.com

Please only use the above url for testing purposes. For production use, please deploy the app on your own heroku instance:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

