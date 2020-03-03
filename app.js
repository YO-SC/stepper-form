/*
    Made by: YOSC
    Created: 2/25/2020
    Modified: 3/2/2020
*/

// Get elements
let emailSection = document.getElementById("email");
let passwordSection = document.getElementById("password");
let successSection = document.getElementById("success");
let btnBack = document.getElementById("back");
let btnSubmit = document.getElementById("submit");

// Stepper functionality
// Show next element (div)
btnSubmit.addEventListener("click", nextElement);
btnBack.addEventListener("click", previousElement);

function nextElement() {
  // Hide email div and show password div
  if (emailSection.classList.contains("show-section")) {
    hideEmailAndShowPassword();
    showBackButton();
  }
  // Hide password div and show success div
  else if (passwordSection.classList.contains("show-section")) {
    hidePasswordAndShowSuccess();
    showBackButton();
  }
  // Display "Success" state
  else if (successSection.classList.contains("show-section")) {
    showSuccessState();
    hideSubmitButton();
    showBackButton();
  }
}

function previousElement() {
  // Hide password div and show email div
  if (passwordSection.classList.contains("show-section")) {
    hidePasswordAndShowEmail();
    hideBackButton();
  }
  // Hide success div and show password div
  else if (successSection.classList.contains("show-section")) {
    hideSuccessAndShowPassword();
    showBackButton();
    showSubmitButton();
    hideSuccessState();
  }
}

// Next Elements
function hideEmailAndShowPassword() {
  // hide email
  emailSection.classList.remove("show-section");
  emailSection.classList.add("hide-section");
  // show password
  passwordSection.classList.remove("hide-section");
  passwordSection.classList.add("show-section");
}

function hidePasswordAndShowSuccess() {
  // hide password
  passwordSection.classList.remove("show-section");
  passwordSection.classList.add("hide-section");
  // show success
  successSection.classList.remove("hide-section");
  successSection.classList.add("show-section");
  // change submit button text
  btnSubmit.textContent = "Submit";
}

// Previous Elements
function hidePasswordAndShowEmail() {
  // hide password
  passwordSection.classList.remove("show-section");
  passwordSection.classList.add("hide-section");
  // show email
  emailSection.classList.remove("hide-section");
  emailSection.classList.add("show-section");
  // change submit button text
  btnSubmit.textContent = "Next";
}

function hideSuccessAndShowPassword() {
  // hide success
  successSection.classList.remove("show-section");
  successSection.classList.add("hide-section");
  // show password
  passwordSection.classList.remove("hide-section");
  passwordSection.classList.add("show-section");
  // change submit button text
  btnSubmit.textContent = "Next";
}

// Success state
function showSuccessState() {
  document.getElementById("successText").innerHTML =
    "Form Successfully Submitted !";
}

function hideSuccessState() {
  document.getElementById("successText").innerHTML =
    "Time to submit the form. Click the <em>Submit</em> button !";
}

// Back Button
function showBackButton() {
  btnBack.classList.remove("hide-section");
  btnBack.classList.add("show-section");
}

function hideBackButton() {
  btnBack.classList.remove("show-section");
  btnBack.classList.add("hide-section");
}

// Submit Button
function showSubmitButton() {
  btnSubmit.classList.remove("hide-section");
  btnSubmit.classList.add("show-section");
}

function hideSubmitButton() {
  btnSubmit.classList.remove("show-section");
  btnSubmit.classList.add("hide-section");
}
