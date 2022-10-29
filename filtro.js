// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementsByName("lista-de-productos")
const $i = document.querySelector('.input');


// Se cambia las variables
for (let i = 0; i < productos.length; i++) {
  let producto = document.createElement("div")
  producto.classList.add("producto")

  let titulo = document.createElement("p")
  titulo.classList.add("titulo")
  titulo.textContent = productos[i].nombre
  
  let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  titulo.appendChild(ti)
  imagen.appendChild(imagen)

  producto.appendChild(d)
}

displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    let d = document.createElement("div")
    producto.classList.add("producto")
  
    let titule = document.createElement("p")
    titule.classList.add("titulo")
    titule.textContent = productosFiltrados[i].nombre
    
    let image = document.createElement("img");
    image.setAttribute('src', productosFiltrados[i].img);
  
    titule.appendChild(ti)
    image.appendChild(imagen)
  
    producto.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  