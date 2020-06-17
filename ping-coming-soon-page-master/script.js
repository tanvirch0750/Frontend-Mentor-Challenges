const form = document.getElementById('form');
const email = document.getElementById('email');
const errMessage = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  //  check for email validation
  const emailValue = email.value;

  if (!emailValue) {
    email.classList.add('error');
    errMessage.innerText = "Email field cannot be empty";
    errMessage.style.display = "inline-block";

  } else if (!validateEmail(emailValue)) {
    email.classList.add('error');
    errMessage.innerText = "Please provide a valid email address";
    errMessage.style.display = "inline-block";

  } else {
    email.classList.remove('error');
    errMessage.innerText = "";
    errMessage.style.display = "none";
  }

});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}