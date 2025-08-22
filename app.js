import UserAuth from "./userAuth.js";

let user = new UserAuth();

let btnLogin = document.getElementById("btnLogin");
let btnLogout = document.getElementById("btnLogout");
let btnSignup = document.getElementById("btnSignup");

if (btnLogin) {
  btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    let loggedIn = user.login(username.value.trim(), password.value.trim());

    if (loggedIn) {
      window.location.href = "profile.html";
    } else {
      window.location.href = "login.html";
    }

    return false;
  });
}

if (btnSignup) {
  btnSignup.addEventListener("click", (e) => {
    e.preventDefault();

    user.signup(
      email.value.trim(),
      username.value.trim(),
      password.value.trim()
    );

    window.location.href = "login.html";

    return false;
  });
}

if (btnLogout) {
  btnLogout.addEventListener("click", () => {
    let data = localStorage.getItem("user");

    user.signout();
    window.location.href = "login.html";
    return false;
  });
}

if (window.location.href.includes("profile.html")) {
  user.getProfile();
}
