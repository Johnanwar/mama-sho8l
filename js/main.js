
// spnner function
  function spiner(){
    $(".loading-screen").fadeOut(1000 , function(){ $("body").css("overflow","auto") });

}
window.addEventListener('load',function(){
    spiner()

})
// spnner function

  //  scroll button
  function scrollAndAnimate(){
    $(".sccroll-top i").click (function() {
      $("html , body").animate({ scrollTop: 0	},1000)	});  
    
    $(window).scroll( function () {	
    if ($(window). scrollTop () >= 100){$(".sccroll-top i").fadeIn(400)}
    else ($(".sccroll-top i").fadeOut(400) )
       });
  
       $(window).scroll( function () {	
        if ($(window). scrollTop () >= 100){
          $(".big-nav").addClass('big-nav-fixed')
        }else{
          $(".big-nav").removeClass('big-nav-fixed')
        }
        
           });
  }
  scrollAndAnimate()
  // alertrt
 function myAlert(){
    $(".cart-alert").animate({right: "100px"})
    $(".cart-alert").delay(2000);
   $(".cart-alert").animate({right:'-230px'},700);
 };

  // cart alert
  function cartAlert(){
  $('.addToCart').click(function(){
    myAlert();
  })
  }
  cartAlert()
  // end cart alert
  // love product function
  function loveProduct (){
    $('.product-love ').click(function(){
      $(this).toggleClass('heart')
      if($(this).hasClass('heart')){
        this.innerHTML = `<i class="fas fa-heart love"></i>`
      }else{
        this.innerHTML = `<i class="far fa-heart love"></i>`
      }
    })
  }
  loveProduct ();



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
  // show password function
function showPass(){
  const input = document.querySelectorAll(".pass-container input");
  const eye = document.querySelectorAll(".pass-container i");
  eye.forEach((el)=>{

    el.addEventListener("click", function (e) {
        e.preventDefault();
        
            input.forEach((inp) => {
            inp.classList.toggle("show")

            if (inp.classList.contains("show")) {
                inp.setAttribute("type", "text");
            } else {
                inp.setAttribute("type", "password");
            }
        });
        
     
    });
});


}
showPass()

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
  // end nav barr function in small screens
//  search function in nav baaaaaaaaaaaaar
function searchNav(){
  $('.search-small').click(function(){
    $('.nav-search').toggleClass('showserch');
    $('.closesearch').toggleClass('showserch');
  })
}
searchNav();

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



//  end form contact popup;

// article right side function
 function rightSide(){
  $(".right-side-header .d-flex ").click(function(){
    $(this).siblings().toggleClass("hideUl");
    
    
    if($(this).siblings().hasClass("hideUl")){
      $(this).children()[1].innerHTML=`<i class="fas fa-sort-down"></i>`
    }else{
      $(this).children()[1].innerHTML=`<i class="fas fa-sort-up"></i>`
    }
  })

};
rightSide();
 function like(){
 const likeIcon = document.querySelector('.article-like .fa-thumbs-up')
 const disLikeIcon = document.querySelector('.article-like .fa-thumbs-down')
 var likeNumber = document.querySelector('#like-number')
 var disLikeNumber = document.querySelector('#dislike-number')
 if(likeIcon !==null){
  likeIcon.addEventListener('click',()=>{
    likeNumber.textContent  ++
   })
 }
 if(disLikeIcon !==null){
  disLikeIcon.addEventListener('click',()=>{
    disLikeNumber.textContent  ++
   })
 }
 

 };
 like();
 

 // view images function in review page 
 function reviewImg(){

   $(".small-img").click( function (){
    var imgSrc =  $(this).attr("src");
    console.log( $(".big-img").attr('data-zoom-image'))
    $(".big-img").attr ("src" , imgSrc);
    $(".big-img").attr ("data-zoom-image" , imgSrc);
    
   
  } )

 };
reviewImg()

//  paginaaaaaaaaaaaaation function
function pagination(){
  $('.pagination-btn').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    
  })
};
pagination()
// end paginaaaaaaaaaaaation

// news page taps function
function newsTaps(){
  
document.querySelectorAll(".news-btn").forEach((el) => {
  el.addEventListener("click", function(){

    var conent =  this.getAttribute("data-value")
    var x = "." + "content" +conent
    var y = document.querySelector("" + x)
    // y.classList.toggle("active")
    $(y).siblings().removeClass("active")
    $(y).siblings().css({ "display": "none" });
    y.style.display = "block";
    $(this).addClass("active-btn");
    $(this).siblings().removeClass("active-btn");


    // if (y.classList.contains("active")){
    //   y.style.display ="block"
    // }else {
    //   y.style.display = "none"
    // }
  })
  
});
};
newsTaps();
// services function
function service(){
  document.querySelectorAll(".servise-btn").forEach((el) => {
    el.addEventListener("click", function(){
  
      var conent =  this.getAttribute("data-value")
      var x = "." + "servise" +conent
      var y = document.querySelector("" + x)
      $(y).siblings().css({ "display": "none" });
      y.style.display = "block";
      $(this).addClass("active-servise");
      $(this).siblings().removeClass("active-servise");
    })
    
  });

}
service();
// caaaaaaaaaaaaaaaart paaaaaaaaaaaaaaage
// product quantity function 
function quantityControl(){
  const min = document.querySelector('.min');
  const max = document.querySelector('.max');
  const quantityValue = document.querySelector('.quantity-input');
  const price = document.querySelector('.price')
  const totalPrice = document.querySelector('.total-price')
  const disable = function(){

    if(quantityValue.value < 2 ){
      min.setAttribute("disabled",false);
    }
    else{
      min.removeAttribute("disabled");
    }
  };
 function renewPrice(){
   var allPrice = (price.textContent)*quantityValue.value;
   totalPrice.textContent = allPrice;
   console.log(totalPrice.textContent)
   console.log(price.textContent)
 }
 disable();
 renewPrice();
  
  min.addEventListener('click',()=>{
    quantityValue.value--;
    disable();
    renewPrice();
  })

  max.addEventListener('click',()=>{
    quantityValue.value ++;
    disable();
    renewPrice();
  })
 }
  // quantityControl()


 


