// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

//Toggle plugin

$(document).ready(function() {
          $('.plus-toggle').click(function(){
            //get collapse content selector
            var collapse_content_selector = $(this).attr('href');

            //make the collapse content to be shown or hide
            var toggle_switch = $(this);
            $(collapse_content_selector).toggle(function(){
              if($(this).css('display')=='none'){
                                //change the button label to be 'Show'
                toggle_switch.html('+');
              }else{
                                //change the button label to be 'Hide'
                toggle_switch.html('-');
              }
            });
          });
 });
//Hamburger

          $('.hamburger').on('click', function() {
            $('#mobile_menu').slideToggle(200,function() {
                if($(this).css('display')==='none') {
                    $(this).removeAttr('style');
                }
            });
          });
           $( ".hamburger" ).click(function() {
  $( this ).toggleClass( "is-active" );
});



       

//Owl-carousel 

 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})