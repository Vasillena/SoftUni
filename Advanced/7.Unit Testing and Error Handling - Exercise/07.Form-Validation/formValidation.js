function validate() {
  const companyField = document.getElementById("companyInfo");
  const companyCheck = document.getElementById("company");
  const form = document.getElementById("registerForm");

  companyCheck.addEventListener("change", () => {
    if (companyCheck.checked) {
      companyField.style.display = "block";
    } else {
      companyField.style.display = "none";
    }
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userNameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const rePasswordInput = document.getElementById("confirm-password");
    const companyNumberInput = document.getElementById("companyNumber");
    const validField = document.getElementById("valid");

    const usernamePattern = /^[a-zA-Z0-9]+$/;
    const passwordPattern = /^[\w]+$/;
    const emailPattern = /.*@.*\..*/;

    let usernameIsValid = false;
    let passIsValid = false;
    let rePassIsValid = false;
    let emailIsValid = false;
    let companyNumberIsValid = false;

    if (
      usernamePattern.test(userNameInput.value) &&
      userNameInput.value.length >= 3 &&
      userNameInput.value.length <= 20
    ) {
      usernameIsValid = true;
    }
    if (emailPattern.test(emailInput.value)) {
      emailIsValid = true;
    }
    if (
      passwordPattern.test(passwordInput.value) &&
      passwordInput.value.length >= 5 &&
      passwordInput.value.length <= 15 &&
      passwordInput.value === rePasswordInput.value
    ) {
      passIsValid = true;
      rePassIsValid = true;
    }
    if (companyCheck.checked) {
      if (
        companyNumberInput.value >= 1000 &&
        companyNumberInput.value <= 9999
      ) {
        companyNumberIsValid = true;
      }
    } else {
      companyNumberIsValid = true;
    }
    if (
      usernameIsValid &&
      passIsValid &&
      rePassIsValid &&
      emailIsValid &&
      companyNumberIsValid
    ) {
      validField.style.display = "block";
    } else {
      validField.style.display = "none";
    }
    if (!usernameIsValid) {
      userNameInput.style.borderColor = "red";
    } else {
      userNameInput.style.border = "none";
    }
    if (!passIsValid) {
      passwordInput.style.borderColor = "red";
    } else {
      passwordInput.style.border = "none";
    }
    if (!rePassIsValid) {
      rePasswordInput.style.borderColor = "red";
    } else {
      rePasswordInput.style.border = "none";
    }
    if (!emailIsValid) {
      emailInput.style.borderColor = "red";
    } else {
      emailInput.style.border = "none";
    }
    if (!companyNumberIsValid) {
      companyNumberInput.style.borderColor = "red";
    } else {
      companyNumberInput.style.border = "none";
    }
  });
}
