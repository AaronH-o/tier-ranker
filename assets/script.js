// variables selecting html list elements
var resultsContainer = document.getElementById("results_container"); 
var resultsList = document.getElementById("results_list");
var rankedList = document.getElementById("ranked_list");

resultsContainer.appendChild(resultsList);

// have list items be created as part of fetch()?
// added placeholder fetch()
// select the elements on the resultsList 

// placeholder fetch()
/*fetch(url).then(function (result) {
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
}); */


// look into using jQuery sortable list that can allow user to drag items and sort
// issue: appending html element to sortable table row/li causes it not to be sortable
$( function() {
  $( "#results_list, #ranked_list" ).sortable({ 
    connectWith: "#ranked_list"
  });
} );

// added jQuery sliders to each list item for user input
$( function() {
    $( "#slider-range-max1" ).slider({
      range: "max",
      min: 1,
      max: 10,
      value: 2,
      slide: function( event, ui ) {
        $( "#rating1" ).val( ui.value );
      }
    });
    $( "#rating1" ).val( $( "#slider-range-max1" ).slider( "value" ) );
    
    $( "#slider-range-max2" ).slider({
        range: "max",
        min: 1,
        max: 10,
        value: 2,
        slide: function( event, ui ) {
          $( "#rating2" ).val( ui.value );
        }
      });
      $( "#rating2" ).val( $( "#slider-range-max2" ).slider( "value" ) );

      $( "#slider-range-max3" ).slider({
        range: "max",
        min: 1,
        max: 10,
        value: 2,
        slide: function( event, ui ) {
          $( "#rating3" ).val( ui.value );
        }
      });
      $( "#rating3" ).val( $( "#slider-range-max3" ).slider( "value" ) );

      $( "#slider-range-max4" ).slider({
        range: "max",
        min: 1,
        max: 10,
        value: 2,
        slide: function( event, ui ) {
          $( "#rating4" ).val( ui.value );
        }
      });
      $( "#rating4" ).val( $( "#slider-range-max4" ).slider( "value" ) );

      $( "#slider-range-max5" ).slider({
        range: "max",
        min: 1,
        max: 10,
        value: 2,
        slide: function( event, ui ) {
          $( "#rating5" ).val( ui.value );
        }
      });
      $( "#rating5" ).val( $( "#slider-range-max5" ).slider( "value" ) );

  } );


// one option: place unsorted items in an object and use json to retrieve document.write(obj.key[1].)