//var tagButton = document.querySelectorAll(".tagButton");
var buttonCount = tagButton.length;
//console.log("check");


var tagButtons = document.querySelectorAll(".tagButton");
tagButtons.forEach(function(currentBtn)  //changes the color of the tag button when clicked
{
  currentBtn.addEventListener('click', function tagClick() {
    this.classList.add("clickedTagButton");
    console.log("tagClick2");
  })
})

