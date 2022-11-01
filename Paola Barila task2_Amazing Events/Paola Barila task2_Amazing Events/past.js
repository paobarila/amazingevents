console.log(data.eventos)
let contenedorDatos = document.getElementById("contenedor-datos")

    for (let i = 0; i < data.eventos.length; i++) {
        let card = document.createElement('div')
        card.className="card"
        card.style.width="15rem"
        card.innerHTML=`<img src="${data.eventos[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${data.eventos[i].name}</h5>
        <p class="card-text">${data.eventos[i].date} ${data.eventos[i].description}</p>
        <a href="#" class="btn btn-primary">See More</a>
        </div>`
        if(data.fechaActual>data.eventos[i].date){
        
        contenedorDatos.appendChild(card)} 
    }
        