
let icon = document.getElementById("icon");
let nav = document.getElementById("nav");
icon.addEventListener("click", () =>{
    nav.classList.toggle("active");
})

let alertShow = false;

setInterval(() => {
    document.title =
    alertShow ? "bienvenue dans le site"
                : "Naruto";

        alertShow = !alertShow;
}, 1000);