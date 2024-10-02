let email = document.getElementById("email");
let container = document.querySelector(".containerBlock");
let signUp = document.querySelector(".signUp");
let emailError = document.getElementById("emailError");
let form = document.querySelector("form");
let dismissButton = document.getElementById("dismissButton");
let sub = document.getElementById("subButton");

form.addEventListener("submit", (e) => {
  if (email.validity.typeMismatch) {
    e.preventDefault();
    email.style.backgroundColor = "rgba(255, 87, 115, 0.1)";
    email.style.color = "rgba(255, 87, 115, 0.9)";
    email.style.border = "1px solid rgba(255, 87, 115, 0.8)";
    emailError.style.display = "block";
    container.style.display = "flex";
    signUp.style.display = "none";
  } else {
    e.preventDefault();
    email.style.backgroundColor = "white";
    emailError.style.display = "none";
    container.style.display = "none";
    signUp.style.display = "block";
  }
});

dismissButton.addEventListener("click", function() {
  container.style.display = "flex";
  signUp.style.display = "none";
});

email.addEventListener("input", () => {
  if (email.value === "") {
    sub.disabled = true;
    sub.classList.add("disabled-hover");
  } else {
    sub.disabled = false;
    sub.classList.remove("disabled-hover");
  }
});


if (email.value === "") {
  sub.disabled = true;
  sub.classList.add("disabled-hover");
}