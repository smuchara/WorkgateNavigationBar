let sidebar = document.querySelector(".sidebar");
let menucontainerBtn = document.querySelector(".menu-container");
let searchBtn = document.querySelector(".bx-search");
let hamburgermenuBtn = document.querySelector("#nav-icon1");
let myaccountBtn = document.querySelector("#myaccount");
let submenuwrap = document.querySelector(".sub-menu-wrap");
let dropdown = document.querySelector(".bx.bx-chevron-down");
searchBtn.onclick = function () {
    sidebar.classList.toggle("active")
    hamburgermenuBtn.classList.toggle("open")
}
hamburgermenuBtn.onclick = function () {
    sidebar.classList.toggle("active")
    hamburgermenuBtn.classList.toggle("open")
}
myaccountBtn.onclick = function () {
    submenuwrap.classList.toggle("active")
    dropdown.classList.toggle("active")
}