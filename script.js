// Select form elements
const form = document.getElementById('signup-form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit-button');

// Select error message elements
const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

// Select error icon elements
const firstNameIcon = document.getElementById('first-name-icon');
const lastNameIcon = document.getElementById('last-name-icon');
const emailIcon = document.getElementById('email-icon');
const passwordIcon = document.getElementById('password-icon');

// Add event listener to the submit button
submitButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent form submission
  validateForm();
});

// Validation function
function validateForm() {
  let isValid = true;

  // Validate first name
  if (firstNameInput.value.trim() === '') {
    showError(firstNameInput, firstNameError, 'First Name cannot be empty', firstNameIcon);
    isValid = false;
  } else {
    clearError(firstNameInput, firstNameError, firstNameIcon);
  }

  // Validate last name
  if (lastNameInput.value.trim() === '') {
    showError(lastNameInput, lastNameError, 'Last Name cannot be empty', lastNameIcon);
    isValid = false;
  } else {
    clearError(lastNameInput, lastNameError, lastNameIcon);
  }

  // Validate email
  if (emailInput.value.trim() === '') {
    showError(emailInput, emailError, 'Email Address cannot be empty', emailIcon);
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    showError(emailInput, emailError, 'Looks like this is not an email', emailIcon);
    isValid = false;
  } else {
    clearError(emailInput, emailError, emailIcon);
  }

  // Validate password
  if (passwordInput.value.trim() === '') {
    showError(passwordInput, passwordError, 'Password cannot be empty', passwordIcon);
    isValid = false;
  } else if (passwordInput.value.length < 6) {
    showError(passwordInput, passwordError, 'Password must be at least 6 characters long', passwordIcon);
    isValid = false;
  } else {
    clearError(passwordInput, passwordError, passwordIcon);
  }

  // If form is valid, show a success message
  if (isValid) {
    showSuccessMessage();
    form.reset(); // Reset the form
  }
}

// Helper function to show error
function showError(inputElement, errorElement, message, iconElement) {
  inputElement.classList.add('error'); // Add 'error' class to input for red border
  errorElement.textContent = message; // Display error message
  iconElement.classList.add('visible'); // Make the error icon visible
}

// Helper function to clear error
function clearError(inputElement, errorElement, iconElement) {
  inputElement.classList.remove('error'); // Remove 'error' class to reset border color
  errorElement.textContent = ''; // Clear error message
  iconElement.classList.remove('visible'); // Hide the error icon
}

// Helper function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
  return emailRegex.test(email);
}

// Function to show success message after successful form submission
function showSuccessMessage() {
  const successMessage = document.createElement('p');
  successMessage.textContent = 'Form submitted successfully!';
  successMessage.style.color = 'green';
  successMessage.style.fontWeight = '600';
  successMessage.style.textAlign = 'center';
  successMessage.style.marginTop = '20px'; // Ensure it’s not directly attached to the form

  // Append success message to form or another section
  form.appendChild(successMessage);  // Append to the end of the form
  setTimeout(() => {
    successMessage.remove(); // Remove success message after 3 seconds
  }, 3000);
}
