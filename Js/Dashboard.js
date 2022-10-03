let sidebar = document.querySelector(".sidebar");
let menucontainerBtn = document.querySelector(".menu-container");
let searchBtn = document.querySelector(".bx-search");
let hamburgermenuBtn = document.querySelector("#nav-icon1");
let myaccountBtn = document.querySelector("#myaccount");
let submenuwrap = document.querySelector(".sub-menu-wrap");
let dropdown = document.querySelector(".bx.bx-chevron-down");
let rating = document.querySelector(".rating");
let toggleDarkMode = document.querySelector("#darkmode");
let homecontent = document.querySelector(".home_content");
let body = document.querySelector(".body");
let cardcontainer = document.querySelectorAll(".card-container");


searchBtn.onclick = function () {
    sidebar.classList.toggle("active")
    hamburgermenuBtn.classList.toggle("open")
    rating.classList.toggle("active")
}
hamburgermenuBtn.onclick = function () {
    sidebar.classList.toggle("active")
    hamburgermenuBtn.classList.toggle("open")
    rating.classList.toggle("active")

}
myaccountBtn.onclick = function () {
    submenuwrap.classList.toggle("active")
    rating.classList.toggle("open")
}

toggleDarkMode.onclick = function () {
    body.classList.toggle("drkmode");
    sidebar.classList.toggle("drkmode")
    hamburgermenuBtn.classList.toggle("drkmode")
    homecontent.classList.toggle("drkmode")
    for (var i = 0; i < cardcontainer.length; i++) {
        cardcontainer[i].classList.toggle('drkmode');
    }
}