$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('nav').addClass('fixed');
    } else {
        $('nav').removeClass('fixed');
    }
});