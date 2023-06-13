localStorage.setItem("tagCount", 0); //sets the tagCount to 0 when the page is loaded
localStorage.setItem("itemList", JSON.stringify([])); //sets the itemList to an empty array when the page is loaded
localStorage.setItem("tagList", JSON.stringify([])); //sets the tagList to an empty array when the page is loaded






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



var listAddButton = document.querySelectorAll(".addListButton");
if(listAddButton.length > 0)
{  //if there are any addListButtons on the page, add an event listener to each one
  listAddButton.forEach(function(currentBtn)
  {  //adds an event listener to each addListButton that adds the item to the list when clicked
    currentBtn.addEventListener('click', function listAddButton()
    {
      var list = document.querySelector(".listInput");

    });
  });
}