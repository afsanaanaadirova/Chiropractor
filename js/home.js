$(document).ready(function(){

    $( ".nav-item" ).hover(function(){
        $(this).find(".dropdown-menu").slideToggle( "slow");
        $(this).find(".dropdown-menu").css( "background-color","#444444");
        $(this).find(".dropdown-item").css( "color","white");
});
$( ".dropdown-item" ).hover(function(){
    $(this).css( "background-color","#444444");
    $(this).css( "color","#7fc540");
});
});
// owl carusel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    })
  });

//   fancybox
$(document).ready(function() {
    
        /* This is basic - uses default settings */
        
        $("a#single_image").fancybox();
        
        /* Using custom settings */
        
        $("a#inline").fancybox({
            'hideOnContentClick': true
        });
          
        /* This will create two galleries */
            
        $("a.grouped_elements").fancybox();
        /* Apply fancybox to multiple items */
        
        $("a.group").fancybox({
            'transitionIn'	:	'elastic',
            'transitionOut'	:	'elastic',
            'speedIn'		:	600, 
            'speedOut'		:	200, 
            'overlayShow'	:	false
        });
        
    });

//Scoll
$(window).scroll(function(){
    if ($(this).scrollTop() > 400) 
    {
        $('.firstpage').fadeIn();
    } 
    else 
    {
        $('.firstpage').fadeOut();
    }
});
$('.firstpage').click(function(){
    $('html, body').animate({scrollTop : 0},1000);
    return false;
});
// accordin
$('.ziehharmonika').ziehharmonika({
    
     // To use a headline tag other than h3, adjust or overwrite ziehharmonika.css as well
     headline: 'h3',
     // Give headlines a certain prefix, e.g. "♫ My headline"
     prefix: false,
    
     // Only 1 accordion can be open at any given time
     highlander: true,
    
     // Allow or disallow last open accordion to be closed
     collapsible: false,
    
     // Arrow down under headline
     arrow: true,
    
     // Opened/closed icon on the right hand side of the headline (either false or JSON containing symbols or image paths)
     collapseIcons: {
       opened: '&ndash;',
       closed: '+'
     },
    
     // alignment of collapse icon
     collapseIconsAlign: 'right',
    
     // <a href="https://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a> to opened accordion element
     scroll: true
      
   });
   $('.ziehharmonika').ziehharmonika();
   