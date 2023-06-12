//var tagButton = document.querySelectorAll(".tagButton");
var buttonCount = tagButton.length;
//console.log("check");


var tagButtons = document.querySelectorAll(".tagButton");
tagButtons.forEach(function(currentBtn)  //changes the color of the tag button when clicked
{
  currentBtn.addEventListener('click', function tagClick() {
    if(this.classList.contains("clickedTagButton")){ //if the button is already clicked, remove the clickedTagButton class}
        this.classList.remove("clickedTagButton");}

    else{ //if the button is not clicked, add the clickedTagButton class
        this.classList.add("clickedTagButton");
        console.log("tagClick2");
    }
  })
})

