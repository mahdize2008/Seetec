var swiperMain = new Swiper('.swiper-main', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
        el: '.pagination-main',
        clickable:true,
    },
    navigation: {
        nextEl: '.next-main',
        prevEl: '.prev-main',
    },
    // breakpoints: {
    //     0: {
    //         slidesPerView: 'auto',
    //         freeMode:true,
    //         spaceBetween: 8,
    //     },
    //     992: {
    //         slidesPerView: 4,
    //         spaceBetween: 16,
    //     },
    // }
});

var swiperP1 = new Swiper('.swiper-p-1', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 'auto',
    freeMode:true,
    spaceBetween: 2,
    pagination: {
        el: '.pagination-p-1',
        clickable:true,
    },
    navigation: {
        nextEl: '.next-p-1',
        prevEl: '.prev-p-1',
    },
});

swiperP1.changeLanguageDirection('ltr')



var swiperArticles = new Swiper('.swiper-articles', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 'auto',
    freeMode:true,
    spaceBetween: 2,
    pagination: {
        el: '.pagination-articles',
        clickable:true,
    },
    navigation: {
        nextEl: '.next-articles',
        prevEl: '.prev-articles',
    },
});
