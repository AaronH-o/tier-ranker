# Tier List Web App  

### Project Description 

This is a custom list-making website where users can add entries and add custom tags to those entries. Users can then see and add those entries to custom lists with custom categories and subcategories within that list. 

APIs being used:
* OMDB ( https://www.omdbapi.com/ )
* Myanimelist ( https://api.jikan.moe/v4/anime )
* Marvel API ( https://gateway.marvel.com/v1/public/comics/ ) 

** Data provided by Marvel. © 2023 MARVEL

### User Story

As a user I want to be able to upload list items of any kind with custom tags. I want to be able to rank those list items and create custom lists with specific subcategories that I can assign list elements to. Lists can be saved to locally to view later.

### Development

The page was styled using Bulma CSS and Normalize CSS frameworks. Separate JS files contain the API fetch and local storage/listing features. The page currently allows the user to search for any movie, TV show, anime, and Marvel comic. A link is created in the list body that leads to an image related to the title. The user is also able to add a rating when searching a list item and based on the rating it will be added on a specific row on the list, a higher rating will place it higher on the list. The list can be cleared by clicking the Clear All List Items button. Tags can also be added to label the various titles, these tags currently display on a separate list. A popup menu can be accessed by clicking the list items to allow the user to update ratings/tags.

Due to the departure of a group member certain features were not able to be implemented but the page currently pulls from the APIs and displays results in a list with results being saved in local storage. 

Potential future enhancements include allowing the user to download saved lists in a format of their choosing, more polished UI (sortable JQuery list?), and including more APIs for the user to call from.
