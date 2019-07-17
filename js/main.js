
  //  scroll button
  function scrollAndAnimate(){
    $(".sccroll-top i").click (function() {
      $("html , body").animate({ scrollTop: 0	},1000)	});  
    
    $(window).scroll( function () {	
    if ($(window). scrollTop () >= 600){$(".sccroll-top i").fadeIn(400)}
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
  // enfd nav barr function in small screens


  // staaaartnav barr function show product in nav baaaar

// function showCart(){
//  const navCart = document.getElementById('nav-cart');
//  const cartPopup = document.getElementById('cart');
//  const removNavCart = document.getElementById('cart-popup-close');
//  navCart.addEventListener('click',(e)=> {
//   cartPopup.classList.toggle("show-cart");
//  })
//  removNavCart.addEventListener('click',(e)=> {
//   cartPopup.classList.remove("show-cart");
//  });
// };
// showCart()
  // end nav barr function show product in nav baaaar


 /* start Counter*/
// function counter(){
//               $(window).scroll(function(){
//                 if($(window).scrollTop()>=$("#about").offset().top-200)
//                     {
//                         $('.data').each(function(){
//                         $(this).prop('Counter',0).animate({
//                         Counter:$(this).attr("data-count")
//                         },{
//                         duration:5000,
//                         easing: 'swing',
//                         step: function(now){
//                         $(this).text(Math.ceil(now))
//                     }
//                 });
//                });
//               } ;
//              }) ;   
// };
// counter();
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
 // product quantity function 
 function quantityControl(){
  const min = document.querySelector('#min');
  const max = document.querySelector('#max');
  const quantityValue = document.querySelector('#quantity-value');
  const disable = function(){
    if(quantityValue.value > 1){
      min.removeAttribute("disabled");
    }
    else{
      min.setAttribute("disabled",false);
    }
  }
  disable();

  
  min.addEventListener('click',()=>{
    quantityValue.value--;
    disable();
  })

  max.addEventListener('click',()=>{
    quantityValue.value ++;
    disable();
  })
 }
 quantityControl()

 // view images function in review page 
 function reviewImg(){

   $(".small-img").click( function (){
    var imgSrc =  $(this).attr("src");
    console.log(imgSrc)
    $(".big-img").attr ("src" , imgSrc);
  } )

 };
 reviewImg();

