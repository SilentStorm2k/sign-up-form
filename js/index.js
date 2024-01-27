const pw = document.querySelector("#password");
const pw2 = document.querySelector("#confirm-password");
const submit = document.querySelector(".content>button:first-child");

pw2.setCustomValidity("Passwords must match");

pw2.onkeyup = (event) => {
    console.log(pw2.classList)
    if (pw2.value === pw.value) {
        pw2.setCustomValidity("");
    }
    else {
        pw2.setCustomValidity("Passwords must match");
    }
}
