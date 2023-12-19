$(window).scroll(function () { // Когда страница прокручивается
    var scrTop = $(window).scrollTop();
          if(scrTop>$('.anim1, .anim2, .anim3, .anim4').offset().top - $(window).height()  ) {
               numAnimate();
         }
    });
    function numAnimate () {
        var number = 1;
        setInterval(function () {
        number++;
            if (number<=100) { $('.anim1').text(number); };
            if (number<=85) { $('.anim2').text(number); };
            if (number<=10567) { $('.anim3').text(number); };
            if (number<=500) { $('.anim4').text(number); };
        }, 50);
     };


    function mPromptViz() {

         var sarname=prompt ( 'Your last name:' );
         var name=prompt ( 'Your name:' );
         var address=prompt ( 'Your address:' );
   
         alert ( 'Thanks for your order' );
         return;
    }