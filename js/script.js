// Example 1: From an element in DOM
$('.open-popup-link').magnificPopup(
    {
        type: 'inline',
        removalDelay: 300,
        midClick: true,
        mainClass: 'mfp-fade'
    }
);



// var $item = $('.work').isotope({
//     iteSelector: '.items'
// })



// $('.f').on('click', function () {
//     var filter = $(this).attr('data-filter');
//     var parents = $(this).parents('.filter');
//     parents.find('.active').removeClass('active');
//     $(this).addClass('active');
//     console.log(`.${filter}`)
//     $item.isotope({
//         filter: `.${filter}`
//     });
// })





$(document).ready(function () {
    
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

});

