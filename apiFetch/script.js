var fetchButton = document.getElementById('#addListButton');
var searchInput = document.querySelector('#listInput');
// TODO: adjust #category-input and #platform-input to appropriate values
// const categoryInput = document.querySelector('#category-input').value;
// const platformInput = document.querySelector('#platform-input').value;
var categoryInput = 'Title';
var platformInput = 'IMDB';

// marvel API key
const marvelPublicKey = '7b860beaace6f1d92b8fec268e2dca7b';
const OMDbPublicKey = '995dd244';

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
  console.log('getAPI() called: ' + requestUrl);




        


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
      console.log(data);

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
      console.log(data);

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
  var searchString = searchInput.value;

  var queryString = '';

  // searching imdb api
  if(platformInput === 'IMDB') {
    queryString += 'http://www.omdbapi.com/?';
    if(categoryInput === 'Title') {
      searchString = searchString.split(' ').join('+');
      queryString += 't=' + searchString + '&apikey=' + OMDbPublicKey;
    } else if(categoryInput === 'ID') {
      queryString += 'i=' + searchString + '&apikey=' + OMDbPublicKey;
    }
  }

  //  searching myanimelist api
  else if(platformInput === 'myanimelist') {
    queryString += 'https://myanimelist.p.rapidapi.com/anime/';
    if(categoryInput === 'Title') {
      searchString = searchString.split(' ').join('%20');
      queryString += 'search/' + searchString;
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
      // console.log(queryString);
    } else if(categoryInput === 'ID') {
      queryString += id + '?apikey=' + marvelPublicKey;
    }
  }
  return queryString;
}

// TODO: parse data depending on which API was called
