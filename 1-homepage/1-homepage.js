// group one 1, movie pop, js for 1-homepage, 6-24-21, TWH

// global vars
const searchReviewButton = document.querySelector('#search-review-button');
const searchTrailerButton = document.querySelector('#search-trailer-button')
const searchLocationButton = document.querySelector('#search-location-button')
const poppinButton = document.querySelector('#poppin')
let cardTextTwo = document.querySelector('.card-text-two')
let cardTextThree = document.querySelector('.card-text-three')
let cardTextFour = document.querySelector('.card-text-four')

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


//trending movies api call and appending function
var trendingMoviesRequest = 'https://api.themoviedb.org/3/trending/movie/day?api_key=' + apiTmdbKey

 //API call for trending movies 
 function getTrendingMoviesApi() {
  // fetch request loads city typed in
  fetch(trendingMoviesRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      for (i=1; i<4; i++) {
          var hotMovie = "#" + i + " " + data.results[i].title

          var movieEl = document.createElement('p');

          movieEl.classList = 'list-item flex-row justify-space-between align-center'

          movieEl.textContent = hotMovie

          cardTextTwo.append(movieEl)
      }

    });
}

//events listeners added for poppin Button to initiate 3 different API calls
poppinButton.addEventListener('click', getTrendingMoviesApi);


// https://api.themoviedb.org/3/trending/person/day?api_key=<<api_key>>

//trending movies api call and appending function
var trendingPersonRequest = 'https://api.themoviedb.org/3/trending/person/day?api_key=' + apiTmdbKey

 //API call for trending movies 
 function getTrendingPersonApi() {
  // fetch request loads city typed in
  fetch(trendingPersonRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      for (i=1; i<4; i++) {
          var hotPerson = "#" + i + " " + data.results[i].name

          var personEl = document.createElement('p');

          personEl.classList = 'list-item flex-row justify-space-between align-center'

          personEl.textContent = hotPerson

          cardTextFour.append(personEl)
      }

    });
}

//events listeners added for poppin Button to initiate 3 different API calls
poppinButton.addEventListener('click', getTrendingPersonApi);




// https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1


//upcoming movies api call and appending function
var upcomingMovieRequest = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + apiTmdbKey

 //API call for trending movies 
 function getUpcomingMoviesApi() {
  // fetch request loads
  fetch(upcomingMovieRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      console.log(data)

      for (i=1; i<4; i++) {
          var hotUpcoming = "#" + i + " " + data.results[i].title

          var upcomingEl = document.createElement('p');

          upcomingEl.classList = 'list-item flex-row justify-space-between align-center'

          upcomingEl.style.color = "rgb(247, 247, 103)"

          upcomingEl.textContent = hotUpcoming

          cardTextThree.append(upcomingEl)
      }

    });
}

//events listeners added for poppin Button to initiate 3 different API calls
poppinButton.addEventListener('click', getUpcomingMoviesApi);