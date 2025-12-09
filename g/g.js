$(document).ready(function() {
    $(".hell").hide();
    $(".trolley").hide();

    $("#heaven-doorknob").click(function(){
        $(".intro").hide();
        $("body").css("background-color", "black");
        $(".hell").show();
    });
        //replace door img with flames

    $(".click-this-instead").click(function() {
        $(".hell").hide();
        $(".trolley").show();
    });
    //==================TROLLEY PROBLEM=======================

    //variables
    let laugh = new Audio('laugh.mp3')
    let wompwomp = new Audio('wompwomp.mp3')
    
    //trolleyproblem choice
    $(".pull-lever").click(function() {
        laugh.play();
        wompwomp.play();
        $(".do-nothing").hide();
        $(".pull-lever").hide();
        $("#trolley").attr("src", "flames.png");
        $("body").css("background-color", "black");
        $(".annoying").html ("Hm. Sure you've saved 5 people but murder is still murder. Enjoy eternal damnnation!");
        setTimeout(function() {
            window.location.href = "../endingscreen.html";
        }, 7000);
    });

     $(".do-nothing").click(function() {
        laugh.play();
        wompwomp.play();
        $(".do-nothing").hide();
        $(".pull-lever").hide();
        $("#trolley").attr("src", "flames.png");
        $("body").css("background-color", "black");
        $(".annoying").html ("Wow. You let all those people die just so you wouldn't have to be responsible for killing just one. Enjoy eternal damnnation!");
        setTimeout(function() {
            window.location.href = "../endingscreen.html";
        }, 7000);
    });
    
    var exitButton = document.getElementById("backtoelevator");

    exitButton.addEventListener("click", function() {
        window.location.href = "../index.html?fromFloor=1";
    });
});
