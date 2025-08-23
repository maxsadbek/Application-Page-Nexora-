let btn = document.getElementById("menuBtn");
let menu = document.getElementById("sideMenu");
let CloseBtn = document.querySelector("#close");
let dropdown1Btn = document.querySelector("#dropdown1");
let dropdown2Box = document.querySelector("#dropdown2");

// dropdown
dropdown1Btn.addEventListener("click", () => {
  dropdown2Box.classList.toggle("open");
});



// close bosilganda yopiladi
CloseBtn.addEventListener("click", () => {
  menu.classList.remove("open");
});


btn.addEventListener("click", () => {
  menu.classList.toggle("open");
});
