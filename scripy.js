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

/*--------------------------grid-------------------------------------------- */

const projectSelector=document.addEventListener('click',(){
  
})

