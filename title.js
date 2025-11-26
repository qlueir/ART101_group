$(window).on("pageshow", function () {
    $("body").removeClass("fade-out");
});

var closeSound = document.getElementById("close-sound");

$("#start-button").on("click", function () {

    closeSound.currentTime = 0;
    closeSound.volume = 1;

    closeSound.play().catch(function (err) {
        console.log("AUDIO ERROR:", err);
    });

    $("body").addClass("fade-out");

    setTimeout(function () {
        window.location.href = "index.html";
    }, 1500);
});
