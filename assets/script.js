var resultsContainer = document.createElement("section");
resultsContainer.setAttribute("id", "results_container")
var resultsList = document.createElement("ol");
resultsList.setAttribute("id", "results_list");

resultsContainer.appendChild(resultsList);

// have list items be created as part of fetch()?
// added placeholder fetch()
// select the elements on the resultsList 

fetch(url).then(function (result) {
    if (result.ok) {
        result.json().then(function(data) {
            resultsContainer.innerHTML = ""; // clearing results holder element before data is changed by query
            console.log(data);
            if (data.results.length === 0) {
                resultsContainer.textContent = "no results for " + query;
            }
            for (var i=0; i<data.results.length;i++) {
                var result = data.results[i]; 

                var title = result.title;
                var url = result.url;

                var newLink = document.createElement("a");
                newLink.textContent = title;
                newLink.setAttribute("href", url);

                resultsContainer.appendChild(newLink);
            }
        });
    }
});
