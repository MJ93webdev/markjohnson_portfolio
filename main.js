// ************============ NAVBAR ===============*****************

const navOpen = document.querySelector(".btn-open")
const navClose = document.querySelector(".btn-close")
const nav = document.querySelector(".nav--primary");

navOpen.addEventListener("click", ()=>{

        nav.setAttribute("data-visible","true")

})
navClose.addEventListener("click", ()=>{

        nav.setAttribute("data-visible","closing")
        nav.addEventListener("animationend",()=>{
            nav.setAttribute("data-visible","false")
        } , {once:true})
    
})
