// js for trailers, movie pop, 6/29/21

// global vars
var imageContainer = document.querySelector(".img-container");
let trailerObj = "";
let movieInput = document.querySelector('#movie-name');
const searchBtn = document.querySelector("#search");
const goBackBtn = document.querySelector('#go-back');
let trailerDiv = document.getElementById("trailer-div");

// initiates when user clicks search buttons; validates input; gives user feedback for false values
function movieFormHandler(event) {
    event.preventDefault();
    var movieTyped = movieInput.value.trim();
    movieInput.value = "";
    var requestUrl = 'https://api.themoviedb.org/3/search/movie?api_key=d31824240499f82a818f5a74b293bc0d&language=en-US&query=' + movieTyped + '&page=1&include_adult=false';
    
    //initiates first API request based on typed movie title
    getmovieApi(requestUrl);
}

// fetches movie from TMDb
function getmovieApi(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var movieID = data.results[0].id;
            getMovieIDApi(movieID);
        });
}

// gets movie ID based upon provided movie title
function getMovieIDApi(movieID) {

    var requestIDUrl = "https://api.themoviedb.org/3/movie/" + movieID + "/videos?api_key=d31824240499f82a818f5a74b293bc0d&language=en-US";

    fetch(requestIDUrl)
        .then(function (response) {
            return response.json();
        })
        //catches the first trailer value
        .then(function (data) {
            for (var i = 0; i < data.results.length; i++) {
                if (data.results[i].type == "Trailer") {

                    getYoutubeLink(data.results[i].key);
                    break;
                }
            }
        });
}

// puts key retrieved and concatenates it onto a youtube string
function getYoutubeLink(key) {
    var video = "https://www.youtube.com/embed/" + key;
    displayTrailer(video);
}

// creates and appends an iframe to the page
function displayTrailer(trailerUrl) {
    trailerDiv.innerHTML = "";
    let newIframe = document.createElement("iframe");
    newIframe.setAttribute("width", "620");
    newIframe.setAttribute("height", "565");
    newIframe.setAttribute("src", trailerUrl);
    trailerDiv.appendChild(newIframe);
}

// seach btn that initiates the first function, movieFormHandler
searchBtn.addEventListener('click', movieFormHandler);