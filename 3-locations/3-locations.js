let movieTitle, searchUrl = "";

let sourceUrl = "https://api.watchmode.com/v1/sources/?apiKey=nWQ1K1yKiv353tqprKAXswej5MlSUEmSSLqaDjDe&regions=US";
let sourceNames = [];
let sourceListParent = document.getElementById("source-list");

function searchApi() {
    fetch(searchUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            try {
                let id = data.title_results[0].id;
                let titleUrl = "https://api.watchmode.com/v1/title/" + id + "/sources/?apiKey=nWQ1K1yKiv353tqprKAXswej5MlSUEmSSLqaDjDe&regions=US";
                titleSourcesApi(titleUrl);
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
            console.log(locations);

            let sourceIds = [];
            for (let i of locations) {
                if (!sourceIds.includes(i.source_id)) {
                    sourceIds.push(i.source_id)
                }
            }
            arrayOfSourceNames(sourceIds);
            console.log(sourceIds);
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
            console.log(data);
            console.log(sourceNames);
            displaySources(sourceNames);
            
        });
}

function movieTitleToSearch(title) {
    // if(title.includes(":")) {

    // }
    title = title.trim();
    movieTitle = title.replace(/ /g, "%20");
    searchUrl = "https://api.watchmode.com/v1/search/?apiKey=nWQ1K1yKiv353tqprKAXswej5MlSUEmSSLqaDjDe&search_field=name&search_value=" + movieTitle + "&types=movie";
    searchApi();
}

function displaySources(ls) {
    for (let i of ls) {
        console.log(i);
        let newSource = document.createElement("li");
        newSource.textContent = i;
        newSource.classList.add("body-text");
        sourceListParent.appendChild(newSource);
    }
}


// movieTitleToSearch("john wick");