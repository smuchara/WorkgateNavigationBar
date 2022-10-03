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
let messageButton = document.querySelector(".messageButton")
let notificationButton = document.querySelector(".notificationButton")
let notificationMenu = document.querySelector(".notificationMenu")
let notificationMenu2 = document.querySelector(".notificationMenu2")
let lightmodetxt = document.querySelector(".txt2")
let darkmodetxt = document.querySelector(".txt")

searchBtn.onclick = function () {
    sidebar.classList.toggle("active")
    hamburgermenuBtn.classList.toggle("open")
    rating.classList.toggle("active")
}
hamburgermenuBtn.onclick = function () {
    sidebar.classList.toggle("active")
    hamburgermenuBtn.classList.toggle("open")
    rating.classList.toggle("active")
    submenuwrap.classList.remove("active")
    notificationMenu.classList.remove("active")
    notificationMenu2.classList.remove("active")
}
myaccountBtn.onclick = function () {
    submenuwrap.classList.toggle("active")
    notificationMenu.classList.remove("active")
    notificationMenu2.classList.remove("active")
    submenuwrap.classList.replace("close", "active")
}

toggleDarkMode.onclick = function () {
    lightmodetxt.classList.toggle("active")
    darkmodetxt.classList.toggle("active")
    body.classList.toggle("drkmode");
    sidebar.classList.toggle("drkmode")
    hamburgermenuBtn.classList.toggle("drkmode")
    homecontent.classList.toggle("drkmode")
    for (var i = 0; i < cardcontainer.length; i++) {
        cardcontainer[i].classList.toggle('drkmode');
    }
    notificationMenu.classList.toggle("drkmode")
    notificationMenu2.classList.toggle("drkmode")

}
messageButton.onclick = function () {
    notificationMenu.classList.toggle("active")
    submenuwrap.classList.toggle("close")
    notificationMenu2.classList.replace("active", "close")
    submenuwrap.classList.remove("active")
}

notificationButton.onclick = function () {
    notificationMenu2.classList.toggle("active")
    submenuwrap.classList.toggle("close")
    notificationMenu.classList.replace("active", "close")
    notificationMenu2.classList.replace("close", "active")
}

