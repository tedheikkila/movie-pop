// group one 1, movie pop, js for index.html, 6-24-21, TWH

// global vars
const searchReviewButton = document.querySelector('#search-review-button');
const searchTrailerButton = document.querySelector('#search-trailer-button')
const searchLocationButton = document.querySelector('#search-location-button')
const poppinButton = document.querySelector('#poppin')
const shuffleButton = document.querySelector('#shuffle')
let cardTextTwo = document.querySelector('.card-text-two')
let cardTextThree = document.querySelector('.card-text-three')
let cardTextFour = document.querySelector('.card-text-four')
let poppedMovie = document.querySelector('#popped-movie')

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

// events listeners added for review, trailer, and location buttons
searchReviewButton.addEventListener('click', buttonReviewHandler);
searchTrailerButton.addEventListener('click', buttonTrailerHandler);
searchLocationButton.addEventListener('click', buttonLocationHandler);

// TMDb API Key >> b79f4f0496a78e0caa240f3b36e6debe
var apiTmdbKey = 'b79f4f0496a78e0caa240f3b36e6debe'

// example of API request >> https://api.themoviedb.org/3/movie/550?api_key=b79f4f0496a78e0caa240f3b36e6debe

//trending movies api call and appending function
var trendingMoviesRequest = 'https://api.themoviedb.org/3/trending/movie/day?api_key=' + apiTmdbKey

// API call for trending movies 
function getTrendingMoviesApi() {
  // fetch request
  fetch(trendingMoviesRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      // appends 3 styled p tags to hot Movies
      for (i = 1; i < 6; i++) {
        var hotMovie = "#" + i + " " + data.results[i].title

        var movieEl = document.createElement('p');

        movieEl.classList = 'list-item flex-row justify-space-between align-center'

        movieEl.textContent = hotMovie

        cardTextTwo.append(movieEl)
      }
    });

  //disables poppinButton to prevent previously appended items from being duplicated
  poppinButton.disabled = true
}

// events listeners added for poppin Button to initiate 3 different API calls
poppinButton.addEventListener('click', getTrendingMoviesApi);

// https://api.themoviedb.org/3/trending/person/day?api_key=<<api_key>>

// trending person api call and appending function
var trendingPersonRequest = 'https://api.themoviedb.org/3/trending/person/day?api_key=' + apiTmdbKey

// API call for trending person
function getTrendingPersonApi() {
  // fetch request
  fetch(trendingPersonRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      // appends 3 styled p tags to hot Artists
      for (i = 1; i < 6; i++) {
        if (data.results[i].name == "Никита Федин") {
          var hotPerson = "#" + i + " " + data.results[6].name
        } else
          var hotPerson = "#" + i + " " + data.results[i].name

        var personEl = document.createElement('p');

        personEl.classList = 'list-item flex-row justify-space-between align-center'

        personEl.textContent = hotPerson

        cardTextFour.append(personEl)
      }
    });

  //disables poppinButton to prevent previously appended items from being duplicated
  poppinButton.disabled = true
}

// events listeners added for poppin Button to initiate 3 different API calls
poppinButton.addEventListener('click', getTrendingPersonApi);

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

// popular movies api call and appending function
var popularMovieRequest = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiTmdbKey + '&language=en-US&page=1'

// API call for popular movies 
function getPopularMoviesApi() {
  // fetch request loads
  fetch(popularMovieRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      // appends 3 styled p tags to in the Mic
      for (i = 1; i < 6; i++) {
        var popMovie = "#" + i + " " + data.results[i].title

        var popMovieEl = document.createElement('p');

        popMovieEl.classList = 'list-item flex-row justify-space-between align-center'

        popMovieEl.style.color = "rgb(247, 247, 103)"

        popMovieEl.textContent = popMovie

        cardTextThree.append(popMovieEl)
      }

    });

  //disables poppinButton to prevent previously appended items from being duplicated
  poppinButton.disabled = true
}

// events listeners added for poppin Button to initiate 3 different API calls
poppinButton.addEventListener('click', getPopularMoviesApi);

// API call for popular movies 
function shuffleMoviesApi() {
  // fetch request loads
  fetch(popularMovieRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      //this could be refactored (adding each string called title to an array; how to do this in for loop?)
      var One = data.results[0].title
      var Two = data.results[1].title
      var Three = data.results[2].title
      var Four = data.results[3].title
      var Five = data.results[4].title
      var Six = data.results[5].title
      var Seven = data.results[6].title
      var Eight = data.results[7].title
      var Nine = data.results[8].title
      var Ten = data.results[9].title
      var Eleven = data.results[10].title
      var Twelve = data.results[11].title
      var Thirteen = data.results[12].title
      var Fourteen = data.results[13].title
      var Fifteen = data.results[14].title
      var Sixteen = data.results[15].title
      var Seventeen = data.results[16].title
      var Eighteen = data.results[17].title
      var Nineteen = data.results[18].title
      var Twenty = data.results[19].title

      var twentyMovies = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve,
        Thirteen, Fourteen, Fifteen, Sixteen, Seventeen, Eighteen, Nineteen, Twenty
      ]

      //sorts the top 20 popular movie strings using Fisher-Yates shuffle method
      function shuffle() {
        var m = twentyMovies.length, t, i;
        while (m) {
          i = Math.floor(Math.random() * m--);
          t = twentyMovies[m];
          twentyMovies[m] = twentyMovies[i];
          twentyMovies[i] = t;
        }
        return twentyMovies;
      }

      //calls shuffled function
      var shuffled = shuffle(twentyMovies)

      //slices first title at index position 0
      var shuffleSliced = shuffled.slice(0, 1)

      //displays movie in textarea (read only; intent is for user to copy and paste this title)
      poppedMovie.textContent = shuffleSliced
    });

}

shuffleButton.addEventListener('click', shuffleMoviesApi)