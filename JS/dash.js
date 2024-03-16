
      
        async function dashboarddata(){
            let data= await fetch("http://localhost:3000/login");
         let response= await data.json();

         document.getElementById('all').innerHTML=response.length;
         let stufilter=response.filter(items=>items.role==="planner");
         
         document.getElementById('pla').innerHTML= stufilter.length;
         let teafilter=response.filter(items=>items.role==="customer");
         document.getElementById('cust').innerHTML= teafilter.length;

         

        }

       
        