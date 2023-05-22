$(document).ready(function() {  
    var stickyNavTop = $('.nav').offset().top;
 
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();  
 
        if (scrollTop > stickyNavTop) { 
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky'); 
        }
    };

    stickyNav(); 
    $(window).scroll(function() {
        stickyNav();
    });
});

 
$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow':'visible'});
});




$('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    responsiveClass:true,
    autoplay: true, 
    autoplaySpeed: 1000,
    dots: true,
    nav: false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        350:{
            margin:6,
            items:1,
            nav:false
        },
        575:{
            margin:10,
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        },
        1920:{
            items:4,
            nav:false,
            loop:true
        }
    }
}); 

$(".scroll").on("click", function(event){
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top - 130});
});

// bottom to up
$(window).on('scroll', function () { 
    var scrolled = $(window).scrollTop();
    if (scrolled > 500) $('.go-top').addClass('active');
    if (scrolled < 500) $('.go-top').removeClass('active');
});


$('.go-top').on('click', function () {
    $("html, body").animate({
        scrollTop: "0"
    }, 50);
});


//toggle class for dark mood

$(document).on("change", "#dark_mood", function(){
    if($(this).is(":checked")){
        $("body").addClass("dark")
    }
    else{
        $("body").removeClass("dark")
    }
});  

$('#navbarSupportedContent .nav-item .nav-link').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
