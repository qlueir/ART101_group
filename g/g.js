

function makeImage (imageName) {
$("body").append("<img width=200 src='hell.png'>");
   }

 $("#hell").click(function(){
    $("#hell").html ("Whoops! Wrong button :)" );
makeImage ("hell");



 makeButton("Here, click this one instead!");

 function makeButton (trollyProblem) {
    $("body").append("<button id='trollyProblem'>")
    $("#trollyProblem").html(trollyProblem);
 }

});