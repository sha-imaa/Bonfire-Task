      //change Image slides
var slideIndex = 1;
showSlides(slideIndex);


      //image bubbles control
function currentSlide(n) {
    "use strict";
  slideIndex = n;
  showSlides();
}

      
      //changing images function
function showSlides(n) {
    "use strict";
  var i;
  var slides = document.getElementsByClassName("mySlides-fade");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length)
  {
    slideIndex = 1;
    }
  
  if (n < 1)
  {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
showSlides();






      //change Image slides
var slideIndex = 1;
changeSlides(slideIndex);



//buttons' function
  function plusSlide(n){
    "use strict";
  changeSlides(slideIndex = slideIndex + 1);
  changeSlides();
  }
  plusSlide();
    
      
      //changing images function
function changeSlides(n) {
    "use strict";
  var i;
  var slides = document.getElementsByClassName("brands");
  if (n > slides.length)
  {
    slideIndex = 1;
    }
  
  if (n < 1)
  {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  
  slides[slideIndex-1].style.display = "block";  
 
}
changeSlides();