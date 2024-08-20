function checkUsername() {
  let username = document.getElementById("usernameBox");
  let usernameText = username.value;
}
function checkPassword() {
  let password = document.getElementById("passwordBox");
  let passwordText = password.value;
  if (passwordText == "cruffin") {
    return true;
  } else {
    alert("Incorrect password! Try again");
    return false;
  }
}
