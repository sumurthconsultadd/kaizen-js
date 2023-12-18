function validateForm() {
  clearErrors();
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let phoneRegex = /^[0-9]{10}$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegex = /^.{8,}$/;

  if (!phoneRegex.test(phone)) {
    displayError("phoneError");
  }

  if (!emailRegex.test(email)) {
    displayError("emailError");
  }

  if (!passwordRegex.test(password)) {
    displayError("passwordError");
  }
}

function displayError(errorId) {
  document.getElementById(errorId).style.display = "block";
}

function clearErrors() {
  let errors = document.getElementsByClassName("error");
  for (let i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }
}
