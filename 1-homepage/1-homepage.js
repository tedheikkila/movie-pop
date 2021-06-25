

var searchReviewButton = document.querySelector('#search-review-button');
var trailerInputEl = document.querySelector('#trailer-title');
var locationInputEl = document.querySelector('#location-title');


var formTrailerHandler = function (event) {
    event.preventDefault();
  
    var review = reviewInputEl.value.trim();
  
    if (review) {
      getUserRepos(review, trailer, location);
  
      reviewInputEl.value = '';
    } else {
      alert('Please enter a movie title');
    }
  };






















searchtrailerButton.addEventListener('click', formTrailerHandler);
