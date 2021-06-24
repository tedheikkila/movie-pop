var imageContainer = document.querySelector(".img-container");

imageContainer.addEventListener("click", function(event) { 
var element = event.target;
if (element.matches("img")) {
    var state = elememt.getAttribute("")
}
}

function getApi() {
      var requestUrl = 'https://api.themoviedb.org/3/movie/76341?api_key=d31824240499f82a818f5a74b293bc0d';
      fetch(requestUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data)
    });
}
getApi();



function goBackBtn


