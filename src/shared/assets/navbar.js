(function($) {
  "use strict"; // Start of use strict

  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  // Show the navbar when the page is scrolled up
  var MQL = 1170;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    $(window).on('scroll', 
        function() {
            $(document).ready(function(){
                $(window).scroll(function(){
                    if ($(this).scrollTop() > $( window ).height() * 0.2) {
                        $('#mainNav').addClass('is-visible is-fixed');
                    } else {
                        $('#mainNav').removeClass('is-visible is-fixed');
                    }
                });
            });
        })
  }

})(jQuery);
      // function() {
      //   var currentTop = $(window).scrollTop();
      //   //check if user is scrolling up
      //   if (currentTop < this.previousTop) {
      //     //if scrolling up...
      //     if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
      //       $('#mainNav').addClass('is-visible');
      //     } else {
      //       $('#mainNav').removeClass('is-visible is-fixed');
      //     }
      //   } else if (currentTop > this.previousTop) {
      //     //if scrolling down...
      //     $('#mainNav').removeClass('is-visible');
      //     if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
      //   }
      //   this.previousTop = currentTop;
      // });
 // End of use strict