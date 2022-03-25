var currentUser = JSON.parse(localStorage.getItem('currentUser'))
document.getElementById("dash").innerHTML="Welcome  "  + currentUser.username;
