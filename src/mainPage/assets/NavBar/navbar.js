(function(jQuery) {
    		jQuery(document).ready(function(){
    				jQuery(window).scroll(function(){
    						if (jQuery(this).scrollTop() > jQuery( window ).height() * 0.2) {
    								jQuery('.menu').fadeIn(100);
    						} else {
    								jQuery('.menu').fadeOut(100);
    						}
    				});
    		});
  })(jQuery);
