const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 60){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});
const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
