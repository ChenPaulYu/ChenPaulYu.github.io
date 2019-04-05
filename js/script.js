// Example 1: From an element in DOM
$('.open-popup-link').magnificPopup(
    {
        type: 'inline',
        removalDelay: 300,
        midClick: true,
        mainClass: 'mfp-fade'
    }
);


var $item = $('.work').isotope({
    iteSelector : '.items'
})
console.log($item)

var filters = {};

$('.f').on('click',function () {
  var filter = $(this).attr('data-filter');
  var parents = $(this).parents('.filter');
  parents.find('.active').removeClass('active');
  $(this).addClass('active');
  console.log(`.${filter}`)
  $item.isotope({
      filter: `.${filter}`
  });
})

