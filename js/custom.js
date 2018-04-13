$(document).ready(function() {
 
  $('#owl-demo').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

$(".owl-custom-next").click(function(){
        $('#owl-demo').trigger('next.owl.carousel');
        return false;
    });
$(".owl-custom-prev").click(function(){
    $('#owl-demo').trigger('prev.owl.carousel');
    return false;
});
  
});
smoothScroll.init({
            speed: 1000,
            easing: 'easeInOutCubic',
            offset: 0,
            updateURL: true,
            callbackBefore: function ( toggle, anchor ) {},
            callbackAfter: function ( toggle, anchor ) {}
        });
