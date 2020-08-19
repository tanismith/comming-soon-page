const form = document.getElementById("form");
const emailElement = document.getElementById("email");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateEmail(emailElement);
});

function validateEmail(email) {
  const emailText = email.value.trim();

  if (emailText === "") {
    setErrorFor(email, "The field is empty");
  } else if (!isEmail(emailText)) {
    setErrorFor(email, "Please provide a valid Email");
  } else {
    setSuccessFor(email, "We're happy you join us");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control success";
  small.innerText = message;
}

function isEmail(email) {
  const result = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return result.test(email.toLowerCase());
}
