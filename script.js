let hamburgerBtn = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");



hamburgerBtn.addEventListener("click",function(){
    menu.classList.toggle("active")
    if(menu.classList.contains("active")){
    hamburgerBtn.setAttribute("src","assets/shared/icon-close.svg")
    }else{
        
    hamburgerBtn.setAttribute("src","assets/shared/icon-hamburger.svg")
    }
})