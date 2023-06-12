//var tagButton = document.querySelectorAll(".tagButton");
var buttonCount = tagButton.length;
//console.log("check");

function tagClick () {
    //var tag = target.value;
    //buttonInput.style = "background-color: #ffffff;";
    console.log("tagClick");
}

var tagButtons = document.querySelectorAll(".tagButton");
tagButtons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', tagClick)
})

