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

$("#sendToVal").click(function() {
  let name= $(".inpName").val();
  let telephone= $(".inpTel").val();
  let email= $(".inpMail").val();
  let nameReg = /^[a-zA-Z\u0401\u0451\u0410-\u044f]{2,40}$/;
  let regMail = /^\S+@\S+\.\S+$/;
  let regPhone = /^[0-9\-\+]{9,15}$/;
  if (name==null || name=="" || name.search(nameReg)){
    $(".inpName").attr("placeholder", "Поле обязательно до заполнения").val("");
    $(".inpName").addClass("wrong_inp");
    $(".closed").removeClass("sended");
    return false;
  } else if(telephone.search(regPhone)){
    $(".inpName").removeClass("wrong_inp");
    $(".inpTel").attr("placeholder", "Поле обязательно до заполнения").val("");
    $(".inpTel").addClass("wrong_inp");
    $(".closed").removeClass("sended");
    return false;
  } else if (email.search(regMail)) {
    $(".inpTel").removeClass("wrong_inp");
    $(".inpMail").attr("placeholder", "Поле обязательно до заполнения").val("");
    $(".inpMail").addClass("wrong_inp");
    $(".closed").removeClass("sended");
    return  false;
  } else {
    $(".inpMail").removeClass("wrong_inp");
    $(".closed").addClass("sended");
    return true;
  }
});
