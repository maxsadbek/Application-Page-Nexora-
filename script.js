let btn = document.getElementById("menuBtn");
let menu = document.getElementById("sideMenu");
let CloseBtn = document.querySelector("#close")

CloseBtn.addEventListener("click", () => {
    menu.classList.remove("open");
})
btn.addEventListener("click", () => {
  menu.classList.toggle("open");
});
