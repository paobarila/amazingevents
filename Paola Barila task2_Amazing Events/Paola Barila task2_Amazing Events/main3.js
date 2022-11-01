console.log(data)

let contenedorDatos = document.getElementById('contenedor-datos')

for (let i = 0; i < data.length; i++) {
    let card = document.createElement('div')
    card.className="card"
    card.style.width="18rem"
    card.innerHTML=`<img src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg" class="card-img-top" alt="...">
    <div class="card-body ${data[i].numberrange>5?'bg-warning':'bg-danger'}">
      <h5 class="card-title">${data[i].name}</h5>
      <p class="card-text">${data[i].text}</p>
      <p class="card-text">${data[i].country}</p>
      <a href="tel:${data[i].phone}" class="btn btn-primary">${data[i].phone}</a>
    </div>`
    // if(data[i].country=='Pakistan') {

    // }
    contenedorDatos.appendChild(card)
}


/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */