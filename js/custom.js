



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

var speed = 5000;

document.addEventListener("DOMContentLoaded", async (event) => { 

    await get_info();
    setInterval(async function () {
        await get_info();
    }, speed);
});

async function get_info() {
    let res = await fetch("https://api.stakejoy.com/block_info");
    if (res.ok) {
        let {block_height, staked_count, oracle_price, total_rewards} = await res.json();
    
        console.log(total_rewards);
        var price = oracle_price / 100000000;
        var total_hnt = staked_count * 10000;
        var total_usd = parseFloat((staked_count * 10000 * price).toFixed(0));
        var total_earned = parseFloat(((total_rewards / 100000000) * price).toFixed(0));
        $("#total_staked").html(staked_count.toLocaleString('en'));
        $("#total_usd").html(`$${total_usd.toLocaleString('en')}`);
        $("#total_hnt").html(total_hnt.toLocaleString('en'));
        $("#total_rewards").html(`$${total_earned.toLocaleString('en')}`);
    }
};