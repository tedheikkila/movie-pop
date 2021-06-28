let movieTitle, searchUrl = "";

let sourceUrl = "https://api.watchmode.com/v1/sources/?apiKey=nWQ1K1yKiv353tqprKAXswej5MlSUEmSSLqaDjDe&regions=US";
let sourceNames = [];
let sourceListParent = document.getElementById("source-list");
let searchButton = document.getElementById("search-button");

const searchUrlBeginning = "https://api.watchmode.com/v1/search/?apiKey=nWQ1K1yKiv353tqprKAXswej5MlSUEmSSLqaDjDe&search_field=name&types=movie&search_value=";

function searchApi() {
    fetch(searchUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            try {
                if (data.title_results.length == 0) {
                    console.log("Sorry but no movie came up with that name");
                } else {
                    let id = data.title_results[0].id;
                    let titleUrl = "https://api.watchmode.com/v1/title/" + id + "/sources/?apiKey=nWQ1K1yKiv353tqprKAXswej5MlSUEmSSLqaDjDe&regions=US";
                    titleSourcesApi(titleUrl);
                }
            } catch (error) {
                console.log("Incorrect movie title")
            }
        });
}

function titleSourcesApi(titleIdUrl) {
    fetch(titleIdUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let locations = data;
            locations.sort((a, b) => (a.source_id > b.source_id) ? 1 : -1);
            // console.log(locations);

            let sourceIds = [];
            for (let i of locations) {
                if (!sourceIds.includes(i.source_id)) {
                    sourceIds.push(i.source_id)
                }
            }
            arrayOfSourceNames(sourceIds);
            // console.log(sourceIds);
        });
}

function arrayOfSourceNames(ls) {
    fetch(sourceUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let sources = data;
            for (let i of ls) {
                let sourceName = sources.find(function (source, index) {
                    if (source.id == i) {
                        return true;
                    }
                });

                sourceNames.push(sourceName.name);
            }
            // console.log(data);
            // console.log(sourceNames);
            displaySources(sourceNames);
            
        });
}

function movieTitleToSearch(title) {
    // if(title.includes(":")) {

    // }
    let searchedMovie = document.getElementById("searched-movie");
    title = title.trim();
    searchedMovie.textContent = title + " can be watched from the following streaming services:"
    movieTitle = title.replace(/ /g, "%20");
    searchUrl = searchUrlBeginning + movieTitle;
    searchApi();
}

function displaySources(ls) {
    sourceListParent.innerHTML = "";
    for (let i of ls) {
        console.log(i);
        let newSource = document.createElement("li");
        newSource.textContent = i;
        newSource.classList.add("body-text");
        sourceListParent.appendChild(newSource);
    }
}

searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    let searchField = document.getElementById("movie-search");
    console.log(searchField.value);
    sourceNames = [];
    movieTitleToSearch(searchField.value);
    searchField.value = "";
});