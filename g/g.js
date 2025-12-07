
const myButton = document.getElementById('hell');
const hiddenButton = document.getElementById('hiddenButton');

hell.addEventListener('click', function() {
    hiddenButton.style.display = 'block'; 
});

const myButtons = document.getElementById('trolleyProblem');
const hiddenButtons = document.getElementById('hiddenButtons');

trolleyProblem.addEventListener('click', function() {
    hiddenButtons.style.display = 'block'; 
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

    var angle = 0;
        $("hell").click(function() {
         angle +90;
         $("hell").rotate(angle);
});    

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

 $("#lever").click(function(){
    $("#lever").html ("Hm. You may have saved those five people, but you're still a murderer. Enjoy eternal damnnation!");
    $("body").append("<img width=auto height=auto src='flames.png'>");

 });
 $("#lever2").click(function(){
    $("#lever2").html ("Wow. You let all those people die just so you wouldn't have to be responsible for killing just one. Enjoy eternal damnnation!");
    $("body").append("<img width=auto height=auto src='flames.png'>");

 });


 exitButton.addEventListener("click", function() {
    window.location.href = "../../index.html";
});
