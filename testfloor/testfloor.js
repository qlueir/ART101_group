$(document).ready(function() {

    //variables 
     let ding = new Audio ('image/ding.mp3')

     //please work
    $(window).on("pageshow", function() {
            $("body").removeClass("fade-out");
        });

            let url = $(this).data("url");
            if (!url) return;
            //ADD LOBBIE TRANSITION
            $("body").addClass("fade-out");

            // Play door close SFX
            const closeSound = document.getElementById("closeSound");
            closeSound.currentTime = 0;
            closeSound.volume = 1;
            closeSound.play().catch(err => console.log("Close SFX ERROR:", err));

            setTimeout(function() {
             window.location.href = url;
            }, 1500);
        
});
/*
    // Back to elevator button
    $(".backtoelevator").click(function() {
        const url = $(this).data("url"); // read URL from data-url
        if (!url) return;

        // Play door close SFX
        const closeSound = document.getElementById("closeSound");
        closeSound.currentTime = 0;
        closeSound.volume = 1;
        closeSound.play().catch(err => console.log("Close SFX ERROR:", err));

        // Fade out
        $("body").addClass("fade-out");

        // Redirect after 1.5 seconds
        setTimeout(function() {
            window.location.href = url;
        }, 1500);
    });
    */