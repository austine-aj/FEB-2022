if(localStorage.getItem('users')==null)
  {
    localStorage.setItem('users',JSON.stringify([]));
  }
function registerUser(){
    event.preventDefault(); //preventing default execution of this func//
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var emailId = document.getElementById("emailId").value;
    
    var user={
        username: username,
        password: password,
        email:emailId
    }
    console.log(user);

    var users = JSON.parse(localStorage.getItem('users'));
    console.log(users)
    users.push(user);
    localStorage.setItem('users',JSON.stringify(users))
}