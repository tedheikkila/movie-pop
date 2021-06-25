


var button = document.getElementById('searchbtn');


var api = 'https://api.nytimes.com/svc/movies/v2/reviews/picks.json?';

var apiKey = '&api-key=2zOVysM67JvX3UMtLIhU2eAWk8V1i0m8';

var apiUrl = api + apiKey;

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");




function criticsPicks() {
    
    

    fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

        displayMovies(data)

      
    })
}
function criticsPicksTwo() {
    
    

    fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

        displayMoviesTwo(data)

      
    })
}
function criticsPicksThree() {
    
    

    fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

        displayMoviesThree(data)

      
    })
}
function criticsPicksFour() {
    
    

    fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

        displayMoviesFour(data)

      
    })
}



function displayMovies(data) {
    for (var i = 0; i < 5; i++) {
        
    const movie = data.results[i];
    const moviesDiv = document.getElementById("movies");
    const movieTitle = movie.display_title;
    const heading = document.createElement("h1");
    heading.innerHTML = movieTitle;
    moviesDiv.appendChild(heading);
    
    const movieSummary = movie.summary_short;
    const summary = document.createElement("h3");
    summary.innerHTML = movieSummary;
    moviesDiv.appendChild(summary);
        
    const movieImage = document.createElement("img");
    movieImage.setAttribute('id','movieImage');

    movieImage.src = movie.multimedia.src;
    moviesDiv.appendChild(movieImage);

    const reviewUrl = movie.link.url;
    console.log(reviewUrl);

    
    
    
}
}

function displayMoviesTwo(data) {
    for (var i = 5; i < 10; i++) {
        
    const movie = data.results[i];
    const moviesDiv = document.getElementById("movies");
    const movieTitle = movie.display_title;
    const heading = document.createElement("h1");
    heading.innerHTML = movieTitle;
    moviesDiv.appendChild(heading);
    
    const movieSummary = movie.summary_short;
    const summary = document.createElement("h3");
    summary.innerHTML = movieSummary;
    moviesDiv.appendChild(summary);
        
    const movieImage = document.createElement("img");
    movieImage.setAttribute('id','movieImage');

    movieImage.src = movie.multimedia.src;
    moviesDiv.appendChild(movieImage);

    const reviewUrl = movie.link.url;
    console.log(reviewUrl);

    
    
    
}
}

function displayMoviesThree(data) {
    for (var i = 10; i < 15; i++) {
        
    const movie = data.results[i];
    const moviesDiv = document.getElementById("movies");
    const movieTitle = movie.display_title;
    const heading = document.createElement("h1");
    heading.innerHTML = movieTitle;
    moviesDiv.appendChild(heading);
    
    const movieSummary = movie.summary_short;
    const summary = document.createElement("h3");
    summary.innerHTML = movieSummary;
    moviesDiv.appendChild(summary);
        
    const movieImage = document.createElement("img");
    movieImage.setAttribute('id','movieImage');

    movieImage.src = movie.multimedia.src;
    moviesDiv.appendChild(movieImage);

    const reviewUrl = movie.link.url;
    console.log(reviewUrl);

    
    
    
}
}
function displayMoviesFour(data) {
    for (var i = 15; i < 20; i++) {
        
    const movie = data.results[i];
    const moviesDiv = document.getElementById("movies");
    const movieTitle = movie.display_title;
    const heading = document.createElement("h1");
    heading.innerHTML = movieTitle;
    moviesDiv.appendChild(heading);
    
    const movieSummary = movie.summary_short;
    const summary = document.createElement("h3");
    summary.innerHTML = movieSummary;
    moviesDiv.appendChild(summary);
        
    const movieImage = document.createElement("img");
    movieImage.setAttribute('id','movieImage');

    movieImage.src = movie.multimedia.src;
    moviesDiv.appendChild(movieImage);

    const reviewUrl = movie.link.url;
    console.log(reviewUrl);

    
    
    
}
}



button1.addEventListener("click", criticsPicks);
button2.addEventListener("click", criticsPicksTwo);
button3.addEventListener("click", criticsPicksThree);
button4.addEventListener("click", criticsPicksFour);
