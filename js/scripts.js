const productos = [
  {
    idProduct: "prod1",
    src: [
      "images/pantalon-verde.jpg",
      "images/pantalon-blanco.jpg",
      "images/pantalon-azul.jpg",
    ],
    alt: "Gatitos, no se puede decir más",
    nombre: "Monito crudo",
    precio: "$5.000",
    marca: "Zara",
    talle: "Talle: L",
    condicion: "Condición: Nuevo",
  },
  {
    idProduct: "prod2",
    src: ["images/pantalon-verde.jpg", "images/pantalon-azul.jpg"],
    alt: "Gatitos, no se puede decir más",
    nombre: "Pantalon verde con puño",
    precio: "$4.000",
    marca: "Zara",
    talle: "Talle: L",
    condicion: "Condición: Nuevo",
  },
  {
    idProduct: "prod3",
    src: ["images/pantalon-verde.jpg"],
    alt: "Gatitos, no se puede decir más",
    nombre: "Pantalon jean azul",
    precio: "$6.000",
    marca: "Jazmin Chebar",
    talle: "Talle: L",
    condicion: "Condición: Nuevo",
  },
];

function renderizarGaleria(prods) {
  let html = "";

  prods.forEach(function (producto) {
    let imgHtml = "";
    let imgButtons = "";
    producto.src.forEach((imagePath, index) => {
      imgButtons += `<button type="button" data-bs-target="#${
        producto.idProduct
      }" data-bs-slide-to="${index}" class="active" aria-current="true" aria-label="Slide ${
        index + 1
      }"></button>`;
      imgHtml += `<div class="carousel-item">
        <img src="${imagePath}" class="d-block w-100" alt="${producto.alt}">
      </div>`;
    });
    html += `
            <div class="col mb-5">
                <div class="card h-100">
                    <!-- Product image--> 
                    <div id="${producto.idProduct}" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                        ${imgButtons}                      
                        </div>
                        <div class="carousel-inner">
                        ${imgHtml}                        
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#${producto.idProduct}" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#${producto.idProduct}" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>                                                                  
                    <!-- Product details-->
                    <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">${producto.nombre}</h5>
                        <p>${producto.marca}</p>
                        <p>${producto.talle}</p>
                        <p>${producto.condicion}</p>
                        <!-- Product price-->
                        <p>${producto.precio}</p>
                    </div>
                </div>
                    <!-- Product actions-->
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                            <a class="btn btn-outline-dark mt-auto" href="https://mail.google.com/mail/?view=cm&fs=1&to=lasaudet@gmail.com&su=Solicito ${producto.nombre}&body=Hola!! Estoy interesada en comprar el producto ${producto.nombre}, código: ${producto.idProduct}.                            "
                            >Solicitar producto</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        `;
  });
  $("#galeria").html(html);
  document
    .querySelectorAll(".carousel-item:first-child")
    .forEach((x) => x.classList.add("active"));
}

$(function () {
  renderizarGaleria(productos);
});
