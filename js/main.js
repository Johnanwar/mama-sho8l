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


  //  scroll button

  // $(".sccroll-top i").click (function() {
  //   $("html , body").animate({ scrollTop: 0	},1000)	});  
  
  // $(window).scroll( function () {	
  // if ($(window). scrollTop () >= 600){$(".sccroll-top i").fadeIn(400)}
  // else ($(".sccroll-top i").fadeOut(400) )
  //    });

  //    $(window).scroll( function () {	
  //     if ($(window). scrollTop () >= 100){
  //       $(".fixed-nav").addClass('my-fixed-nav')
  //     }else{
  //       $(".fixed-nav").removeClass('my-fixed-nav')
  //     }
      
  //        });


  //   //  oppups function
  //    var popups =function() {
  //     var signInPopup =document.querySelector(".popup");
  //     var signUpPopup =document.querySelector(".popup2");
  //     var signInBottun = document.querySelectorAll("#signIn");
  //     var signUpBottun = document.querySelectorAll("#signUp");
      
  //     signInPopup.addEventListener('click', function() {
  //        this.style.display = "none";
  //     })
  //     document.querySelector(".login-popup").addEventListener('click',(el)=>{
  //      el.stopPropagation()
  //    })
 
  //     signUpPopup.addEventListener('click', function() {
  //      this.style.display = "none";
  //      })
  //   document.querySelector(".login-popup2").addEventListener('click',(el)=>{
  //    el.stopPropagation()
  //  })
 
  //     signInBottun.forEach((el)=>{
  //       el.addEventListener("click",(e)=>{
  //         e.preventDefault();
  //        signInPopup.style.display = "block"
  //        console.log(signInPopup)
  //       })
  //     })
 
  //     signUpBottun.forEach((el)=>{
  //      el.addEventListener("click",(e)=>{
  //        e.preventDefault();
  //        signUpPopup.style.display = "block"
  //       console.log(signInPopup)
  //      })
  //    })

  //    }
  //    popups();


  // nav barr function in small screens

function navbar(){
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".big-nav-links");
  const links = document.querySelectorAll(".big-nav-links li");
  
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
  });
};
navbar()

  // nav barr function show product in nav baaaar

function showCart(){
 const navCart = document.getElementById('nav-cart');
 const cartPopup = document.getElementById('cart');
 const removNavCart = document.getElementById('cart-popup-close');
 navCart.addEventListener('click',(e)=> {
  cartPopup.classList.toggle("show-cart");
 })
 removNavCart.addEventListener('click',(e)=> {
  cartPopup.classList.remove("show-cart");
 })

  
 
}

showCart()
              /*Counter*/

function counter(){
              $(window).scroll(function(){
                if($(window).scrollTop()>=$("#about").offset().top-200)
                    {
                        $('.data').each(function(){
                        $(this).prop('Counter',0).animate({
                        Counter:$(this).attr("data-count")
                        },{
                        duration:5000,
                        easing: 'swing',
                        step: function(now){
                        $(this).text(Math.ceil(now))
                    }
                })
            })  
                    } 
            })    
}
counter()

