
(function($) {
    function setSize() {
      console.log($(window).width());
      if ($(window).width() < 981) {
        $('.row-wraper').css({"flex-flow": "column nowrap",
         "justify-content": "center",
         "align-items": "center"
       });
        $('.site-heading').css({"padding": "40px 0", "align-self": "center"});
        $('.logo-heading').css({"order": -1, "padding": "12em 0 0 0", "align-self": "center"});
        $('button.subheading').css({"align-self": "center"});
        
      } else {
        $('.row-wraper').css({"flex-flow": "",
         "justify-content": "",
         "align-items": ""
       });
        $('.site-heading').css({"padding": "", "align-self": ""});
        $('.logo-heading').css({"order": "", "padding": "", "": ""});
        $('button.subheading').css({"align-self": ""});
      }
    }

    $(document).ready(function () {
      setSize();
    });

    $(window).resize(setSize);
  })($);


  // header.masthead .row-wraper {
  //   flex-flow: column nowrap;
  //   justify-content: center;
  //   align-items: center;
  //   justify-content: center;
  // }
  // header.masthead .page-heading,
  // header.masthead .post-heading,
  // header.masthead .site-heading {
  //   padding: 40px 0;
  //   align-self: center;
  // } 
      

  // header.masthead .logo-heading {
  //   order: -1;
  //   padding: 12rem 0 0 0;
  //   align-self: center;
  // }