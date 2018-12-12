/* server.js */

// Initialize project using Express, a Node.js server framework
var express = require('express');
var app = express();

// Serve index to `views` directory: http://expressjs.com/en/starter/static-files.html
app.use(express.static('views'));
//app.use(express.static('public'));

// Initialize p5.js library: https://glitch.com/~p5js
app.use(express.static('node_modules/p5/lib'));
app.use(express.static('node_modules/p5/lib/addons'));

// Initialize Node.js wrapper for Spotify Web API: https://github.com/thelinmichael/spotify-web-api-node
var SpotifyWebApi = require('spotify-web-api-node');

// Create API object with Client Credientials App Authentication Flow: https://developer.spotify.com/documentation/general/guides/authorization-guide/
var spotifyApi = new SpotifyWebApi({
  clientId : process.env.CLIENT_ID,
  clientSecret : process.env.CLIENT_SECRET
});

/* To make asynchronous HTTP requests, API calls use async/await (ES7+) around Node wrapper helper methods (which originally used promises via callback functions) */

// Get access token to authenticate app
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    console.log('Access token: ' + data.body['access_token']);
    console.log('Access token expiration: ' + data.body['expires_in'] + ' ms');

    // Save access token to use in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
    runApp();
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err.message);
  });

// Create function to ensure app runs after authentication
function runApp(){
  // Serve css, js, and media static files to `public` directory for browser
  app.use(express.static('public'));

  // Set up HTTP request method (GET) for homepage: http://expressjs.com/en/starter/basic-routing.html
  // Parameters refer to HTTP request-response protocol: https://shiffman.net/a2z/server-node/
  app.get("/", function (request, response) {
    response.sendFile(__dirname + '/views/index.html');
  });

  // Get several tracks (5 related to search query): https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-tracks/
  app.get("/search", async function(request, response){
    try {
      const data = await spotifyApi.searchTracks(request.query.input, { limit: 5 }); // Wait for promise that returns query object to access url and send to client.js
      console.log('Search results: ', data.body);
      response.send(data.body.tracks.items);
    } catch(err) {
      response.status(400).send(err.message);
    }
  });

  // Get Audio Features for a single track: https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/
  app.get("/features", async function(request, response) {
    try {
      const data = await spotifyApi.getAudioFeaturesForTrack(request.query.id);
      console.log('Audio feature data: ', data.body);
      const { danceability, energy, valence } = data.body; // New in JavaScript: Destructuring assignment pulls out parts of data object to create variables
      response.send({ danceability, energy, valence });
    } catch(err) {
      response.status(400).send(err.message);
    }
  });

  // Start server to listen for requests made in client.js
  var listener = app.listen(process.env.PORT, function() {
    console.log('Backtrack is listening on port ' + listener.address().port);
  });
}