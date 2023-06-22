// variables selecting html list elements
var resultsContainer = document.getElementById("results_container"); 
var resultsList = document.getElementById("results_list"); // results_list is not being used for now
var rankedList = document.getElementById("itemList");

// resultsContainer.appendChild(rankedList);

// issue: appending html element to sortable table row/li causes it not to be sortable
// for MVP will stick with adding rating sliders for each result item, will revist sortable list

// added jQuery sliders to each list item for user input 
// sliders are wrapped in section tags id=slider_1 to 5, can append to API results
// slider values can be stored in variables: var min/max = $( ".selector" ).slider( "option", "min"/"max" ); 
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

  });


// one option: place unsorted items in an object and use json to retrieve document.write(obj.key[1].)