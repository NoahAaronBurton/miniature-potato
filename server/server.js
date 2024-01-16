var express = require('express');
var SpotifyWebApi = require('spotify-web-api-node');

var app = express();
require('dotenv').config();

// Create the api object with the credentials
var spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});
 
//endpoint to get artist top tracks
app.get('/api/dvddy', function(req, res) {
    // Retrieve an access token.
    spotifyApi.clientCredentialsGrant().then(
        function(data) {
            console.log('The access token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);
    
            // Save the access token so that it's used in future calls
            spotifyApi.setAccessToken(data.body['access_token']);
    
            // Get DVDDY top tracks
            const artistId = '6Gnxo2IdtKi2isu0i6yFSl';
            spotifyApi.getArtistTopTracks(artistId, 'US')
            .then(function(data) {
                res.send(data.body);
            }, function(err) {
                console.log('Something went wrong!', err);
                res.status(500).send(err);
            });
        },
        function(err) {
            console.log('Something went wrong when retrieving an access token', err);
            res.status(500).send(err);
        }
    );
});


var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Server is running on port ' + port);
});