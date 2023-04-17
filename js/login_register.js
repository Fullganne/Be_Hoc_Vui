const createPw = document.querySelector("#create_pw"),
  confirmPw = document.querySelector("#confirm_pw"),
  loginPw = document.querySelector("#login_pw")
  pwShow = document.querySelector(".toggle-password"),
  alertIcon = document.querySelector(".error"),
  alertText= document.querySelector(".text"),
  submitBtn = document.querySelector(".submit-btn");
// Register Form
  //Hide/show password
pwShow.addEventListener("click", ()=>{
  if((createPw.type === "password") && (confirmPw.type === "password")){
    createPw.type = "text";
    confirmPw.type = "text";
    pwShow.classList.replace("fa-eye-slash","fa-eye");
  }else {
    createPw.type = "password";
    confirmPw.type = "password";
    pwShow.classList.replace("fa-eye","fa-eye-slash");
  }
});
createPw.addEventListener("input", ()=>{
  let val = createPw.value.trim()
  if(val.length >= 8){
    confirmPw.removeAttribute("disabled");
    submitBtn.removeAttribute("disabled");
    submitBtn.classList.add("active");
    document.querySelector(".alert").style.display = "none";
  }else {
    confirmPw.setAttribute("disabled", true);
    submitBtn.setAttribute("disabled", true);
    submitBtn.classList.remove("active");
    confirmPw.value = "";
    alertText.style.color = "#D93025";
    alertText.innerText = "Nhập ít nhất 8 kí tự";
    document.querySelector(".alert").style.display = "flex";
  }
});
submitBtn.addEventListener("click", ()=>{
  if(createPw.value === confirmPw.value){
    alertText.innerText = "Password matched";
    alertIcon.style.display = "none";
    alertText.style.color = "#4070F4";
  }else {
    alertText.innerText = "Password didn't matched";
    alertIcon.style.display = "block";
    alertText.style.color = "#D93025";
  }
});
// Login Form
pwShow.addEventListener("click", ()=>{
  if((loginPw.type === "password")){
    loginPw.type = "text";
    pwShow.classList.replace("fa-eye-slash","fa-eye");
  }else {
    loginPw.type = "password";
    pwShow.classList.replace("fa-eye","fa-eye-slash");
  }
});