let number
//URL de la API
function generarAleatorios(){
    for(i=0;i<=11;i++){
        number = Math.floor((Math.random() * 200) + 1); 
        let API = "https://pokeapi.co/api/v2/pokemon/"+number;
        getData (API)

    }

}

//Resultado API
function getData(api)  {       
    return fetch(api)
        .then((response) => response.json())
        .then ((json) => {
            console.log(json);
            llenarDatos(json);
           
                })
        .catch((error) => {
            console.log("Error: ",error)
        })
}

const llenarDatos = (data) =>{
   
    console.log(data.name)
    console.log(data.weight)
    console.log(data.sprites.back_default)
    let html = '';
  
        html += '<div class="col p-2">'
        html += '<div class="card" style="width: 10rem;">'
        html += `<img src="${data.sprites.other.dream_world.front_default}" class="card-img-top p-2" style="height:8vw;"alt="Foto del personaje">`
        html += '<div class="card-body">'
        html += `<h4 class="card-title text-center">${data.name}</h4>`
        html += `<p class="card-text"><b>Height: </b>${data.height}</p>`
        html += `<p class="card-text"><b>Weight:: </b>${data.weight}</p>`
        html += '</div>'
        html += '</div>'
        html += '</div>'
        html += '</div>'
        document.getElementById('datosPersonaje').innerHTML+= html
}


function cargar(){
    location.reload()
    console.log('prueba')
    }