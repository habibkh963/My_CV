var a,io,iu,iy,ie;
a= document.querySelector('.nav');
io=document.querySelector('#io');
iu=document.querySelector('#iu');
iy=document.querySelector('#iy');
ie=document.querySelector('#ie');
 onscroll=function(){
  let value= this.scrollY;
if(value>=448){
    a.style.display='none';
}else{
    a.style.display='flex';
}

 }
 io.addEventListener('mouseover',strly);
io.addEventListener('mouseleave',strl);
iu.addEventListener('mouseover',strly);
iu.addEventListener('mouseleave',strl);
iy.addEventListener('mouseover',strly);
iy.addEventListener('mouseleave',strl);
ie.addEventListener('mouseover',strly);
ie.addEventListener('mouseleave',strl);

function strly(){
   this.style.color='cyan';
   this.style.transform='translatey(-10px)';
   this.style.transitionDuration='500ms';
   this.style.fontSize='30px';
}
function strl(){
   this.style.color='';
   this.style.transform='translatey(0px)';
   this.style.fontSize='25px';
}
window.onload=()=>{
    io.style.animation='jump 2000ms';
    iu.style.animation='jump 2000ms';
    iu.style.animationDelay='500ms';
    iy.style.animation='jump 2000ms';
    iy.style.animationDelay='1500ms';
    ie.style.animation='jump 2000ms';
    ie.style.animationDelay='2000ms';
}