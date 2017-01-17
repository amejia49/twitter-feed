var path = require('path')
var express = require('express')
var http = require('http')
var Twitter = require('twitter')
var twitterConfig = require('./config/twitter')
var app = new express()
var port = 5000

app.use(express.static(path.join(__dirname, 'dist')));

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '/app/index.html'))
});

var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

var twitter = new Twitter(twitterConfig)
var io = require('socket.io').listen(server);

twitter.stream('statuses/filter', {track: 'javascript'}, function(stream) {
  stream.on('data', function(data) {
    var tweet = {
     twid: data['id_str'],
     author: data['user']['name'],
     avatar: data['user']['profile_image_url'],
     body: data['text'],
     date: data['created_at'],
     screenname: data['user']['screen_name'],
     favoriteCount: data['favorite_count'],
     retweetCount: data['retweet_count']
   };
   io.emit('tweet', tweet)
  });

  stream.on('error', function(error) {
    io.emit('error', error)
    console.log('error',error)
  });
});
module.exports = io
