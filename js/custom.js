



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.8,
    spaceBetween: 100,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
         375: {
            slidesPerView: 1.2,
            spaceBetween:15,
        },
        576: {
            slidesPerView: 1.4,
            spaceBetween: 30,
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 1.8,
            spaceBetween: 50,
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 1.8,
            spaceBetween: 100,
        }
    }
});



$(function () {
    // This will select everything with the class smoothScroll
    // This should prevent problems with carousel, scrollspy, etc...
    $('.scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000); // The number here represents the speed of the scroll in milliseconds
                return false;
            }
        }
    });
});

// Change the speed to whatever you want
// Personally i think 1000 is too much
// Try 800 or below, it seems not too much but it will make a difference


var start = 4721245;
var speed = 70;
$(document).ready(function () {
    go();
    setInterval(function () {
        go();
    }, speed);
});
function go() {
    $(".counter").html(start.toFixed(0));
    start += 0.125;
}