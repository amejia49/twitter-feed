var path = require('path')
var express = require('express')
var Twitter = require('twitter')
var twitterConfig = require('./config/twitter')
var app = new express()
var port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'dist')));

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '/app/index.html'))
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.log('process', process.env.hey)
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});

var twitter = new Twitter(twitterConfig)

// twitter.stream('statuses/filter', {track: 'javascript'}, function(stream) {
//   stream.on('data', function(event) {
//     console.log('event', event)
//     console.log(event && event.text);
//   });
//
//   stream.on('error', function(error) {
//     throw error;
//   });
// });
