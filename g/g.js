
// Get references to the button and the text element
const myButton = document.getElementById('hell');
const hiddenButton = document.getElementById('hiddenButton');

// Add a click event listener to the button
hell.addEventListener('click', function() {
    // Change the display style to make the text visible
    hiddenButton.style.display = 'block'; 
});

function makeImage (imageName) {
$("body").append("<img width=200 src='hell.png'>");
   }
 function makeImage2 (imageName) {
$("body").append("<img width=400 src='trolleyProblem.png'>");
   }

 $("#hell").click(function(){
    $("#hell").html ("Whoops! Wrong button :)" );
makeImage ("hell");

 makeButton("Here, click this one instead!");
  function makeButton (trolleyProblem) {
    $("body").append("<button id='trolleyProblem'>")
    $("#trolleyProblem").html(trolleyProblem);
 }
 });

 $("#trolleyProblem").click(function(){
    console.log("meow");

    $("#trolleyProblem").html ("Wuh oh, looks like you have a dillemma! Will you pull the lever to save the five people but sacrifice one?");
makeImage2("trolleyProblem");
console.log("woof");

    makeButton2 ("Pull Lever");
   function makeButton2 (lever) {
    $("body").append("<button id='lever'>")
    $("#lever").html(lever);
   }
    makeButton3 ("Do Nothing");
   function makeButton3 (lever2) {
    $("body").append("<button id='lever2'>")
    $("#lever2").html(lever2);
  }
 });