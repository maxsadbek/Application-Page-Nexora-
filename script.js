let btn = document.getElementById("menuBtn");
let menu = document.getElementById("sideMenu");
let CloseBtn = document.querySelector("#close");
let dropdown1Btn = document.querySelector("#dropdown1");
let dropdown2Box = document.querySelector("#dropdown2");
let dropdown3Btn = document.querySelector("#dropdown3");
let dropdown4Box = document.querySelector("#dropdown4");
let dropdown5Btn = document.querySelector("#dropdown5");
let dropdown6Box = document.querySelector("#dropdown6");
let PhoneInput = document.querySelector("#Phone");
let checkIcon = document.querySelector(".Check");
let errorIcon = document.querySelector(".eror");

PhoneInput.addEventListener("input", () => {
  if (!isNaN(PhoneInput.value) && PhoneInput.value !== "") {
    PhoneInput.style.borderColor = "greenyellow";
    checkIcon.style.display = "inline";
    errorIcon.style.display = "none";
  } else {
    PhoneInput.style.borderColor = "red";
    checkIcon.style.display = "none";
    errorIcon.style.display = "inline";
  }
});


dropdown1Btn.addEventListener("click", () => {
  dropdown2Box.classList.toggle("open");
});

dropdown3Btn.addEventListener("click", () => {
  dropdown4Box.classList.toggle("open");
});

dropdown5Btn.addEventListener("click", () => {
  dropdown6Box.classList.toggle("open");
});

CloseBtn.addEventListener("click", () => {
  menu.classList.remove("open");
});


btn.addEventListener("click", () => {
  menu.classList.toggle("open");
});
