$(document).ready(function() {

let ding = new Audio ('image/ding.mp3')
let elevator = new Audio ('ADD SOME ELEVATOR MUSIC.mp3')
elevator.play('ADD SOME ELEVATOR MUSIC.mp3')
elevator.loop = true

/*
$(".buttons").click(function() {
    e.preventDefault();
    let url = $(this).attr("href");
    ding.play();
    elevator.pause();
    });
*/
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