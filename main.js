formId.onsubmit = () => {
  if (passwordFunction() && ageFunction()) {
    return true;
  }

  return false;
};

function ageFunction() {
  if (ageInput.value < 18) {
    ageLable.innerText += "*";
    ageLable.style.color = "red";
    return false;
  }

  return true;
}

function passwordFunction() {
  if (passwordInput.value == password2Input.value) {
    return true;
  }
  passwordLable.innerText += "*";
  passwordLable2.innerText += "*";
  passwordLable.style.color = "red";
  passwordLable2.style.color = "red";
  megOfError.innerText = "סיסמא ואימות סיסמא אינם תואמים";

  return false;
}
