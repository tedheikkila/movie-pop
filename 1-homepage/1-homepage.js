// group one 1, movie pop, js for 1-homepage, 6-24-21

// global vars
const searchReviewButton = document.querySelector('#search-review-button');
const searchTrailerButton = document.querySelector('#search-trailer-button')
const searchLocationButton = document.querySelector('#search-location-button')
const poppinButton = document.querySelector('#poppin')

// handles review click event
var buttonReviewHandler = function (event) {
    console.log(event)
    document.location.replace('./2-reviews/2-reviews.html');

}

// handles trailer click event
var buttonTrailerHandler = function (event) {
  console.log(event)
  document.location.replace('./4-trailers/4-trailers.html');
  
}

 // handles locations click event
var buttonLocationHandler = function (event) {
  console.log(event)
  document.location.replace('./3-locations/3-locations.html');
}

//events listeners added for review, traielr, and location buttons
searchReviewButton.addEventListener('click', buttonReviewHandler);

searchTrailerButton.addEventListener('click', buttonTrailerHandler);

searchLocationButton.addEventListener('click', buttonLocationHandler);


// TMDb API Key >> b79f4f0496a78e0caa240f3b36e6debe

var apiTmdbKey = 'b79f4f0496a78e0caa240f3b36e6debe'

// example of API request >> https://api.themoviedb.org/3/movie/550?api_key=b79f4f0496a78e0caa240f3b36e6debe

// trending movies request: https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>

var trendingMoviesRequest = 'https://api.themoviedb.org/3/trending/movie/day?api_key=' + apiTmdbKey

 //API call for trending movies 
 function getTrendingMoviesApi() {
  // fetch request loads city typed in
  fetch(trendingMoviesRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      for (i=0; i<3; i++) {
          console.log(data.results[i].title)

          

      }

    

    });
}

//events listeners added for review, traielr, and location buttons
poppinButton.addEventListener('click', getTrendingMoviesApi);