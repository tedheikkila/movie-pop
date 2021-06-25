// group one 1, movie pop, js for 1-homepage, 6-24-21

// global vars
const searchReviewButton = document.querySelector('#search-review-button');
const searchTrailerButton = document.querySelector('#search-trailer-button')
const searchLocationButton = document.querySelector('#search-location-button')
let trailerInputEl = document.querySelector('#trailer-title');
let locationInputEl = document.querySelector('#location-title');



var formReviewHandler = function (event) {
    console.log(event)
}

var formTrailerHandler = function (event) {
    event.preventDefault();
  
    var trailer = trailerInputEl.value.trim();
  
    if (trailer) {
      getTrailerApi(trailer);
  
      trailerInputEl.value = '';
    } else {
      alert('Please enter a movie title');
    }
  };

  var formLocationHandler = function (event) {
    event.preventDefault();
  
    var location = locationInputEl.value.trim();
  
    if (location) {
      getLocation(location);
  
      locationInputEl.value = '';
    } else {
      alert('Please enter a movie title');
    }
  };














searchReviewButton.addEventListener('click', formReviewHandler);

searchTrailerButton.addEventListener('click', formTrailerHandler);

searchLocationButton.addEventListener('click', formLocationHandler)


