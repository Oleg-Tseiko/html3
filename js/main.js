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
  let errorArray = [];
  if (name==null || name=="" || name.search(nameReg)){
    $(".inpName").attr("placeholder", "Поле обязательно до заполнения");
    $(".inpName").addClass("wrong_inp");
    $(".closed").removeClass("sended");
    errorArray[0] = 1;
  } else {
    $(".inpName").removeClass("wrong_inp");
    errorArray[0] = 0;
  }
   if(telephone.search(regPhone)){

    $(".inpTel").attr("placeholder", "Поле обязательно до заполнения");
    $(".inpTel").addClass("wrong_inp");
    $(".closed").removeClass("sended");
    errorArray[0] = 1;
  } else {
    $(".inpTel").removeClass("wrong_inp");
    errorArray[0] = 0;
  }
   if (email.search(regMail)) {
    $(".inpMail").attr("placeholder", "Поле обязательно до заполнения");
    $(".inpMail").addClass("wrong_inp");
    $(".closed").removeClass("sended");
    errorArray[0] = 1;
  } else {
    $(".inpMail").removeClass("wrong_inp");
    errorArray[0] = 0;
  }
  if (errorArray[0] != 1) {
    $(".inpMail").removeClass("wrong_inp");
    $(".inpName").removeClass("wrong_inp");
    $(".inpTel").removeClass("wrong_inp");
    $(".closed").addClass("sended");
    return true;
  }
});
