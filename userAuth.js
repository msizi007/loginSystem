export default class UserAuth {
  constructor() {}
  signup(email, username, password) {
    let newUser = {
      id: 1,
      email: email,
      username: username,
      password: password,
      loggedIn: false,
      createdAt: new Date(),
    };

    localStorage.setItem("user", JSON.stringify(newUser));
    alert("User created sccessfully!");
    return true;
  }

  login(myname, mypassword) {
    let dbUser = JSON.parse(localStorage.getItem("user"));
    console.log(dbUser.username, dbUser.password);
    if (dbUser.username === myname && dbUser.password === mypassword) {
      alert(`Welcome back ${dbUser.username}`);
      dbUser.loggedIn = true;

      // save the data updated => user has logged in
      localStorage.setItem("user", JSON.stringify(dbUser));
      return true;
    }
    validation.style.display = "block";
    validation.textContent = "Invalid username or password";
    return false;
  }

  getProfile() {
    let user = JSON.parse(localStorage.getItem("user"));

    profileIcon.textContent = user.username.charAt(0).toUpperCase();
    username.textContent = user.username;

    email.textContent = `Email: ${user.email}`;

    btnLogout.addEventListener("click", () => {
      this.signout();
      window.location.href = "login.html";
    });

    // let res = JSON.parse(localStorage.getItem("user"));
    return false;
  }

  signout() {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user.loggedIn) {
      user.loggedIn = false;
      localStorage.setItem("user", JSON.stringify(user));
      alert("User has successfully been logged out...");
    }
    return;
  }
}
