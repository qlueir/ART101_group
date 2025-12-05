$(document).ready(function() {

    //variables
    let ding = new Audio ('image/ding.mp3')
    let elevator = new Audio ('ADD SOME ELEVATOR MUSIC.mp3')
    var audio = document.getElementById('background-audio');

    //elevator music
    elevator.play('ADD SOME ELEVATOR MUSIC.mp3')
    elevator.loop = true
    audio.volume = 0.3;
    audio.loop = true;
    audio.play();

    //ding transition
    $(window).on("pageshow", function() {
            $("body").removeClass("fade-out");
        });

        $(".dingdong").click(function() {
            ding.play();
            elevator.pause();

            let url = $(this).data("url");
            if (!url) return;

            $("body").addClass("fade-out");

            setTimeout(function() {
             window.location.href = url;
            }, 1500);
        });
    });

    //===================TITLE=========================
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

    //=====================div page show + hide===================
    //groundfloor button --> floor 1
    $(".testbutton1").click(function() {
        $(".testground").hide();
        $(".testfloor1").show();
    });

    //groundfloor button --> floor 2
    $(".testbutton2").click(function() {
        $(".testground").hide();
        $(".testfloor2").show();
    });

    //back to ground floor
    $(".backtoground").click(function() {
        $(".testfloor1").hide();
        $(".testfloor2").hide();
        $(".testground").show();
    });


document.addEventListener('click', function () {
    audio.muted = false;
}, { once: true });


