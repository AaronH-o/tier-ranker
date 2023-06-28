var fetchButton = document.getElementById('addListButton');
var searchInput = document.getElementById('listInput');
var resultsHolder = document.getElementById('itemList'); 
var itemRating = document.getElementById('elementRating');

const categoryInput = document.getElementById('category-input');
const platformInput = document.getElementById('platform-input');

// create API request URL

fetchButton.addEventListener('click', function(event){
    console.log(event)
    event.preventDefault();

    var search = searchInput.value;
  
    getAPI(search)
    
    if(!search) {
      console.error('No search input');
      return; 
    } 
  });

// marvel API key, hash, and ts
const marvelPublicKey = '4c6bf6a00e15ee08b02c33900fde04b4';
const marvelHash = 'dd8893ca7be63bb0cb079a20770dd8cd';
const marvelTs = 'thists';


function getAPI(search) {
  
    if(!search) return;
    console.log(search);
    
      if(platformInput.value === 'myanimelist') { // searching myanimelist api using jikan.moe, free alternative, creates a new url for each search
          var malUrl = 'https://api.jikan.moe/v4/anime?'
          if(categoryInput.value === 'Title') {
            search = search.split(' ').join('%20');
            malUrl += 'q=' + search;
            console.log(malUrl);
          } else if(categoryInput === 'ID') {
            malUrl += id;
            console.log(malUrl);
          }
        }
    
      if(platformInput.value === "OMDB/IMDB" && categoryInput.value === 'Title') { // omdb api, free alternative to imdb api. this creates a new url for each search
        var omdbKey = "db2fabc7";
        var omdbUrl = "http://www.omdbapi.com/?apikey=" + omdbKey; 
        
        console.log(platformInput.value);
        search = search.split(' ').join('+');
        omdbUrl += '&s=' + search;
        console.log(omdbUrl);
        } else {
        omdbUrl += '&i=' + search;
          
        } 
      
      if(platformInput.value === 'Marvel Comics' && categoryInput.value === 'Title') { // marvel comics api, creates a new url for each search
        var marvelUrl = 'https://gateway.marvel.com/v1/public/comics?ts=' + marvelTs + '&apikey=' + marvelPublicKey + '&hash=' + marvelHash + '&limit=1';
    
        search = search.split(' ').join('+');
        console.log(platformInput.value);
        marvelUrl += '&title=' + search;
        console.log(marvelUrl);
        } else {
        marvelUrl += '&id' + search;
        
        }
      // fetch data from APIs, limiting results to 1 for all   
      if(platformInput.value === "OMDB/IMDB" && categoryInput.value === 'Title') {
        fetch(omdbUrl)
        .then(function(response) {
          // resultsHolder.innerHTML = '';
          if(!response.ok) {
            throw response.json();
          }

        return response.json();
      })
      .then(function(data) {
        
        console.log(data);
        if(data.Response === 'True' && platformInput.value === "OMDB/IMDB") {
          
              var result = data.Search[0]; 
              
              var title = result.Title;
              var posterUrl = result.Poster;
              
              // updating to create list rows that should be added to the itemList with a rating
              var listRow = document.createElement("div"); //creates a new row element (div)
              //listRow.id = "row" + i.toString(); //sets the innerHTML of the list element to the name of the item
              listRow.style = "display: flex; flex-direction: row; justify-content: space-between; align-items: center;"; //sets the style of the row element
              //listRow.innerHTML = "Row " + i.toString(); //sets the innerHTML of the row element to the name of the item
              listRow.setAttribute("class", "panel-block"); //added panel-block Bulma class to listRow
              document.querySelector("#itemList").appendChild(listRow); //adds the list element to the list
              
              var newLink = document.createElement("a");
              newLink.textContent = title;
              newLink.setAttribute("href", posterUrl); // added listElement id to results to sync up with tagButton.js
              newLink.id = "listElement";


              resultsHolder.appendChild(listRow);
              listRow.appendChild(newLink);
              
            } else {
              resultsHolder.textContent = 'No results found for ' + searchInput.value;
            }
        }) 
        .catch(function(error) {
          console.error(error);
        });
      }  
      
      if(platformInput.value === 'Marvel Comics' && categoryInput.value === 'Title') {
      fetch(marvelUrl)
      .then(function(response) {
        // resultsHolder.innerHTML = '';
        if(!response.ok) {
          throw response.json();
        }
    
        return response.json();
      })
      .then(function(data) {
        if(data.status === 'Ok' && platformInput.value === 'Marvel Comics') { // searching marvel comics api
          console.log(data.data.results);
          for (var i=0; i<data.data.results.length; i++) {
            var result = data.data.results[i];
            
            var title = result.title;
            var thumbnailUrl = result.thumbnail.path + '.' + result.thumbnail.extension;
              
              var listRow = document.createElement("div"); //creates a new row element (div)
              //listRow.id = "row" + i.toString(); //sets the innerHTML of the list element to the name of the item
              listRow.style = "display: flex; flex-direction: row; justify-content: space-between; align-items: center;"; //sets the style of the row element
              //listRow.innerHTML = "Row " + i.toString(); //sets the innerHTML of the row element to the name of the item
              listRow.setAttribute("class", "panel-block"); //added panel-block Bulma class to listRow
              document.querySelector("#itemList").appendChild(listRow); //adds the list element to the list 
              
              var newLink = document.createElement("a");
              newLink.textContent = title;
              newLink.setAttribute("href", thumbnailUrl);
              newLink.id = "listElement";

              resultsHolder.appendChild(listRow);
              listRow.appendChild(newLink);
 
          } 
          } else {
            resultsHolder.textContent = 'No results found for ' + searchInput.value;
          } 
        })
        .catch(function(error) {
          console.error(error);
        });
      } 
    
    if(platformInput.value === 'myanimelist') {
         fetch(malUrl)
        .then(function(response) {
          resultsHolder.innerHTML = '';
          if(!response.ok) {
            throw response.json();
          }

          return response.json();
          })
        .then(function(data) {
          // TODO: process data, display data, and place in local storage
          var result = data.data[0];
          
          var title = result.title;
          var posterUrl = result.images.jpg.image_url;

            var listRow = document.createElement("div"); //creates a new row element (div)
            //listRow.id = "row" + i.toString(); //sets the innerHTML of the list element to the name of the item
            listRow.style = "display: flex; flex-direction: row; justify-content: space-between; align-items: center;"; //sets the style of the row element
            //listRow.innerHTML = "Row " + i.toString(); //sets the innerHTML of the row element to the name of the item
            listRow.setAttribute("class", "panel-block"); //added panel-block Bulma class to listRow
            document.querySelector("#itemList").appendChild(listRow); //adds the list element to the list 
            
            var newLink = document.createElement("a");
          
            newLink.textContent = title;
            newLink.setAttribute("href", posterUrl);
            newLink.id = "listElement";

            resultsHolder.appendChild(listRow);
            listRow.appendChild(newLink);
          
        })
        .catch(function(error) {
          console.error(error);
        });
      }
};

