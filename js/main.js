var modal = document.getElementById("myModal");

var btn = document.getElementById("form_opener");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  $("body").addClass("modal-open");
}

span.onclick = function() {
  modal.style.display = "none";
  $("body").removeClass("modal-open");
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    $("body").removeClass("modal-open");
  }
}
function onInvalidName() {
  var self = $(this);
  self.css('border-color', 'red');
}
