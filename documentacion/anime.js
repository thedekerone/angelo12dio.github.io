
     document.getElementById("tools2").addEventListener("click",animasao);
     document.getElementById("tools2").addEventListener("click",animasao2);
function animasao(){
if(document.querySelector(".bajar").offsetHeight=="3"){
document.querySelector(".bajar").style.webkitAnimationName="css-animation-down";
document.querySelector(".bajar").style.webkitAnimationDuration="1s";

document.querySelector(".bajar").style.height="290px";
}

}
function animasao2(){
  if(document.querySelector(".bajar").offsetHeight>="292"){
  document.querySelector(".bajar").style.webkitAnimationName="css-animation-up";
  document.querySelector(".bajar").style.webkitAnimationDuration="1s";

  document.querySelector(".bajar").style.height="0";
  }
}
