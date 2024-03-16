let storeid;
function del(id){
    storeid=id
    fetch(`http://localhost:3000/login/${storeid}`,{
        method:"DELETE"
    }).then(window.confirm("Are you sure"))
}

function upd(id){
    storeid=id;
    document.getElementById('sturecord').style.display="none";
    document.getElementById('updateform').style.display="block"

}
function updatef(){
    document.getElementById('sturecord').style.display="block";
    document.getElementById('updateform').style.display="none"
}

async function ddata(){
    let data = await fetch('http://localhost:3000/login');
    let response = await data.json();
    
    document.getElementById('sturecord').innerHTML = response.map(items=>`
    <tr> 
        <td> <img style="border-radius:5px;width:70px;height:70px;" src="${items.imgs}"></td>
        <td>${items.names}</td>
        <td>${items.email_add}</td>
        <td>${items.password}</td>
        <td>${items.confirm_pass}</td>
        <td>${items.role}</td>
        <td class="update" onclick="upd(${items.id})">UPDATE</td>
        <td class="delete" onclick="del(${items.id})">DELETE</td>
        </tr>
        `).join(" ")
    }
    async function filterrecord(arg){
        if(arg === 'all'){
    let data = await fetch('http://localhost:3000/login');
    let response = await data.json();
    
    document.getElementById('sturecord').innerHTML = response.map(items=>`
    <tr> 
    <td> <img style="border-radius:5px;width:70px;height:70px;" src="${items.imgs}"></td>
    <td>${items.names}</td>
    <td>${items.email_add}</td>
    <td>${items.password}</td>
    <td>${items.confirm_pass}</td>
    <td>${items.role}</td>
    <td class="update" onclick="upd(${items.id})">UPDATE</td>
    <td class="delete" onclick="del(${items.id})">DELETE</td>
    </tr>
    `).join(" ")
    }
    else if(arg === 'customer'){
    let data = await fetch('http://localhost:3000/login');
    let response = await data.json();
    let filtercus = response.filter(items => items.role === 'customer')
    
    document.getElementById('sturecord').innerHTML = filtercus.map(items=>`
    <tr> 
    <td> <img style="border-radius:5px;width:70px;height:70px;" src="${items.imgs}"></td>
    <td>${items.names}</td>
    <td>${items.email_add}</td>
    <td>${items.password}</td>
    <td>${items.confirm_pass}</td>
    <td>${items.role}</td>
    <td class="update" onclick="upd(${items.id})">UPDATE</td>
    <td class="delete" onclick="del(${items.id})">DELETE</td>
    </tr>
    `).join(" ")
    }
    else if(arg === 'planner'){
    let data = await fetch('http://localhost:3000/login');
    let response = await data.json();
    let filterpla = response.filter(items => items.role === 'planner')
    
    document.getElementById('sturecord').innerHTML = filterpla.map(items=>`
    <tr> 
    <td> <img style="border-radius:5px;width:70px;height:70px;" src="${items.imgs}"></td>
    <td>${items.names}</td>
    <td>${items.email_add}</td>
    <td>${items.password}</td>
    <td>${items.confirm_pass}</td>
    <td>${items.role}</td>
    <td class="update" onclick="upd(${items.id})">UPDATE</td>
    <td class="delete" onclick="del(${items.id})">DELETE</td>
    </tr>
    `).join(" ")
    }
    else{
        alert("invalid click")
    }
}
async function finder(){
       let searchtext = document.getElementById('nam').value;
       let optionsearch = document.getElementById('searchfilter').value;
       let data = await fetch('http://localhost:3000/login');
       let response = await data.json();

       if( optionsearch === "email"){
        let fil = response.filter(items => items.email_add === searchtext);
        document.getElementById('sturecord').innerHTML = fil.map
        (items=>`
        <tr> 
        <td> <img style="border-radius:5px;width:70px;height:70px;" src="${items.imgs}"></td>
        <td>${items.names}</td>
        <td>${items.email_add}</td>
        <td>${items.password}</td>
        <td>${items.confirm_pass}</td>
        <td>${items.role}</td>
        <td class="update" onclick="upd(${items.id})">UPDATE</td>
        <td class="delete" onclick="del(${items.id})">DELETE</td>
        </tr>
        `).join(" ")
       }
       else if( optionsearch === "name"){
        let fil = response.filter(items => items.names === searchtext);
        document.getElementById('sturecord').innerHTML = fil.map
        (items=>`
        <tr> 
        <td> <img style="border-radius:5px;width:70px;height:70px;" src="${items.imgs}"></td>
        <td>${items.names}</td>
        <td>${items.email_add}</td>
        <td>${items.password}</td>
        <td>${items.confirm_pass}</td>
        <td>${items.role}</td>
        <td class="update" onclick="upd(${items.id})">UPDATE</td>
        <td class="delete" onclick="del(${items.id})">DELETE</td>
        </tr>
        `).join(" ")
        
       }
       else if( optionsearch === "role"){
        let fil = response.filter(items => items.role === searchtext);
        document.getElementById('sturecord').innerHTML = fil.map
        (items=>`
        <tr> 
        <td> <img style="border-radius:5px;width:70px;height:70px;" src="${items.imgs}"></td>
        <td>${items.names}</td>
        <td>${items.email_add}</td>
        <td>${items.password}</td>
        <td>${items.confirm_pass}</td>
        <td>${items.role}</td>
        <td class="update" onclick="upd(${items.id})">UPDATE</td>
        <td class="delete" onclick="del(${items.id})">DELETE</td>
        </tr>
        `).join(" ")
        
       }

       else if(optionsearch === "nothing"){
        alert("please select option")
       }
    }