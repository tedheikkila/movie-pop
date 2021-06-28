var imageContainer = document.querySelector(".img-container");
let trailerObj = "";
let movieInput = document.querySelector('#movie-name');
const searchBtn = document.querySelector(".button");
const goBackBtn = document.querySelector('#go-back');

let trailerDiv = document.getElementById("trailer-div");

// initiates when user clicks search buttons; validates input; gives user feedback for false values
function movieFormHandler(event) {
    event.preventDefault();
    var movieTyped = movieInput.value.trim();
    movieInput.value = "";
    var requestUrl = 'https://api.themoviedb.org/3/search/movie?api_key=d31824240499f82a818f5a74b293bc0d&language=en-US&query=' + movieTyped + '&page=1&include_adult=false';
    getmovieApi(requestUrl);
}

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

function getMovieIDApi(movieID) {

    var requestIDUrl = "https://api.themoviedb.org/3/movie/" + movieID + "/videos?api_key=d31824240499f82a818f5a74b293bc0d&language=en-US";

    fetch(requestIDUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.results.length; i++) {
                if (data.results[i].type == "Trailer") {

                    getYoutubeLink(data.results[i].key);
                    break;
                }
            }
        });
}

function getYoutubeLink(key) {
    var video = "https://www.youtube.com/embed/" + key;
    displayTrailer(video);
}

function displayTrailer(trailerUrl) {
    trailerDiv.innerHTML = "";
    let newIframe = document.createElement("iframe");
    newIframe.setAttribute("width", "420");
    newIframe.setAttribute("height", "365");
    newIframe.setAttribute("src", trailerUrl);
    trailerDiv.appendChild(newIframe);
}

searchBtn.addEventListener('click', movieFormHandler);