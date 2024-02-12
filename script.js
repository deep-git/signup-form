const submitButton = document.querySelector("#submit_button");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#cpassword");

function comparePasswords() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("* Password does not match");
    } else {
        confirmPassword.setCustomValidity("");
    }
}
