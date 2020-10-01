//URL de la API
const API = "https://rickandmortyapi.com/api/character";

//Resultado API
const getData = (api) => {
    return fetch(api)
        .then((response) => response.json())
        .then ((json) => {
            llenarDatos(json), paginacion(json.info);
                })
        .catch((error) => {
            console.log("Error: ",error)
        })
}
const llenarDatos = (data) =>{
    let html = '';
    data.results.forEach((pj) => { 

     
        html += '<div class="col ">'
        html += '<div class="card " style="width: 10rem;">'
        html += `<img src="${pj.image}" class="card-img-top" alt="Foto del personaje">`
        html += '<div class="card-body">'
        html += `<h5 class="card-title">${pj.name}</h5>`
        html += `<p class="card-text">${pj.status}</p>`
        html += `<p class="card-text">${pj.species}</p>`
        html += `<p class="card-text">${pj.gender}</p>`
        html += '</div>'
        html += '</div>'
        html += '</div>'
        html += '</div>'
    })

    document.getElementById('datosPersonaje').innerHTML= html


}

//Ejecutar getData
getData(API);


//Paginación
const paginacion = (info)=>{

 let prevDisabled ="";
 let nextDisabled ="";

if(info.prev == null){
    prevDisabled ="disabled";
}
else {
    prevDisabled ="";
}
if(info.next == null){
    nextDisabled ="disabled";
}
else {
    nextDisabled ="";
}

    let html = '';
    html += ` <li class="page-itemk" ${prevDisabled}><a class="btn btn-dark m-3 page-link" onclick="getData('${info.prev}')">Previous</a></li>`
    html += ` <li class="page-item" ${nextDisabled}><a class="btn btn-dark m-3 page-link" onclick="getData('${info.next}')">Next</a></li>`
    document.getElementById('paginacion').innerHTML=html
}


//https://pokeapi.co/
//https://developer.marvel.com/
