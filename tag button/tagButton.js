
var reload = false; //sets the reload variable to false

if(localStorage.getItem("itemList") == null) //if the itemCount is null, set it to an empty array
{
  localStorage.setItem("itemList", JSON.stringify([])); //sets the itemList to an empty array when the page is loaded
}

if(localStorage.getItem("tagListMaster") == null) //if the itemCount is null, set it to 0
{
  localStorage.setItem("tagListMaster", JSON.stringify([])); //sets the tagListMasterMaster to an empty array when the page is loaded
}

if(localStorage.getItem("sortSystem") == null) //if the itemCount is null, set it to 0
{
  localStorage.setItem("sortSystem", "LMRating"); //sets the sortSystem to List Master Rating when the page is loaded
}

if(localStorage.getItem("editBayTagList") == null) //if the editBayTagList is null, set it to an empty array
{
  localStorage.setItem("editBayTagList", JSON.stringify([]));
}

if(localStorage.getItem("editBayListItem" == null)){ //if the editBayListItem is null, set it to an empty string
  localStorage.setItem("editBayListItem", JSON.stringify([]));
}
document.querySelector("#listInput").value = localStorage.getItem("editBayListItem"); //sets the listInput value to the editBayListItem

var sortSystem = document.querySelector("#sortSystem"); //finds the sort system and ties variable to it
var sortSystemValue = document.querySelector("#sortSystem").value; //gets the value of the sort system

var activeListElement = localStorage.getItem("#activeListElement"); //finds the active list element and ties variable to it
if(activeListElement == null || activeListElement == "") { //if the active list element is null, set it to the list element in the editing bay (section at the top of the page)
  activeListElement = document.querySelector("listInput");
  localStorage.setItem("activeListElement", activeListElement);
}


//var buttonCount = localStorage.getItem(tagListMaster).length();
var tagButtons = document.querySelectorAll(".tagButton");
tagButtons.forEach(function(currentBtn)  //adds an event listener to each tagButton that adds a class to change the color of the tag button when clicked and mark it as tagged
{
  currentBtn.addEventListener('click', function tagClick() {
    if(this.classList.contains("clickedTagButton")){ //if the button is already clicked, remove the clickedTagButton class
        this.classList.remove("clickedTagButton");}

    else{ //if the button is not clicked, add the clickedTagButton class
        this.classList.add("clickedTagButton");
        console.log("tagClick2");
    }
  })
})


// __________________________________________ ADD LIST ITEM BUTTON __________________________________________
var listAddButton = document.querySelector("#addListButton");
console.log(listAddButton);
listAddButton.addEventListener('click', function listAddButton()
  {
    console.log("event listener added");
    var listItemName = document.querySelector("#listInput").value;
    var tagInput = localStorage.getItem("editBayTagList");

    var itemList = JSON.parse(localStorage.getItem("itemList")); //gets the itemList from local storage
    for(i = 0; i < itemList.length; i++)
    {
      if(itemList[i].name.toLowerCase() == listItemName.toLowerCase() || listItemName == "")
      {
        console.log("item already in list or empty");
        return; //if the item is already in the list (regardless of capitalization), or the input is empty, then do nothing
      }
    }

    var elementRating = document.querySelector("#elementRating").value; //gets the value of the element rating
    var elementTags = localStorage.getItem("elementTags"); //gets the value of the element tags
    itemList.push({name: listItemName, tags: tagInput, rating: elementRating}); //adds the item to the list and sets its rating equal to the element rating
    localStorage.setItem("itemList", JSON.stringify(itemList)); //saves the list to local storage
    console.log(itemList);

    localStorage.setItem("editBayTagList", JSON.stringify([])); //resets the editBayTagList to an empty array
    
    window.location.reload(); //reloads the page

  });
//_________________________________________________________________________________________________________

// __________________________________________ ADD TAG BUTTON (edit bay)__________________________________________
var tagAddButton = document.querySelector("#addTagButton");
//console.log(tagAddButton);
tagAddButton.addEventListener('click', function tagAddButton()
  {
    console.log("attempting to add tag");
    var tagInput = document.querySelector("#tagInput").value;
    console.log(tagInput);
    var inMasterList = false;

    localStorage.setItem("editBayListItem", document.querySelector("#listInput").value); //resets the editBayTagList to an empty array

    if(tagInput == "" || tagInput === null) //if the tag input is empty, do nothing
    {
      console.log("tag input empty");
      return;
    }
    var tagListMaster = JSON.parse(localStorage.getItem("tagListMaster")); //gets the tagListMaster from local storage
    for(i = 0; i < tagListMaster.length; i++){
      if(tagListMaster[i].toLowerCase() == tagInput.toLowerCase())
      {
        console.log("tag already in master list"); //if the tag is already in the masterList (regardless of capitalization), then don't add it to the master list
        inMasterList = true;
      }
    }
    if(inMasterList == false){ //if the tag is not in the master list, add it to the master list
      tagListMaster.push(tagInput);
      console.log(tagInput + "tag added to master list");
    }

    //activeListElement.tags.push(tagInput); //adds the tag to the tag array of the active list element
    localStorage.setItem("tagListMaster", JSON.stringify(tagListMaster)); //saves the tagListMaster to local storage (with the new tag added if applicable)
    console.log(tagListMaster);
    inMasterList = false; //resets the inMasterList variable to false

    var editBayTagList = JSON.parse(localStorage.getItem("editBayTagList")); //gets the tagListMaster from local storage
    editBayTagList.push(tagInput); //adds the tag to the tag array of the active list element
    localStorage.setItem("editBayTagList", JSON.stringify(editBayTagList)); //saves the editBayTagList to local storage (with the new tag added if applicable)
    window.location.reload(); //reloads the page

  });
//_________________________________________________________________________________________________________


// __________________________________________ tagListMasterDisplay __________________________________________
var tagListMasterDisplay = JSON.parse(localStorage.getItem("tagListMaster")); //gets the tagListMaster from local storage
for(i = 0; i < tagListMasterDisplay.length; i++)
{
  var tagListMasterButton = document.createElement("button"); //creates a button element
  tagListMasterButton.innerHTML = tagListMasterDisplay[i]; //sets the innerHTML of the button to the name of the tag
  tagListMasterButton.classList.add("tagButton"); //adds the tagButton class to the button
  tagListMasterButton.addEventListener('click', function tagClick() { //adds an event listener to each tagButton that adds a class to change the color of the tag button when clicked and mark it as tagged
  if(this.classList.contains("clickedTagButton")) //if the button is already clicked, remove the clickedTagButton class
  { 
    this.classList.remove("clickedTagButton");
    console.log("tag clicked off");
  }

  else //if the button is not clicked, add the clickedTagButton class
  {
    this.classList.add("clickedTagButton");
    console.log("tag clicked on");
  }
  })
  document.querySelector("#tagListMaster").appendChild(tagListMasterButton); //adds the tagListMasterButton to the tagListMaster div
}
//_________________________________________________________________________________________________________

// __________________________________________ editBayTagList __________________________________________
var editBayTagList = JSON.parse(localStorage.getItem("editBayTagList")); //gets the tagListMaster from local storage
for(i = 0; i < editBayTagList.length; i++)
{
  var editBayTagListButton = document.createElement("button"); //creates a button element
  editBayTagListButton.innerHTML = editBayTagList[i]; //sets the innerHTML of the button to the name of the tag
  editBayTagListButton.classList.add("tagButton"); //adds the tagButton class to the button
  editBayTagListButton.id = "editBayTagListButton";
  document.querySelector("#editBayTagList").appendChild(editBayTagListButton); //adds the tagListMasterButton to the tagListMaster div

  var editBayTagListDeleteButton = document.createElement("button"); //creates a button element
  editBayTagListDeleteButton.innerHTML = "X"; //sets the innerHTML of the button to the name of the tag
  editBayTagListDeleteButton.addEventListener('click', function deleteTag() //adds an event listener to each tagButton that deletes the tag from the editBayTagList if clicked
  {
    event.stopPropagation();
    console.log(this.parentElement.parentElement);
    editBayTagList.splice(i, 1);
    console.log("tag deleted");
    localStorage.setItem("editBayTagList", JSON.stringify(editBayTagList)); //saves the editBayTagList to local storage (with the tag deleted)
    window.location.reload(); //reloads the page
  });
  document.querySelector("#editBayTagListButton").appendChild(editBayTagListDeleteButton); //adds the tagListMasterButton to the tagListMaster div
}
//_________________________________________________________________________________________________________




// __________________________________________ CLEAR LIST BUTTON __________________________________________

  var clearListButton = document.querySelector("#clearListButton"); //finds the clear list button and ties variable to it
  clearListButton.addEventListener('click', function clearListFunction() //adds an event listener to the clear list button that clears the list
  {
    confirm("Are you sure you want to clear the list?"); //asks the user if they are sure they want to clear the list
    if(confirm == false) //if the user clicks cancel, do nothing
    {
      console.log("clear cancelled");
      return;
    }
    console.log("clear initiated");
    localStorage.setItem("itemList", JSON.stringify([])); //sets the itemList to an empty array
    window.location.reload(); //reloads the page
  });
// ________________________________________________________________________________________________________



// __________________________________________ CLEAR TAGS BUTTON __________________________________________

var clearTagsButton = document.querySelector("#clearTagListMasterButton"); //finds the clear tags button and ties variable to it
clearTagsButton.addEventListener('click', function clearTagsFunction() //adds an event listener to the clear tags button that clears the tags
{
  confirm("Are you sure you want to clear the tags?"); //asks the user if they are sure they want to clear the tags
  if(confirm == false) //if the user clicks cancel, do nothing
  {
    console.log("clear cancelled");
    return;
  }
  console.log("clear initiated");
  localStorage.setItem("tagListMaster", JSON.stringify([])); //sets the tagListMaster to an empty array
  window.location.reload(); //reloads the page
});


// ____________________________________________________________________________________
  if(localStorage.getItem("itemList") != JSON.stringify([]))
  {
    var list = JSON.parse(localStorage.getItem("itemList")); //gets the itemList from local storage
    console.log(list);
    for(i = 0; i < list.length; i++)
    {
      var listElement = document.createElement("div"); //creates a new list element (div)
      listElement.setAttribute("id", "listElement"); //adds the listItem class to the list element
      listElement.innerHTML = list[i].name; //sets the innerHTML of the list element to the name of the item
      //document.querySelector("#itemList").appendChild(listElement); //adds the list element to the list
    }
  }
//_________________________________________________________________________________________________________




  if(sortSystem == null) //defined at top of code
  {
    console.log("sortSystem is null, setting to LMRating");
    sortSystem = "LMRating";
    sortSystemValue = "LMRating";
  }


// __________________________________________ SORT SYSTEM __________________________________________


// __________________________________________ LMRATING __________________________________________
  if(sortSystemValue == "LMRating"){
    console.log("LMRating sort initiated");
    var unRatedRow = document.createElement("div"); //creates a new row element (div) for unrated items
    unRatedRow.id = "unRatedRow"; //sets the id of the row element to unRatedRow
    unRatedRow.innerHTML = "Unrated Items"; //sets the innerHTML of the row element to Unrated Items
    unRatedRow.style = "display: flex; flex-direction: row; justify-content: space-between; align-items: center; font-weight: lighter"; //sets the style of the unRatedRow element
    unRatedRow.setAttribute("class", "panel-block"); //added panel-block Bulma class to unRatedRow
    document.querySelector("#itemList").appendChild(unRatedRow); //adds the row element to the list

    var list = JSON.parse(localStorage.getItem("itemList")); //gets the itemList from local storage
    for(i = 10; i > 0; i--){ //for each rating, starting at 10 and going down to 1
      var listRow = document.createElement("div"); //creates a new row element (div)
      listRow.id = "row" + i.toString(); //sets the innerHTML of the list element to the name of the item
      listRow.style = "display: flex; flex-direction: row; justify-content: space-between; align-items: center;"; //sets the style of the row element
      listRow.innerHTML = "Row " + i.toString(); //sets the innerHTML of the row element to the name of the item
      listRow.setAttribute("class", "panel-block"); //added panel-block Bulma class to listRow
      document.querySelector("#itemList").appendChild(listRow); //adds the list element to the list
      
    }
    
    for(i = 0; i < list.length; i++)
    {
      var itemRating = list[i].rating;
      var listElement = document.createElement("div"); //creates a new list element (div)
      listElement.innerHTML = list[i].name; //sets the innerHTML of the list element to the name of the item
      listElement.classList.add("listItem"); //adds the listItem class to the list element
      if(itemRating > 0 && itemRating <11){
        var elementRow = document.querySelector("#row" + itemRating.toString()); //finds the row that the item should be in
        elementRow.appendChild(listElement); //adds the list element to the list
        
        console.log("item added to row " + i.toString());
      }
      else{
        document.querySelector("#unRatedRow").appendChild(listElement); //adds the list element to the list
        console.log("item added to unrated row");
      }
    }
    
    console.log(list);
  }
//_________________________________________________________________________________________________________



//__________________________________________EDIT LIST ELEMENTS_____________________________________________

var popUpOpen = false;
var listItems = document.querySelectorAll(".listItem");
listItems.forEach(function(currentBtn)
{
  currentBtn.addEventListener('click', function ListItemClick() 
  {

    if(popUpOpen == true && currentBtn.classList.contains("clickedListElement") == false){
      return; //if the pop up is open and the clicked list element is not the one that opened it, do nothing
    }

    else if(popUpOpen == true && currentBtn.classList.contains("clickedListElement")){ //if the pop up is open and the clicked list element is the one that opened it, close the pop up
      popUpOpen = false;
      currentBtn.classList.remove("clickedListElement");
      document.querySelector("#popUp").style = "display: none;";
      console.log("pop up closed");

    }

    else{ //if the pop up is not open, open it
        popUpOpen = true;
        currentBtn.classList.add("clickedListElement"); //adds the clickedListElement class to the list element
        document.querySelector("#popUp").style = "display: block;"; //displays the pop up
        console.log("pop up opened");
    }

    var listItemClone = document.createElement("div");
    listItemClone.classList.add("listItemPopUp");
    listItemClone.innerHTML = this.innerHTML;
    listItemClone.id = "listItemPopUp";
    //document.querySelector("#popUp").appendChild(listItemClone);
    //document.querySelector("#popUp").style = "display: block;";
  });
});

//_________________________________________________________________________________________________________




if(reload == true) //reloads the window if it has been flagged to reload by any of the functions
{
  reload = false;
  window.location.reload();
}
