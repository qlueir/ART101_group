var angle = 0;

$('#button').on('click', function() {
    angle += 90;
    $('#image').css('transform', 'rotate(' + angle + 'deg)');
});

var HTMLcontent = "<div class=\"buttons\"> <a href=\"../endingscreen.html\"><button id=yes> YES </button> </a> <a href=\"../index.html\"><button id=no> NO </button> </a></div>";
$('#yes').on('click', function() {
    window.location.href = "../endingscreen.html";
});
