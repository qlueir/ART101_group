$(document).ready(function() {
    //play calm soundtrack
    
    //if click #click4heaven button
    $("#click4heaven").click(function(){
        //hide intro
        //show hell
        
        $(".intro").hide();
        $(".hell").show();

        //pause calm soundtrack
    
    
    
    //================FAKE HEAVEN (HELL)=========================

    //"oh no! sorry wrong button" dialog click
        //hide hell
        //show 


    //==================TROLLEY PROBLEM=======================

    //trolleyproblem 
    $("#trolleyProblem").html ("Wuh oh, looks like you have a dillemma! Will you pull the lever to save the five people but sacrifice one?");
        //if do nothing, say html
        //else pell-lever, say html
        //play laugh sfx
        //force send to endingscreen.html
    const myButtons = document.getElementById('trolleyProblem');
    const hiddenButtons = document.getElementById('hiddenButtons');


    

    makeButton("Here, click this one instead!");
    function makeButton (trolleyProblem) {
        $("body").append("<button id='trolleyProblem'>")
        $("#trolleyProblem").html(trolleyProblem);
    }
    });

    //================CHOICE===================
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


    var exitButton = document.getElementById("backtoelevator");

    exitButton.addEventListener("click", function() {
        window.location.href = "../index.html?fromFloor=1";
    });
