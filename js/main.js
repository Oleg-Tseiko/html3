var modal = document.getElementById("myModal");

var btn = document.getElementById("form_opener");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    touchDrag: false,
    mouseDrag: false,
    nav: true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    autoPlay: true,
    autoPlay: 4000,
    items: 1,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'
  });
  $('.owl-carousel').find('.owl-nav').removeClass('disabled');
});
