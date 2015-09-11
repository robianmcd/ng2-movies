var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

//Get Todos Route
app.get('/api/movies', function (req, res) {
    res.send(movies);
});

app.get('/api/movies/:id', function (req, res) {
    var matchingMovies = movies.filter(function (movie) {
        return movie.imdbID === req.params.id;
    });
    res.send(matchingMovies[0]);
});

app.use(express.static(__dirname + '/build'));

app.all('/*', function(req, res) {
    res.sendFile('index.html', { root: __dirname + '/build' });
});

//Start Server
app.listen(port);
console.log('Listening on port ' + port);


var movies = [{
    "Title": "The Matrix",
    "Year": "1999",
    "Rated": "R",
    "Released": "31 Mar 1999",
    "Runtime": "136 min",
    "Genre": "Action, Sci-Fi",
    "Director": "Andy Wachowski, Lana Wachowski",
    "Writer": "Andy Wachowski, Lana Wachowski",
    "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
    "Plot": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    "Language": "English",
    "Country": "USA, Australia",
    "Awards": "Won 4 Oscars. Another 34 wins & 40 nominations.",
    "Poster": "http://i.imgur.com/fAWwkMI.jpg",
    "Metascore": "73",
    "imdbRating": "8.7",
    "imdbVotes": "1037112",
    "imdbID": "tt0133093",
    "Type": "movie",
    "Response": "True"
}, {
    "Title": "Looper",
    "Year": "2012",
    "Rated": "R",
    "Released": "28 Sep 2012",
    "Runtime": "119 min",
    "Genre": "Action, Crime, Sci-Fi",
    "Director": "Rian Johnson",
    "Writer": "Rian Johnson",
    "Actors": "Joseph Gordon-Levitt, Bruce Willis, Emily Blunt, Paul Dano",
    "Plot": "In 2074, when the mob wants to get rid of someone, the target is sent into the past, where a hired gun awaits - someone like Joe - who one day learns the mob wants to 'close the loop' by sending back Joe's future self for assassination.",
    "Language": "English, French",
    "Country": "USA, China",
    "Awards": "15 wins & 37 nominations.",
    "Poster": "http://i.imgur.com/ad02q4a.jpg",
    "Metascore": "84",
    "imdbRating": "7.5",
    "imdbVotes": "377691",
    "imdbID": "tt1276104",
    "Type": "movie",
    "Response": "True"
}, {
    "Title": "TRON: Legacy",
    "Year": "2010",
    "Rated": "PG",
    "Released": "17 Dec 2010",
    "Runtime": "125 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Joseph Kosinski",
    "Writer": "Edward Kitsis (screenplay), Adam Horowitz (screenplay), Edward Kitsis (story), Adam Horowitz (story), Brian Klugman (story), Lee Sternthal (story), Steven Lisberger (characters), Bonnie MacBird (characters)",
    "Actors": "Jeff Bridges, Garrett Hedlund, Olivia Wilde, Bruce Boxleitner",
    "Plot": "The son of a virtual world designer goes looking for his father and ends up inside the digital world that his father designed. He meets his father's corrupted creation and a unique ally who was born inside the digital world.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 10 wins & 39 nominations.",
    "Poster": "http://i.imgur.com/Smd2JFm.jpg",
    "Metascore": "49",
    "imdbRating": "6.8",
    "imdbVotes": "241380",
    "imdbID": "tt1104001",
    "Type": "movie",
    "Response": "True"
}, {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Mystery, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 153 wins & 171 nominations.",
    "Poster": "http://i.imgur.com/cF3DFGi.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1236546",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
}, {
    "Title": "Source Code",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "1 Apr 2011",
    "Runtime": "93 min",
    "Genre": "Mystery, Sci-Fi, Thriller",
    "Director": "Duncan Jones",
    "Writer": "Ben Ripley",
    "Actors": "Jake Gyllenhaal, Michelle Monaghan, Vera Farmiga, Jeffrey Wright",
    "Plot": "A soldier wakes up in someone else's body and discovers he's part of an experimental government program to find the bomber of a commuter train. A mission he has only 8 minutes to complete.",
    "Language": "English",
    "Country": "USA, Canada",
    "Awards": "1 win & 5 nominations.",
    "Poster": "http://i.imgur.com/wWuxzLe.jpg",
    "Metascore": "74",
    "imdbRating": "7.5",
    "imdbVotes": "327161",
    "imdbID": "tt0945513",
    "Type": "movie",
    "Response": "True"
}, {
    "Title": "Hackers",
    "Year": "1995",
    "Rated": "PG-13",
    "Released": "15 Sep 1995",
    "Runtime": "107 min",
    "Genre": "Comedy, Crime, Drama",
    "Director": "Iain Softley",
    "Writer": "Rafael Moreu",
    "Actors": "Jonny Lee Miller, Angelina Jolie, Jesse Bradford, Matthew Lillard",
    "Plot": "A young boy is arrested by the U.S. Secret Service for writing a computer virus and is banned from using a computer until his 18th birthday. Years later, he and his new-found friends ...",
    "Language": "English, Italian, Japanese, Russian",
    "Country": "USA",
    "Awards": "N/A",
    "Poster": "http://i.imgur.com/njaHNJn.jpg",
    "Metascore": "46",
    "imdbRating": "6.2",
    "imdbVotes": "49883",
    "imdbID": "tt0113243",
    "Type": "movie",
    "Response": "True"
}, {
    "Title": "The Social Network",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "1 Oct 2010",
    "Runtime": "120 min",
    "Genre": "Biography, Drama",
    "Director": "David Fincher",
    "Writer": "Aaron Sorkin (screenplay), Ben Mezrich (book)",
    "Actors": "Jesse Eisenberg, Rooney Mara, Bryan Barter, Dustin Fitzsimons",
    "Plot": "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their idea, and the cofounder who was later squeezed out of the business.",
    "Language": "English, French",
    "Country": "USA",
    "Awards": "Won 3 Oscars. Another 166 wins & 132 nominations.",
    "Poster": "http://i.imgur.com/jC86duZ.jpg",
    "Metascore": "95",
    "imdbRating": "7.8",
    "imdbVotes": "414791",
    "imdbID": "tt1285016",
    "Type": "movie",
    "Response": "True"
}, {
    "Title": "The Imitation Game",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "25 Dec 2014",
    "Runtime": "114 min",
    "Genre": "Biography, Drama, Thriller",
    "Director": "Morten Tyldum",
    "Writer": "Graham Moore, Andrew Hodges (book)",
    "Actors": "Benedict Cumberbatch, Keira Knightley, Matthew Goode, Rory Kinnear",
    "Plot": "During World War II, mathematician Alan Turing tries to crack the enigma code with help from fellow mathematicians.",
    "Language": "English, German",
    "Country": "UK, USA",
    "Awards": "Won 1 Oscar. Another 51 wins & 125 nominations.",
    "Poster": "http://i.imgur.com/HM4iaQy.jpg",
    "Metascore": "73",
    "imdbRating": "8.1",
    "imdbVotes": "278826",
    "imdbID": "tt2084970",
    "Type": "movie",
    "Response": "True"
}, {
    "Title": "Office Space",
    "Year": "1999",
    "Rated": "R",
    "Released": "19 Feb 1999",
    "Runtime": "89 min",
    "Genre": "Comedy",
    "Director": "Mike Judge",
    "Writer": "Mike Judge (Milton animated shorts), Mike Judge (screenplay)",
    "Actors": "Ron Livingston, Jennifer Aniston, David Herman, Ajay Naidu",
    "Plot": "Three company workers who hate their jobs and decide to rebel against their greedy boss.",
    "Language": "English",
    "Country": "USA",
    "Awards": "2 nominations.",
    "Poster": "http://i.imgur.com/bBt7i2d.jpg",
    "Metascore": "68",
    "imdbRating": "7.8",
    "imdbVotes": "182428",
    "imdbID": "tt0151804",
    "Type": "movie",
    "Response": "True"
}, {
    "Title": "Ex Machina",
    "Year": "2015",
    "Rated": "R",
    "Released": "24 Apr 2015",
    "Runtime": "108 min",
    "Genre": "Drama, Sci-Fi",
    "Director": "Alex Garland",
    "Writer": "Alex Garland",
    "Actors": "Domhnall Gleeson, Corey Johnson, Oscar Isaac, Alicia Vikander",
    "Plot": "A young programmer is selected to participate in a breakthrough experiment in artificial intelligence by evaluating the human qualities of a breathtaking female A.I.",
    "Language": "English",
    "Country": "UK",
    "Awards": "1 win & 2 nominations.",
    "Poster": "http://i.imgur.com/uN0Y2ZV.jpg",
    "Metascore": "78",
    "imdbRating": "7.8",
    "imdbVotes": "82581",
    "imdbID": "tt0470752",
    "Type": "movie",
    "Response": "True"
}];