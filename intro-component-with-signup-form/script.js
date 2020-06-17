const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const formControl = document.querySelectorAll(".form-control");

function addErrorTo(field, message) {
  const errorElementAdd = field.parentNode;
  //console.log(errorElementAdd);

  errorElementAdd.classList.add("error");

  const emailPlaceholder = document.getElementsByName("Email")[0];
  emailPlaceholder.value = "";
  emailPlaceholder.placeholder = "email@example.com";

  const errorText = errorElementAdd.querySelector("p");
  errorText.innerText = message;
  errorText.style.opacity = "1";
  formControl.forEach((item) => (item.style.marginBottom = "40px"));
}

function removeError(field) {
  const errorElementRemove = field.parentNode;
  errorElementRemove.classList.remove("error");

  const removeText = errorElementRemove.querySelector("p");
  removeText.style.opacity = "0";
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  if (firstNameValue === "") {
    addErrorTo(firstName, "First Name cannot be empty");
  } else {
    removeError(firstName);
  }

  if (lastNameValue === "") {
    addErrorTo(lastName, "Last Name cannot be empty");
  } else {
    removeError(lastName);
  }

  if (emailValue === "") {
    addErrorTo(email, "Email Address cannot be empty");
  } else if (!validateEmail(emailValue)) {
    addErrorTo(email, "Looks like this is not an email");
  } else {
    removeError(email);
  }

  if (passwordValue === "") {
    addErrorTo(password, "Password cannot be empty");
  } else if (passwordValue.length < 6) {
    addErrorTo(password, "Password have to be minimum six characters");
  } else {
    removeError(password);
  }
});
