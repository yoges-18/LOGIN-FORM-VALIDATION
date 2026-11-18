document.getElementById("loginform").addEventListener("submit",function (event) {
    event.preventDefault();
    let email=document.getElementById("email").value.trim();
     let password=document.getElementById("password").value.trim();
      let result=document.getElementById("result");
  if(email === ""  || password === ""){
    result.innerText = "Please fill the Email and Password";
    return;
  }
  else if(password.length<7 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) ||!/[0-9]/.test(password)){
    result.innerText ="Please enter valid password";
    return;
  }
   return result.innerText="Login Successfully!"
      

})
