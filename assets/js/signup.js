// DOM Elements
const formElement = document.getElementById("signupForm");
const firstName = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const address = document.getElementById("address");
const signupBtn = document.getElementById("signup");

const maxLength = 250;
const warnLength = 10;
const charCount = document.getElementById("charCount");
charCount.textContent = `${maxLength}/${maxLength}`;



signupBtn.addEventListener("click", validateForm);

address.addEventListener("input", function () {
  const remainingChars = maxLength - address.value.length;

  if (remainingChars <= warnLength) {
    charCount.classList.add("text-danger");
  } else {
    charCount.classList.remove("text-danger");
  }
  if (remainingChars <= 0) {
    address.value = address.value.slice(0, maxLength);
  }

  charCount.textContent = `${Math.max(remainingChars, 0)}/${maxLength}`;
});
