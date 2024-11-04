let userName = document.getElementById('user_name');
let emailUser = document.getElementById('email');
let passWordUser = document.getElementById('password');
let btnRegister = document.getElementById('sign_up');

btnRegister.addEventListener("click", function (e) {
    e.preventDefault()
    if (userName.value === "" || emailUser.value === "" || passWordUser.value === "") {
        alert("please fill all feild")
    } else {
        localStorage.setItem("userName", userName.value);
        localStorage.setItem("emailUser", emailUser.value);
        localStorage.setItem("passWordUser", passWordUser.value);
        setTimeout(() => {
            window.location = "login.html"
        }, 1000);
    }
})