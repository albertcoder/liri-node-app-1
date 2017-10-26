var request = require("request");
var twitter = require("twitter");
var spotifyReq = require("node-spotify-api");
var keys = require("./keys.js");
var fs = require("fs");
var args = process.argv.slice(2);
var command = args[0];
var userInput = args.slice(1).join(" ");
console.log("userInput is: " + userInput);

if (command === "my-tweets") {

	// show the last 20 tweets and when they were created in bash window

} else if (command === "spotify-this-song") {
	
		// if userInput === null/undefined then it defaults to something else.

	var spotify = new spotifyReq(keys.spotifyKeys);

	spotify.search({
		type: "track",
		query: userInput,
		limit: 1
	}, function(err, data) {
		if (err) {
			console.log(err);
		} else {
			// console.log(data);
			console.log("Artist: " + data.tracks.items[0].album.artists[0].name); // artist's name
			console.log("Song name: " + data.tracks.items[0].name) // song name
			console.log("External url: " + data.tracks.items[0].album.external_urls.spotify) // external link
			console.log("Album: " + data.tracks.items[0].album.name) // album name
		}
	})

} else if (command === "movie-this") {

	// userInput === movie name; show title, year, IMDB rating, Rotten Tomatoes Rating, Country, lang, plot, actors
	// if userInput === null/undefined then it defaults to something else

} else if (commadn === "do-what-it-says") {
	fs.readFile("random.txt", "utf8", function(error, data) {
		if (error) {
			return console.log(error);
		} else {
			console.log(data);
		}
	});
}