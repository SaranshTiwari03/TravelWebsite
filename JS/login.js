async function login(){
    let uname = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    let aftertrimuname = uname.trim();

     
    let data = await fetch('http://localhost:3000/login');
    let response = await data.json();
    

    let check = response.find(items=> items.email_add === aftertrimuname && items.password === pass && items.role==="planner");
    let check1 = response.find(items=> items.email_add === aftertrimuname && items.password === pass && items.role==="customer");
    let check2 = response.find(items=> items.email_add === aftertrimuname && items.password === pass && items.role==="admin");


    if(check || check1){

        window.location.href="index.html";
    }else if(check2){
        window.location.href="dashboard.html";
    }
    else{
        alert("not exist plz register first");
    }
 return false;
}

