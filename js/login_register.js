const form      = document.getElementById("myForm"),
      createPw  = document.querySelector("#create_pw"),
      confirmPw = document.querySelector("#confirm_pw"),
      loginPw   = document.querySelector("#login_pw")
      pwShow    = document.querySelector(".toggle-password"),
      alertIcon = document.querySelector(".error"),
      alertText = document.querySelector(".text"),
      alertAll  = document.querySelector(".alert"),
      submitBtn = document.querySelector("#regis-submit-btn");
//Hide/show password
  // Register Form
pwShow.addEventListener("click", () => {
  if ((createPw.type === "password") && (confirmPw.type === "password")) {
    createPw.type = "text";
    confirmPw.type = "text";
    pwShow.classList.replace("fa-eye-slash","fa-eye");
  } else {
    createPw.type = "password";
    confirmPw.type = "password";
    pwShow.classList.replace("fa-eye","fa-eye-slash");
  }
});
  // Login Form
pwShow.addEventListener("click", () => {
  if ((loginPw.type === "password")) {
    loginPw.type = "text";
    pwShow.classList.replace("fa-eye-slash","fa-eye");
  } else {
    loginPw.type = "password";
    pwShow.classList.replace("fa-eye","fa-eye-slash");
  }
});
//Check input password at least 8 character
createPw.addEventListener("input", () => {
  let val = createPw.value.trim()
  if (val.length >= 8) {
    confirmPw.removeAttribute("disabled");
    submitBtn.removeAttribute("disabled");
    submitBtn.classList.add("active");
    alertAll.style.display = "none";
  } else {
    confirmPw.setAttribute("disabled", true);
    submitBtn.setAttribute("disabled", true);
    submitBtn.classList.remove("active");
    confirmPw.value = "";
    alertText.style.color = "#D93025";
    alertText.innerText = "Nhập ít nhất 8 kí tự";
    alertAll.style.display = "flex";
  }
});

//Check if createpw and confirmpw are the same
const password = form.password;
const confirmPassword = form.passwordAgain;
const feedback = document.getElementsByClassName("alert");
let isPasswordMatch = false;
confirmPassword.addEventListener("input", () => {
  if (password.value != confirmPassword.value) {
    alertText.innerText = "Mật khẩu xác nhận chưa chính xác!";
    alertAll.style.display = "flex";
    isPasswordMatch = false;
  } else {
    feedback.innerHTML = "";
    alertAll.style.display = "none";
    isPasswordMatch = true;
  }
});
