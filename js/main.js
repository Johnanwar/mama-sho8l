// nav baaar 

// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-hash");
// const links = document.querySelectorAll(".nav-hash li");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("open");
//   links.forEach(link => {
//     link.classList.toggle("fade");
//   });
// });

// end nav baaaaaar


    /* owl carowsl  */
    $('.owl-carousel').owlCarousel({
      items:8,
    loop:true,
    autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
    margin:10,
      rtl:true,
      
      responsive:{
          0:{
              items:2
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
  });
  //  scroll button

  $(".sccroll-top i").click (function() {
    $("html , body").animate({ scrollTop: 0	},1000)	});  
  
  $(window).scroll( function () {	
  if ($(window). scrollTop () >= 600){$(".sccroll-top i").fadeIn(400)}
  else ($(".sccroll-top i").fadeOut(400) )
  
                              });