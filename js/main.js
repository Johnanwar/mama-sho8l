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

  $(".sccroll-top i").click (function() {
    $("html , body").animate({ scrollTop: 0	},1000)	});  
  
  $(window).scroll( function () {	
  if ($(window). scrollTop () >= 600){$(".sccroll-top i").fadeIn(400)}
  else ($(".sccroll-top i").fadeOut(400) )
     });

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


  //start nav barr function in small screens

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
  // enfd nav barr function in small screens


  // staaaartnav barr function show product in nav baaaar

function showCart(){
 const navCart = document.getElementById('nav-cart');
 const cartPopup = document.getElementById('cart');
 const removNavCart = document.getElementById('cart-popup-close');
 navCart.addEventListener('click',(e)=> {
  cartPopup.classList.toggle("show-cart");
 })
 removNavCart.addEventListener('click',(e)=> {
  cartPopup.classList.remove("show-cart");
 });
};
showCart()
  // end nav barr function show product in nav baaaar


 /* start Counter*/
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
                });
               });
              } ;
             }) ;   
};
counter();
 /* end Counter*/

//  start cart cartPopup
function fixedCart(){
  const icon = document.querySelector("#poup-cart-icon i");
  const fixedPopup = document.querySelector(".fixedcart");
  icon.addEventListener("click", ()=>{
    fixedPopup.classList.toggle("changeRight");
    if( fixedPopup.classList.contains("changeRight") ){
      fixedPopup.style.right="0"
    }else{
      fixedPopup.style.right="-255px"
    };
  });
};
fixedCart();
//  end cart cartPopup

//  start  form contact popup;
function fixedForm(){
  const formIcon = document.querySelector(".contact-fixed-icon");
  const formContainer = document.querySelector(".fixed-contact-form");
  formIcon.addEventListener('click',()=> {
    formContainer.classList.toggle('show-form')
    if(formContainer.classList.contains('show-form')){
      formIcon.innerHTML = `<i class="fas fa-times-circle"></i>`
    }else{
      formIcon.innerHTML = `<i class="far fa-envelope"></i>`
    }
  })

}
fixedForm()

//  end form contact popup;

// article right side function
 function rightSide(){
  $(".right-side-header h5").click(function(){
    console.log($(this).siblings())
    $(this).siblings().toggleClass("hideUl")

  })

};
rightSide();


