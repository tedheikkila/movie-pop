var imageContainer = document.querySelector(".img-container");
let trailerObj = "";




goBackButton.addEventListener("click", homepage);
var formReviewHandler = function (event) {
    console.log(event)
    document.location.replace('../1-homepage/1-homepage.html');
}




imageContainer.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("img")) {
        var state = elememt.getAttribute("")
    }
});
var input = document.querySelector("#movie-name");
var movieId = input.value.trim();
const searchButton = document.querySelector("#search-btn");

// function getMovieId() {
//     var 







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
        } );
}

function getYoutubeLink(key) {
    console.log("youtube.com/watch?v=" + key);
}
getApi();
console.log(trailerObj);















// Local storage for previously searched movies
// searchButton.addEventListener("click", getApi)


// localStorage.setItem("movieId", "myvalue");


// setItem() : Add key and value to localStorage.
// getItem() : This is how you get items from localStorage.
// removeItem() : Remove an item by key from localStorage.
// clear() : Clear all localStorage.



// function goBackBtn()






// console.log(trailerObj.key);
// console.log("youtube.com/watch?v=" + trailerObj);