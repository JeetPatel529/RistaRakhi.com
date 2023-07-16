var swiper = new Swiper("[Customer_slider]", {
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
        nextEl: ".rightsideslider",
        prevEl: ".leftsideslider",
    },
});

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})


var swiper = new Swiper("[Popular_Rakhi]", {
    slidesPerView: 1.2,
    loop: true,
    spaceBetween: 16,
    navigation: {
        nextEl: ".rightsideslider",
        prevEl: ".leftsideslider",
    },
    breakpoints: {
        320: {
            slidesPerView: 2.5,
        },
        529: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});


var swiper = new Swiper("[Home_Banner]", {
    slidesPerView: 1,
    effect: 'fade',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});