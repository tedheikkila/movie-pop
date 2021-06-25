


var button = document.getElementById('searchbtn');


var api = 'https://api.nytimes.com/svc/movies/v2/reviews/picks.json?query=';

var apiKey = '&api-key=2zOVysM67JvX3UMtLIhU2eAWk8V1i0m8';

var apiUrl = api + apiKey;




function getApi() {
    
    

    fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

        console.log(data);
        displayMovies(data)

      
    })
}



function displayMovies(data) {
    for (var i = 0; i < data.results.length; i++) {
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
        movieImage.src = movie.multimedia.src;
        moviesDiv.appendChild(movieImage);
    
    }
}

button.addEventListener("click", getApi);
