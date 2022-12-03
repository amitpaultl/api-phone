
document.getElementById('search').addEventListener('click', function(){
  lodeData(10);
    // searcatext.value = ' '
    
    
})

const phoneLoad = async(searchText, datalimit)=>{
    
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    dispalyPhone(data.data, datalimit);
    
}

const dispalyPhone = (data, datalimit) =>{
    
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = ' ';

    // slice
    const showall = document.getElementById('show');
    if(datalimit && data.length > 10){
      data = data.slice(0,10)
      
      showall.classList.remove('d-none');
    }else{
      showall.classList.add('d-none');
    }
    
    document.getElementById('all-display').addEventListener('click', function(){

    })


    // no fount

      const noDispaly = document.getElementById('no-sreust');
      if(data.length === 0){
        noDispaly.classList.remove('d-none');
        
      }else{
        noDispaly.classList.add('d-none');
      }
      
   


  


    data.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            
              <div class="card">
                <img src=${element.image} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.brand}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <button  onclick="lodeDitals('${element.slug}')" type="button" class="btn btn-primary"           data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Ditals
                </button>
              </div>
            
        `
        phoneContainer.appendChild(div)
    });
    loding(false); 
}

const loding = displayLoding =>{
  const lodid = document.getElementById('loding');
  if(displayLoding){
    lodid.classList.remove('d-none');
  }else{
    lodid.classList.add('d-none');
  }
}

  // lodadata

  const lodeData =(datalimit) => {
    loding(true);
    const searcatext = document.getElementById('search-input');
    const searchText =searcatext.value;
    phoneLoad(searchText, datalimit);
  }

   // all view
    document.getElementById('all-display').addEventListener('click', function(){
      lodeData();
    })
    // Enter key
    var input = document.getElementById("search-input");
    input.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        document.getElementById("search").click();
      }
    });
    // lodeDitales id
    

    const lodeDitals = async(id) =>{
      const url = `https://openapi.programming-hero.com/api/phone/${id}`
      const res = await fetch(url);
      const data = await res.json();
      const modal = document.getElementById('exampleModalLabel');
      modal.innerText = data.data.name
      const Stroses = document.getElementById('Stroses');
      const Sses = data.data.mainFeatures.sensors
      Sses.forEach(element => {
        const li = document.createElement('span');
        li.innerText = element + ', '
        Stroses.appendChild(li);
      });

    console.log(data.data);

    }

phoneLoad('apple')