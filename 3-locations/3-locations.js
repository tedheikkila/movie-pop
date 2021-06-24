let url = "https://api.watchmode.com/v1/search/?apiKey=nWQ1K1yKiv353tqprKAXswej5MlSUEmSSLqaDjDe&search_field=name&search_value=ted&types=movie";

function searchApi() {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let id = data.title_results[0].id;
            let titleUrl = "https://api.watchmode.com/v1/title/" + id + "/sources/?apiKey=nWQ1K1yKiv353tqprKAXswej5MlSUEmSSLqaDjDe&regions=US";
            titleSourcesApi(titleUrl);
    });
}

searchApi();

function titleSourcesApi(titleIdUrl) {
    fetch(titleIdUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let locations = data;
        locations.sort((a, b) => (a.source_id > b.source_id) ? 1 : -1);
        console.log(locations);
    });
}

function deleteDuplicateSources() {
    
}