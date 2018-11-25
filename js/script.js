var $heightB=$(window).height();
$(".topbar, .mainS").hide().fadeIn();
function _subir(){
  window.pageYOffset="0";
}
$(document).ready(function(){
    $(this).scrollTop(0);
});
function _hide(){
  if ((window.pageYOffset)>$heightB) {
    $(".topbar").fadeOut();

  }
  else {
    $(".topbar").fadeIn();
  }
}


yourFunction();
function yourFunction() {
 setInterval(_hide, 100);
     setInterval(_hide, 150);
 }
