
function makeImage (imageName) {
$("body").append("<img width=200 src='hell.png'>");
   }
 function makeImage2 (imageName) {
$("body").append("<img width=500 src='trolleyproblem.png'>");
   }

 $("#hell").click(function(){
    $("#hell").html ("Whoops! Wrong button :)" );
makeImage ("hell");

 makeButton("Here, click this one instead!");
  function makeButton (trolleyProblem) {
    $("body").append("<button id='trolleyProblem'>")
    $("#trolleyProblem").html(trolleyProblem);
 }

 $("#trolleyProblem").click(function(){
    makeImage2("trolleyproblem");
 });
 

});