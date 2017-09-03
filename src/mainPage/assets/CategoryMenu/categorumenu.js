$(document).ready(function(){
  $("img").click(function() {
      var img = $(this);
      var id = img.attr('id');
      if (img.width() < 200)  {
          $(this).siblings().animate({width: "100px", height: "100px"}, 220)
          $(this).siblings().removeClass("img-selected");
          $(this).addClass("img-selected");
          img.animate({width: "200px", height: "200px"}, 220);
      }
    });
  });
