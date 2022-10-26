$(document).ready(function(){
  media();

  $(window).resize(function(){
    var ww= $(window).width();
    var wh= $(window).height();

    media();
  });


  function media(){
    var ww= $(window).width();
    if(ww >= 1200){
      $(window).on('scroll', function(){
        let sct = $(window).scrollTop();
        console.log(sct);

        var scrollY = $(window).scrollTop();
        var bgSize = 100+(scrollY/20);

        if(bgSize < 150){
          $('.banner-bg').css('background-size', bgSize+'%');
        }
      })
    }else{
      
    }
  }
    



  
    var swiper1 = new Swiper(".mySwiper", {
        grabCursor: true,
        loop: true,
        // effect: "fade",
        // effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
        }, autoplay:{
            delay:2000
        }
      });

      var swiper2 = new Swiper(".mySwiper2", {
        // grabCursor: true,
        loop: true,
        slidesPerVeiw: "auto",
        // effect: "fade",
        // effect: "creative",
        autoplay:{
            delay:2000
        }
      });

});