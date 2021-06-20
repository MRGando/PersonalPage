

      
      //Declares
       var radio = document.querySelector(".radio");
       var radio_1 = document.querySelector(".L1");
       var radio_2 = document.querySelector(".L2");
       var radio_3 = document.querySelector(".L3");
       var comeUp = document.querySelector(".comeUp");
       var home = document.querySelector(".home");
       var cv = document.querySelector(".cv");
       var touch = document.querySelector(".touch");
       var brand = document.querySelector(".brand");
       var comeUp = document.querySelector(".comeUp");
       var hamb = document.querySelector(".hamb");
       var menu = document.querySelector(".menu");
       var close = document.querySelector(".close");
       var header = document.querySelector(".header");
       var loading = document.querySelector('.loading');
       var menuBtn = document.querySelector('.btn');


       //hambButton
       counter = 100;
       hamb.addEventListener("click", ()=> {
            menu.style.right = "0";
            cv.style.color = "black";
       });
       close.addEventListener("click", ()=> {
          menu.style.right = "100%";
          cv.style.color = "unset";
          });


          //whitebackground when scroll happened
          window.addEventListener("scroll", function(){
   
             if(window.scrollY == 0){
                radio_1.checked = "true";
               header.style.background = "transparent";
               header.style.height = "10em";
               header.style.color = "white";
               cv.style.color = "white";
               touch.style.color = "white";
               comeUp.style.opacity = "0.2";
               
             }else{
               header.style.background = " linear-gradient(rgba(255,255,255,0.80),rgba(255,255,255,0.80))";
               header.style.height = "5em";
               header.style.color = "black";
               cv.style.color = "black";
               touch.style.color = "black";
               comeUp.style.opacity = "1";
               radio_2.checked = "true";
               brand.innerHTML = "✍️ CV";
             }
          });
          
            
          
/*var num = 0;
var images = ['src/banner.png','src/Mahtab.png','src/one.jpg','src/two.jpg'];
var time = 3000;



function changeBack(){
          landing.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.30),rgba(0,0,0,0.50)),url('" + images[num] + "')";
if(num < images.length -1){
num++;
}else{
          num = 0;
}

setTimeout("changeBack()", time);
}

window.onload = changeBack;
*/


       //loading bar
       window.addEventListener('load', function() {
          radio_1.checked = "true";
       loading.style.opacity = "0";
       window.scrollTo(0,0);
       setTimeout(function (){
          loading.style.display = "none"; 
       },1000);
       });



       //menu Activation
//changable icon

home.addEventListener("click", ()=> {
          home.classList.add("active");
          cv.classList.remove("active");
          touch.classList.remove("active");
          menu.style.right = "100%";
          radio_1.checked = "true";
});
comeUp.addEventListener("click", ()=> {
   brand.innerHTML = "✌️Reza K.";
});
cv.addEventListener("click", ()=> {
          cv.classList.add("active");
          home.classList.remove("active");
          touch.classList.remove("active");
          brand.innerHTML = "✍️ CV";
          menu.style.right = "100%";
          radio_2.checked = "true";
});
touch.addEventListener("click", ()=> {
          touch.classList.add("active");
          cv.classList.remove("active");
          home.classList.remove("active");
          brand.innerHTML = "🤙 Contact";
          menu.style.right = "100%";
          radio_3.checked = "true";
});

setInterval(() => {
   if(window.scrollY == 0){
      home.classList.add("active");
      cv.classList.remove("active");
      touch.classList.remove("active");
      brand.innerHTML = "✌️Reza K.";
      }
}, 100);
radio_1.addEventListener("click",function(){
   brand.innerHTML = "✌️Reza K.";
});
radio_2.addEventListener("click",function(){
   brand.innerHTML = "✍️ CV";
});
radio_3.addEventListener("click",function(){
   brand.innerHTML = "🤙 Contact";
});
//if scroll to bottom 
window.onscroll = function(){
if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
radio_3.checked = "true";
brand.innerHTML = "🤙 Contact";
}
}

