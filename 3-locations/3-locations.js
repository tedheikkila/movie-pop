// Setting up variables that are used later to store various bits of data
let movieTitle = "";
let sourceNames = [];
let localStorageArr = [];

// Selectors for various elements in the html
let sourceListParent = document.getElementById("source-list");
let searchButton = document.getElementById("search-button");
let previousSearchesDiv = document.getElementById("previous-searched-movies");
let clearButton = document.getElementById("clear-button");
let searchedMovie = document.getElementById("searched-movie");

// All of the consts for the several API calls made throughout this webpage
const sourceUrl = "https://api.watchmode.com/v1/sources/?apiKey=nWQ1K1yKiv353tqprKAXswej5MlSUEmSSLqaDjDe&regions=US";
const searchUrlBeginning = "https://api.watchmode.com/v1/search/?apiKey=nWQ1K1yKiv353tqprKAXswej5MlSUEmSSLqaDjDe&search_field=name&types=movie&search_value=";
const titleUrlEnding = "/sources/?apiKey=nWQ1K1yKiv353tqprKAXswej5MlSUEmSSLqaDjDe&regions=US";
const titleUrlBeginning = "https://api.watchmode.com/v1/title/";



function setMovieTitle(titleName) {
    movieTitle = titleName;
}

function setPreviousSearch(titleName) {
    let localStorageData = JSON.parse(localStorage.getItem("titles"));
    if (localStorageData != null) {
        if (!localStorageData.includes(titleName)) {
            localStorageArr.push(titleName);
            localStorage.setItem("titles", JSON.stringify(localStorageArr));
        } else {
            localStorage.setItem("titles", JSON.stringify(localStorageArr));
        }
    } else {
        localStorageArr.push(titleName);
        localStorage.setItem("titles", JSON.stringify(localStorageArr));
    }
}

function searchApi(searchUrl) {
    fetch(searchUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            try {
                if (data.title_results.length == 0) {
                    searchedMovie.textContent = "Sorry, no movie came up with that name. Please make sure that the movie title is exactly correct in the search bar";
                } else {
                    let id = data.title_results[0].id;
                    setMovieTitle(data.title_results[0].name);
                    setPreviousSearch(data.title_results[0].name);
                    searchedMovie.textContent = movieTitle + " can be watched from the following streaming services:"
                    let titleUrl = titleUrlBeginning + id + titleUrlEnding;
                    titleSourcesApi(titleUrl);
                }
            } catch (error) {
                console.log(error);
                searchedMovie.textContent = "Error caught in the program. Please check the dev console for an error message"
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
            let sourceIds = [];
            for (let i of locations) {
                if (!sourceIds.includes(i.source_id)) {
                    sourceIds.push(i.source_id)
                }
            }
            arrayOfSourceNames(sourceIds);
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
            displaySources(sourceNames);
            displayPreviousSearches();
        });
}

function movieTitleToSearch(title) {
    if (title == "") {
        searchedMovie.textContent = "Please enter in an actual movie title"
    } else {
        title = title.trim();
        movieTitle = title.replace(/ /g, "%20");
        let searchUrl = searchUrlBeginning + movieTitle;
        searchApi(searchUrl);
    }
}

function displaySources(ls) {
    sourceListParent.innerHTML = "";
    if (ls.length == 0) {
        let newSource = document.createElement("li");
        newSource.textContent = "Sorry, we weren't able to find any streaming locations for " + movieTitle;
        newSource.classList.add("body-text");
        sourceListParent.appendChild(newSource);
    } else {
        for (let i of ls) {
            let newSource = document.createElement("li");
            newSource.textContent = i;
            newSource.classList.add("body-text");
            sourceListParent.appendChild(newSource);
        }
    }
}

function displayPreviousSearches() {
    previousSearchesDiv.innerHTML = "";
    let localStorageData = JSON.parse(localStorage.getItem("titles"));
    if (localStorageData != null) {
        localStorageArr = localStorageData;

        for (let i = 0; i < localStorageData.length; i++) {
            let previousSearchCard = document.createElement("h3");
            previousSearchCard.textContent = localStorageData[i];
            previousSearchCard.classList.add("card");
            previousSearchCard.classList.add("previous-movie");
            previousSearchesDiv.appendChild(previousSearchCard);
        }
    }
}

// Below are the event listeners for the locations webapge
// This event listener is for the submit button. On click it will call movieTitleToSearch() on whatever the given movie title is
searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    let searchField = document.getElementById("movie-search");
    sourceNames = [];
    movieTitleToSearch(searchField.value);
    searchField.value = "";
    displayPreviousSearches();
});

previousSearchesDiv.addEventListener("click", function (event) {
    event.preventDefault();
    let titleName = event.target.textContent;
    sourceNames = [];
    movieTitleToSearch(titleName);
    displayPreviousSearches();
});

clearButton.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    displayPreviousSearches();
});

displayPreviousSearches();