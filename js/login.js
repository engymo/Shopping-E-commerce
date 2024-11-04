let userName = document.getElementById('user_name');
let passWordUser = document.getElementById('password');
let btnRegister = document.getElementById('sign_in');

let getuserName = localStorage.getItem('user_name');
let getpassUser = localStorage.getItem('passWordUser');

btnRegister.addEventListener('click', function(e) {
    e.preventDefault();

    if(userName.value ==="" || passWordUser.value === ""){
        alert('input your data')

    }else{
        if(getuserName === userName.value.trim() && getpassUser === passWordUser.value.trim()){
            setTimeout(() => {
                window.location ="index.html"
            }, 1000);
            
        }else(
            setTimeout(() => {
                window.location ="index.html"
            }, 1000)
        )
    }
})




