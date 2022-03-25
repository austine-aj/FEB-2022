function login(){
    event.preventDefault();
    var users=JSON.parse(localStorage.getItem("users"));

    //var username = document.getElementById("username").value;
     var email = document.getElementById("emailId").value;
     var password = document.getElementById("password").value;
     var ind=-1;
     for(var i=0 ; i<users.length ; i++){
        if(users[i].email===email){
            ind = i;
            };
        }
    
        if(ind === -1){
            document.getElementById("error").innerHTML="invalid emailId";
        }else if(users[ind].email === email && users[ind].password === password){
            localStorage.setItem('currentUser',JSON.stringify(users[ind]))
            location.replace("../dashboard/dash.html")
        }else if(users[ind].password != password){
            document.getElementById("error").innerHTML="invalid Password";
        }


     
     
        

}