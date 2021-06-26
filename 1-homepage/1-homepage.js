// group one 1, movie pop, js for 1-homepage, 6-24-21

// global vars
const searchReviewButton = document.querySelector('#search-review-button');
const searchTrailerButton = document.querySelector('#search-trailer-button')
const searchLocationButton = document.querySelector('#search-location-button')


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





