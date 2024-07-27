// Navbar toggle function
let navMenu = document.querySelector(".nav-menu");
let navToggleBtn = document.querySelector(".nav-toggle");
let navItem = document.querySelectorAll(".nav-item")

navToggleBtn.addEventListener("click",()=>{
    navMenu.classList.toggle("show-menu")
    console.log("clicked");
})


navItem.forEach(n =>{
    n.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu")
    })
})