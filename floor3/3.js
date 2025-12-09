let audio = document.getElementById('Sprunki');
audio.loop = true;
audio.muted = false;
audio.play();
audio.volume = 0.3;


$("#creepyFace").click(function() {
  $("#status").text("AAAAAAAAAAAAAAAAÆÆÆÆÆÆÆÆÆÆÆ");
  $("body").css("background", "red");
});

$("#creepyFace").hover(
  function() { $("#status").text("STAÆY ÆWAYYY"); },
  function() { $("#status").text("IT BURNS IT BURNSITBURNSITBURNSITB"); }
);


$("#creepyFace").dblclick(function() {
  $("#status").text("STOOŒŒŒŒŒŒŒOOOOOŒŒOOOOOOP!!!");
  $("#creepyFace").css("transform", "scale(1.2)");
});

var exitButton = document.getElementById("exitButton");

exitButton.addEventListener("click", function() {
    window.location.href = "../index.html?fromFloor";
});


// $(document).keydown(function(event) {
//   $("#status").text("You pressed: " + event.key);
// });

// $(document).mousemove(function(event) {
//   $("#creature").css({
//     left: event.pageX - 60,
//     top: event.pageY - 60,
//     position: "absolute"
//   });
// });
