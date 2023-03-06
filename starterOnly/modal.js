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
const formReserve = document.getElementById("reserve");
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
  formReserve.reset();
}

document.querySelector(".btn-send").addEventListener("click", submitForm);

function submitForm(){
  //formReserve.submit();
  HTMLFormElement.prototype.submit.call(formReserve);
}

function validateMessage() {
  document.getElementById("validation-message").style.display = "block";
  formReserve.style.display = "none";
}

// Submit form
document.querySelector(".btn-submit").addEventListener("click", validateForm);

// Check inputs
function validateForm(event) {
  event.preventDefault();
  event.stopPropagation();
  const conditions = [
    validateFirstName(),
    validateLastName(),
    validateEmail(),
    validateNumber(),
    getAge(),
    validateCity(),
    validateConditions()
  ]
  if (
    conditions.filter((cond) => !cond).length
    ) {
      console.log("form invalid")
      return false;
    }
    validateMessage();
  }
 
  // Validate first name
  function validateFirstName() {
    const regexFirstName = /^[A-Z a-z]{2,25}$/;
    const parent = firstName.parentNode;
    
    if (firstName.value == "" || !regexFirstName.test(firstName.value)) {
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
    const parent = lastName.parentNode;
    
    if (lastName.value == "" || !regexLastName.test(lastName.value)) {
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
      parent.setAttribute("data-error", "Veuillez saisir une adresse e-mail valide.");
      parent.setAttribute("data-error-visible", "true");
      return false;
    }
    parent.setAttribute("data-error-visible", "false");
    return true;
  }
  
  // Validate date of birth
  function getAge() {
    const today = new Date();
    const selectedDate = new Date(birthDate.value);
    const parent = birthDate.parentNode;
    
    today.setFullYear(today.getFullYear() - 18);
    
    if (selectedDate > today) {  
      parent.setAttribute("data-error", "Vous devez avoir au moins 18 ans.");
      parent.setAttribute("data-error-visible", "true");
      return false;
      
    } else if (birthDate.value == null || birthDate.value == "") {
      parent.setAttribute("data-error", "Vous devez renseigner une date de naissance.");
      parent.setAttribute("data-error-visible", "true");
      return false;
      
    } else {
      parent.setAttribute("data-error-visible", "false");
      return true;
    }   
  }
  
  // Validate number of tournaments
  function validateNumber() {
    const quantityTournament = document.querySelector("input[name='quantity']");
    const parent = document
    .querySelector(`input[name='quantity']`)
    .closest('.formData');
    if (quantityTournament.value == "" || null) {
      quantity.focus();
      parent.setAttribute("data-error", "Vous devez entrer un nombre.");
      parent.setAttribute("data-error-visible", "true");
      return false;
    }
    parent.setAttribute("data-error-visible", "false");
    return true;
  }
  
  // Validate city (input type radio)
  function validateCity() {
    const checkedRadio = document.querySelector("input[name='location']:checked");
    const parent = document.querySelector("input[name='location']").closest(".formData");
    
    if (checkedRadio != null) {
      parent.setAttribute("data-error-visible", "false");
      return true;
    }
    parent.setAttribute("data-error", "Vous devez choisir une option.");
    parent.setAttribute("data-error-visible", "true");
    return false;
  }

  // Validate terms and conditions (input type checkbox)
  function validateConditions() {
    const checkedCheckbox = document.querySelector("input[name='checkbox1']:checked");
    const parent = document.querySelector("input[name='checkbox1']").closest(".formData");

    if (checkedCheckbox != null) {
      parent.setAttribute("data-error-visible", "false");
      return true;
    }
    parent.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");
    parent.setAttribute("data-error-visible", "true");
    return false;
  }