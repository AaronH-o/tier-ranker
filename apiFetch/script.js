var fetchButton = document.getElementById('#addListButton');
var searchInput = document.querySelector('#listInput').value;
// TODO: adjust #category-input and #platform-input to appropriate values
const categoryInput = document.querySelector('#category-input').value;
const platformInput = document.querySelector('#platform-input').value;

// marvel API key
const marvelPublicKey = '7b860beaace6f1d92b8fec268e2dca7b';

// MyAnimeList API key
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f1f9bbb657mshacd34051c5a8050p1b9924jsn3b363fae40ac',
		'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
	}
};

function getAPI(requestUrl) {
  if(!requestUrl) return;

  if(platformInput === 'myanimelist') {
    fetch(requestUrl, options)
    .then(function(response) {
      if(!response.ok) {
        throw response.json();
      }

      return response.json();
    })
    .then(function(data) {
      // TODO: process data, display data, and place in local storage

    })
    .catch(function(error) {
      console.error(error);
    });
  } else {
    fetch(requestUrl)
    .then(function(response) {
      if(!response.ok) {
        throw response.json();
      }

      return response.json();
    })
    .then(function(data) {
      // TODO: process data, display data, and place in local storage

    })
    .catch(function(error) {
      console.error(error);
    });
  }
}

function generateRequestUrl(event) {

  if(!searchInput) {
    console.error('No search input');
    return;
  }

  // prepare search string for insertion into urls
  searchInput = searchInput.split(' ').join('+');

  var queryString = '';

  // searching imdb api
  if(platformInput === 'IMDB') {
    queryString += 'http://www.omdbapi.com/?';
    if(categoryInput === 'Title') {
      searchInput = searchInput.split(' ').join('+');
      queryString += 't=' + searchInput;
      console.log(queryString);
    } else if(categoryInput === 'ID') {
      queryString += 'i=' + searchInput;
      console.log(queryString);
    }
  }

  //  searching myanimelist api
  else if(platformInput === 'myanimelist') {
    queryString += 'https://myanimelist.p.rapidapi.com/anime/';
    if(categoryInput === 'Title') {
      searchInput = searchInput.split(' ').join('%20');
      queryString += 'search/' + searchInput;
      console.log(queryString);
    } else if(categoryInput === 'ID') {
      queryString += id;
      console.log(queryString);
    }
  }

  // searching marvel comics api
  else if(platformInput === 'Marvel') {
    queryString += 'https://gateway.marvel.com/v1/public/comics/';
    if(categoryInput === 'Title') {
      // TODO: figure a way to find anime ID based off of title
      // var id = searchInput title to ID 
      // queryString += id;
      // console.log(queryString);
    } else if(categoryInput === 'ID') {
      queryString += id + '?apikey=' + marvelPublicKey;
      console.log(queryString);
    }
  }

  return queryString;
}

fetchButton.addEventListener(click, getAPI(generateRequestUrl));

// TODO: parse data depending on which API was called