var fetchButton = document.getElementById('fetch-button');


function getAPI(requestUrl) {
  if(!requestUrl) return;
  fetch(requestUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      
    })
}

function generateRequestUrl(event) {

  var searchInput = document.querySelector('#search-input').value;
  var platformInput = document.querySelector('#platform-input').value;
  var categoryInput = document.querySelector('#category-input').value;
  
  if(!searchInput) {
    console.error('No search input');
    return;
  }

  // prepare search string for insertion into urls
  searchInput = searchInput.split(' ').join('+');

  var queryString = '';

  // searching imdb api
  // TODO: rotten tomatoes api is not available but omdbapi provides rotten tomato score 
  if(platformInput === 'IMDB') {
    queryString += 'http://www.omdbapi.com/?';
    // TODO: add diff search categories based off of categoryInput
    if(categoryInput === 'Title') {
      queryString += 't='+searchInput;
    }
  }

  //  searching myanimelist api
  else if(platformInput === 'myanimelist') {
    queryString += 'https://api.myanimelist.net/v2/anime/';
    if(categoryInput === 'Title') {
      // TODO: figure a way to find anime ID based off of title
      // var id = searchInput title to ID 
      // queryString += id;
    } else if(categoryInput === 'ID') {
      queryString += id;
    }
  }

  // searching marvel comics api
  else if(platformInput === 'Marvel') {
    queryString += 'https://gateway.marvel.com/v1/public/comics/';
    if(categoryInput === 'Title') {
      // TODO: figure a way to find anime ID based off of title
      // var id = searchInput title to ID 
      // queryString += id;
    } else if(categoryInput === 'ID') {
      queryString += id;
    }
  }


  return queryString;
}

fetchButton.addEventListener(click, getAPI(generateRequestUrl));