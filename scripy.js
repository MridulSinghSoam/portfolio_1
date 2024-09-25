/*-----------------------------nav bar responsive------------------------------*/


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    }else{
        x.className = "topnav";
    }
  }

/*----------------------------------------------------------------------- */
var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });


/*-------------------------------------------------------------------------------- */
Number.prototype.format = function(n) {
  var r = new RegExp('\\d(?=(\\d{3})+' + (n > 0 ? '\\.' : '$') + ')', 'g');
  return this.toFixed(Math.max(0, Math.floor(n))).replace(r, '$&,');
};

$('.count').each(function () {
  $(this).prop('counter', 0).animate({
      counter: $(this).text()
  }, {
      duration: 10000,
      easing: 'easeOutExpo',
      step: function (step) {
          $(this).text('' + step.format());
      }
  });
});