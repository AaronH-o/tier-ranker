
if(localStorage.getItem("itemList") == null) //if the itemCount is null, set it to an empty array
{
  localStorage.setItem("itemList", JSON.stringify([])); //sets the itemList to an empty array when the page is loaded
}

if(localStorage.getItem("tagList") == null) //if the itemCount is null, set it to 0
{
  localStorage.setItem("tagList", JSON.stringify([])); //sets the tagList to an empty array when the page is loaded
}

if(localStorage.getItem("sortSystem") == null) //if the itemCount is null, set it to 0
{
  localStorage.setItem("sortSystem", "LMRating"); //sets the sortSystem to List Master Rating when the page is loaded
}

var sortSystem = document.querySelector("#sortSystem"); //finds the sort system and ties variable to it




var buttonCount = tagButton.length;
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



var listAddButton = document.querySelector("#addListButton");
console.log(listAddButton);
listAddButton.addEventListener('click', function listAddButton()
  {
    console.log("event listener added");
    var listItemName = document.querySelector("#listInput").value;

    var list = JSON.parse(localStorage.getItem("itemList")); //gets the itemList from local storage
    for(i = 0; i < list.length; i++)
    {
      if(list[i].name.toLowerCase() == listItemName.toLowerCase() || listItemName == "")
      {
        console.log("item already in list or empty");
        return; //if the item is already in the list (regardless of capitalization), or the input is empty, then do nothing
      }
    }

    
    list.push({name: listItemName, tags: []}); //adds the item to the list
    localStorage.setItem("itemList", JSON.stringify(list)); //saves the list to local storage
    console.log(list);
    window.location.reload(); //reloads the page

  });

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

  if(localStorage.getItem("itemList") != JSON.stringify([]))
  {
    var list = JSON.parse(localStorage.getItem("itemList")); //gets the itemList from local storage
    console.log(list);
    for(i = 0; i < list.length; i++)
    {
      var listElement = document.createElement("div"); //creates a new list element (div)
      listElement.innerHTML = list[i].name; //sets the innerHTML of the list element to the name of the item
      document.querySelector("#itemList").appendChild(listElement); //adds the list element to the list
    }
  }


  if(sortSystem == null) //defined at top of code
  {
    console.log("sortSystem is null");
    sortSystem = "LMRating";
  }

  if(sortSystem == "LMRating"){
    console.log("LMRating sort initiated");
    var unRatedRow = document.createElement("div"); //creates a new row element (div) for unrated items
    unRatedRow.id = "unRatedRow"; //sets the id of the row element to unRatedRow
    unRatedRow.innerHTML = "Unrated Items"; //sets the innerHTML of the row element to Unrated Items
    document.querySelector("#itemList").appendChild(unRatedRow); //adds the row element to the list

    document.querySelector("#itemList").appendChild(listRow); //adds the list element to the list
    var list = JSON.parse(localStorage.getItem("itemList")); //gets the itemList from local storage
    for(i = 1; i < 11; i++){
      var listRow = document.createElement("div"); //creates a new row element (div)
      listRow.id = i.toString(); //sets the innerHTML of the list element to the name of the item
      document.querySelector("#itemList").appendChild(listRow); //adds the list element to the list
    }
    console.log(list);
  }