var imageContainer = document.querySelector(".img-container");
let trailerObj = "";


function getApi() {

    var requestUrl = "https://api.themoviedb.org/3/movie/" + 214756 + "/videos?api_key=d31824240499f82a818f5a74b293bc0d&language=en-US";
    // var requestUrl = "https://api.themoviedb.org/3/search/movie?api_key=d31824240499f82a818f5a74b293bc0d&language=en-US&query=Ted&page=1&include_adult=false";

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            console.log(data)

            for (var i = 0; i < data.results.length; i++) {
                //console.log(data.results[0])

                if (data.results[i].type == "Trailer") {

                    getYoutubeLink(data.results[i].key);
                    break;

                }

            }
        });
}

function getYoutubeLink(key) {
    console.log("youtube.com/watch?v=" + key);
}
getApi();
console.log(trailerObj);

// console.log(trailerObj.key);
// console.log("youtube.com/watch?v=" + trailerObj);

imageContainer.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("img")) {
        var state = elememt.getAttribute("")
    }
});





// Local storage for previously searched movies
// searchButton.addEventListener("click", getApi)

// localStorage.setItem("movieId", "myvalue");

const movieNames = document.getElementById("movie-name");  //Input key
// const movieInput = document.getElementById("movie-input"); //Input Value
const searchBtn = document.getElementById("search");       //Button
const savedNames = document.getElementById("savedNames");  //Local Storage Output

function createItem() {
    // const key = movieNames.key;
    // const value = movieInput.value;
localStorage.setItem("movieName", Object());
//     var data = localStorage.setItem(movieNames);
//     if (savedNames.length === SEARCH_LIMIT) {
//         savedNames.pop();
}

function readValue() {
var x = localStorage.getItem("movieName");
document.getElementById("savedNames").innerHTML = x;

// window.localStorage.getItem("movieName");
// JSON.parse(window.localStorage.getItem("movieName"));

// console.log(key);
// console.log(value);

// function goBackBtn()

goBackButton.addEventListener("click", homepage);
var homepage = function (event) {
    console.log(event)
    document.location.replace('../index.html');
}
 window.localStorage.clear();



// $("#search").on("click", function (e) {
//     e.preventDefault();

//     var value = $("#movie-name").val();
//     getApi(value);
// });



   // var input = document.querySelector("#movie-name");
    // var movieId = input.value.trim();
    // const searchButton = document.querySelector("#search-btn");

    // function getMovieId() {
    //     var 

}