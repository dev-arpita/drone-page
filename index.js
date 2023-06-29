// javascript
const getEl = (element) => document.querySelector(element)
 menuBtn = getEl(".menu-btn")
 navMenu = getEl(".menu-list")
 exitBtn = getEl(".exit-btn");
menuBtn.addEventListener("click", ()=> {
    // navMenu.classList.add("open-nav");
    navMenu.style.transform = 'translateX(0%)'
})
exitBtn.addEventListener("click", ()=> {
    // navMenu.classList.remove("open-nav");
    navMenu.style.transform = 'translateX(100%)'
})
