var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 10000);
}

jQuery(document).ready(function($){
  var offset = 300,
  offset_opacity = 1200,
  scroll_top_duration = 700,
  $back_to_top = $('.cd-top');
  $(window).scroll(function(){
  ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
  if( $(this).scrollTop() > offset_opacity ) {
  $back_to_top.addClass('cd-fade-out');
  }
  });
  $back_to_top.on('click', function(event){
  event.preventDefault();
  $('body,html').animate({
  scrollTop: 0 ,
  }, scroll_top_duration
  );
  });
  });

  