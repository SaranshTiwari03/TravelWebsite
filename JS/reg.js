function insert(){
    let imgs=document.getElementById('imgs').value;
    let name=document.getElementById('uname').value;
    let email=document.getElementById('email').value;
    let pass=document.getElementById('pass').value;
    let cpass=document.getElementById('cpass').value;
    let role=document.getElementById('role').value
    
        let dat={
            names:name,
            email_add:email,
            password:pass,
            confirm_pass:cpass,
            role:role,
            imgs:imgs
         }
         if(role==="planner"|| role==="customer"){
         
         fetch('http://localhost:3000/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json "
            },
            body:JSON.stringify(dat)
         }).then(window.location.href="login.html")        
        }else if(role==="nothing"){
            alert("please select your role");
        }
    
    }