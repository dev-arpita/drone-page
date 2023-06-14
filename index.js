// javascript
const getEl = (element) => document.querySelector(element)
const menuBtn = getEl(".menu-btn");
const nav = getEl("nav")
const exitBtn = getEl(".exit-btn")
menuBtn.addEventListener("click", ()=> {
    nav.classList.add("open-nav");

})
exitBtn.addEventListener("click", ()=> {
    nav.classList.remove("open-nav");
})
