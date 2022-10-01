let sidebar = document.querySelector(".sidebar");
let menucontainerBtn = document.querySelector(".menu-container");
let searchBtn = document.querySelector(".bx-search");
let hamburgermenuBtn = document.querySelector("#nav-icon1");
let myaccountBtn = document.querySelector("#myaccount");
let submenuwrap = document.querySelector(".sub-menu-wrap");
let dropdown = document.querySelector(".bx.bx-chevron-down");
let rating = document.querySelector(".rating");

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
