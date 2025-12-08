var angle = 0;

$('#button').on('click', function() {
    angle += 90;
    $('#image').css('transform', 'rotate(' + angle + 'deg)');
});

