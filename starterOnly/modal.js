function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
closeBtn.addEventListener("click", closeModal);

//Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", validate);

let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let email = document.getElementById("email");

function validate() {
  //...
}