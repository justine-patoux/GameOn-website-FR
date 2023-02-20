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
const form = document.getElementById("reserve");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.getElementById("location");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
closeBtn.addEventListener("click", closeModal);

//Close modal form and reset datas
function closeModal() {
  modalbg.style.display = "none";
  form.reset();
}

// Submit form
document.querySelector(".btn-submit").addEventListener("click", validateForm);

// Validate form
function validateForm(event) {
  event.preventDefault();
  event.stopPropagation();
  const conditions = [
    validateFirstName(),
    validateLastName(),
    validateEmail()
  ]
  if (
    conditions.filter((cond) => !cond).length
  ) {
    return;
  }
}

// Validate first name
function validateFirstName() {
  const regexFirstName = /^[A-Z a-z]{2,25}$/;
  const parent = document.getElementById("first").parentNode;
  if (firstName.value == "" || !regexFirstName.test(firstName.value)) {
    firstName.focus();
    parent.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    parent.setAttribute("data-error-visible", "true");
    return false;
  }
  parent.setAttribute("data-error-visible", "false");
  return true;
}

// Validate last name
function validateLastName() {
  const regexLastName = /^[A-Z a-z]{2,25}$/;
  const parent = document.getElementById("last").parentNode;
  if (lastName.value == "" || !regexLastName.test(lastName.value)) {
    lastName.focus();
    parent.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    parent.setAttribute("data-error-visible", "true");
    return false;
  }
  parent.setAttribute("data-error-visible", "false");
  return true;
}

// Validate email
function validateEmail() {
  const regexEmail =
    /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
  const parent = document.getElementById("email").parentNode;
  if (email.value == "" || !regexEmail.test(email.value)) {
    email.focus();
    parent.setAttribute("data-error", "Veuillez entrez une adresse e-mail valide.");
    parent.setAttribute("data-error-visible", "true");
    return false;
  }
  parent.setAttribute("data-error-visible", "false");
  return true;
}