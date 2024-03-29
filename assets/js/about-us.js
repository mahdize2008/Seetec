var swiperItems = new Swiper('.swiper-items', {
    breakpoints: {
        0: {
            slidesPerView: 'auto',
            freeMode: true,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 'auto',
            freeMode: true,
            spaceBetween: 16,
        },
        992: {
            freeMode: false,
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }

});
var swiperBrands = new Swiper('.swiper-brands', {
    slidesPerView: 6,
    spaceBetween: 28,
    navigation: {
        nextEl: '.swiper-brands-button-next',
        prevEl: '.swiper-brands-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 'auto',
            freeMode: true,
            spaceBetween: 28,
        },
        992: {
            slidesPerView: 6,
            freeMode: false,
            spaceBetween: 28,
        },
    }
});


var swiperComments = new Swiper('.swiper-comments', {
    pagination: {
        el: '.pagination-comments',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 'auto',
            freeMode: true,
            spaceBetween: 12,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    }
});
