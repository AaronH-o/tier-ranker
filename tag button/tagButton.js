
if(localStorage.getItem("itemList") == null) //if the itemCount is null, set it to an empty array
{
  localStorage.setItem("itemList", JSON.stringify([])); //sets the itemList to an empty array when the page is loaded
}

if(localStorage.getItem("tagList") == null) //if the itemCount is null, set it to 0
{
  localStorage.setItem("tagList", JSON.stringify([])); //sets the tagList to an empty array when the page is loaded
}




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
      if(list[i].name == listItemName || listItemName == "")
      {
        return; //if the item is already in the list, or the input is empty do nothing
      }
    }

    
    list.push({name: listItemName, tags: []}); //adds the item to the list
    localStorage.setItem("itemList", JSON.stringify(list)); //saves the list to local storage
    console.log(list);

  });