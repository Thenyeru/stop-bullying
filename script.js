//botão de scrolar para o top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





function mostrarEsconder() {
  var div = document.getElementById("tipo-bullying");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}




// //recolher o menu
// var header = document.querySelector('.header');

// window.onscroll = function() {
//   if (window.pageYOffset > 0) {
//     header.classList.add('recolhido');
//   } else {
//     header.classList.remove('recolhido');
//   }
// }


