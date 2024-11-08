/**
 * JS for dynamic form validation exercise
 */

"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * Sets up necessary functionality when page loads
   */
  function init() {
    // Add event listener to form submit button
    let form = id("myForm");
    form.addEventListener("submit", validateForm);

    // Add event listeners to input fields for real-time validation
    let nameInput = id("name");
    nameInput.addEventListener("input", validateName);

    let emailInput = id("email");
    emailInput.addEventListener("input", validateEmail);

    let passwordInput = id("password");
    passwordInput.addEventListener("input", validatePassword);

    let confirmPasswordInput = id("confirmPassword");
    confirmPasswordInput.addEventListener("input", validateConfirmPassword);
  }

  /**
   * Validates the entire form on submit
   * @param {Event} event - the event that triggered this function
   */
  function validateForm(event) {
    event.preventDefault(); // Prevent form from submitting if there are validation errors

    let isValid = validateName() && validateEmail() && validatePassword() && validateConfirmPassword();
    if (isValid) {
      startCountdown();
    }
  }

  /**
   * Starts a 3-second countdown and displays a success message
   */
  function startCountdown() {
    let countdown = 3;
    let countdownElement = id("countdown");

    let countdownInterval = setInterval(function() {
      countdownElement.textContent = countdown;
      countdown--;

      if (countdown < 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = "Success!";
      }
    }, 1000);
  }

  /**
   * Validates the name field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validateName() {
    let nameInput = id("name");
    let nameError = id("nameError");

    if (nameInput.value.trim() === "") {
      nameError.textContent = "Name is required";
      return false;
    } else {
      nameError.textContent = "";
      return true;
    }
  }

  /**
   * Validates the email field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validateEmail() {
    let emailInput = id("email");
    let emailError = id("emailError");

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Invalid email format";
      return false;
    } else {
      emailError.textContent = "";
      return true;
    }
  }

  /**
   * Validates the password field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validatePassword() {
    let passwordInput = id("password");
    let passwordError = id("passwordError");

    if (passwordInput.value.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters long";
      return false;
    } else {
      passwordError.textContent = "";
      return true;
    }
  }

  /**
   * Validates the confirm password field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validateConfirmPassword() {
    let passwordInput = id("password");
    let confirmPasswordInput = id("confirmPassword");
    let confirmPasswordError = id("confirmPasswordError");

    if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordError.textContent = "Passwords do not match";
      return false;
    } else {
      confirmPasswordError.textContent = "";
      return true;
    }
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated with selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns a DOM object from the given tag name.
   * @param {string} tagName - the name of the element to be created.
   * @returns {object} - DOM object of the specified tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();