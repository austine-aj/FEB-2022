var currentUser = JSON.parse(localStorage.getItem('currentUser'))
document.getElementById("dash").innerHTML = "Welcome  " + currentUser.username;

function redirect() {
    if (user === null) {
        location.replace("../login/login.html")
    }
}

replace();

document.getElementById("dash").innerHTML = "Welcome  " + currentUser.username;

function logout() {
    localStorage.removeItem("currentUser");
    location.replace("../login/login.html")
}