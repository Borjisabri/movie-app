//log-sign-in pages
//password icon
const passwordShowing = () => {
    let showPassword = document.getElementById("show-password");
    let password = document.getElementById("passwordd");
    if (password.type === "password") {
      password.type = "text";
      showPassword.className = "fa-regular fa-eye";
    } else {
      password.type = "password";
      showPassword.className = "fa-regular fa-eye-slash";
    }
  };