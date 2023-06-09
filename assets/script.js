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

                var unsortedItems = document.createElement("a");
                unsortedItems.textContent = title;
                unsortedItems.setAttribute("href", url);
                unsortedItems.setAttribute("id", "unsorted")

                resultsContainer.appendChild(unsortedItems);
            }
        });
    }
});

// result item id needs to be added by user input
// need to select result items by id
// elements need to be sorted by id

var userRating = document.createElement("input");
userRating.setAttribute("id", "user_rating");
var userInput = document.getElementById("user_rating").value; // figure out how to restrict user rating to numbers between 1 and 10

unsortedItems.appendChild(userRating);

// place unsorted items in an object and use json to retrieve document.write(obj.key[1].)

var itemsToBeSorted = {
    title: url,
    title2: url,
    title3: url,
}

function sortResults() {
    // take id values and add to array then use .sort?
    document.write(obj.names[i])
    
}

