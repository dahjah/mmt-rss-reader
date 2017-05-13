# Monumetric RSS Reader

Convert an RSS feed into an object containing all entries and metadata for the feed. While This acts similarly to the now-deprecated Google Feeds API, it functions slightly differently. If you need a drop in replacement for that, please see the feednami project, which functions very similarly to mmt-rss-reader, but has an option for google feed api formatting.

This is based loosely on the rss2js project found here: https://github.com/mapsam/rss2js.



# Usage

Just make an HTTP GET request to mmt-rss-reader.herokuapp.com/feedparser?url=https://Your.URL.HERE.com

Please only use the above url for testing purposes. For production use, please deploy the app on your own heroku instance:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

