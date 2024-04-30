$(window).on('scroll', () => {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');

    } else {
        $('nav').removeClass('black');
    }
});

$(document).ready(() => {
    $(".menu h4").click(() => {
        $("nav ul").toggleClass("active");
    })
});