var eso= document.querySelector("#mover1");
var eso2=document.querySelector("#mover2");
var flechaD=document.querySelector("#uno")
function _DerechaC(typo,css,tiempo,count){
  document.querySelector(css).style.webkitAnimationName=typo;
  document.querySelector(css).style.webkitAnimationDuration=tiempo;
  document.querySelector(css).style.webkitAnimationIterationCount=count;
}

function activar(page,gaa){
  if(gaa.offsetLeft==$(document).width()||gaa.offsetLeft==-$(document).width()){
_DerechaC("css-animation-fade",page,"2s","1");
  gaa.style.left="0%";

  }
  if(gaa.offsetLeft==0){

_DerechaC("css-animation-fade2",page,"2s","1");
    gaa.style.left="-100%";
  }}
  function activar2(page,gaa){
    if(gaa.offsetLeft==$(document).width()||gaa.offsetLeft==-$(document).width()){
  _DerechaC("css-animation-fade3",page,"2s","1");
    gaa.style.left="0%";
    }
    if(gaa.offsetLeft==0){

  _DerechaC("css-animation-fade4",page,"2s","1");
      gaa.style.left="-100%";
    }

}

 document.querySelector("#uno").addEventListener("click",function(){activar("#mover1",eso) });
document.querySelector("#dos").addEventListener("click",function(){activar2("#mover1",eso) });
document.querySelector("#uno").addEventListener("click",function(){activar("#mover2",eso2) });
document.querySelector("#dos").addEventListener("click",function(){activar2("#mover2",eso2) });
