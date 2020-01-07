jQuery(document).ready(function () {
    var owl = jQuery('.owl-carousel');
    owl.owlCarousel({
        loop:false,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            700:{
                items:3,
                nav:false,
            }
        }
    });

    jQuery('.question-slide').click(function (e) { 
        e.preventDefault();
        owl.trigger("to.owl.carousel", 0, 1);
    });

    jQuery('.news-slide').click(function (e) { 
        e.preventDefault();
        owl.trigger("to.owl.carousel", 1, 1);
    });

    jQuery('.search-slide').click(function (e) { 
        e.preventDefault();
        owl.trigger("to.owl.carousel", 2, 1);
    });
});