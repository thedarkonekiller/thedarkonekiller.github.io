$(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
        $('nav').addClass('fixed');
    } else {
        $('nav').removeClass('fixed');
    }
});