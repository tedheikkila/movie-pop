
//..var apiUrl = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=lebowski&api-key=2zOVysM67JvX3UMtLIhU2eAWk8V1i0m8'

var button = document.getElementById('searchbtn');


var api = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';

var apiKey = '&api-key=2zOVysM67JvX3UMtLIhU2eAWk8V1i0m8';

var apiUrl = api + "lebowski"+ apiKey;


function getTitleInput(){
            
    var titleVal = document.getElementById("titleSearch").value;
    
    console.log(titleVal);
}



function getApi() {
    
    

    fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

        console.log(data);

      
    })
}

button.addEventListener("click", getTitleInput);

button.addEventListener("click", getApi);
