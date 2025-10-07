/* 
    Proyecto Tienda de Frutas - Resumen de implementación

    - Cree un array de objetos "frutas" con id, nombre, precio y ruta de imagen para simular los productos.
    - Mostre los productos en pantalla con tarjetas (cards) que incluyen imagen, nombre, precio y un botón de agregar al carrito.
    - Implemente búsqueda en tiempo real filtrando por nombre de fruta.
    - Carrito de compras:
        * Los productos se agregan al carrito al hacer clic en el botón correspondiente.
        * Se puede eliminar un producto individual o vaciar todo el carrito.
        * Se muestra un contador dinámico de productos en el header.
        * Se calcula y muestra el total del carrito solo si hay productos.
        * Se guarda y recupera el carrito usando localStorage para mantener la persistencia entre recargas de página.

    Decisiones de diseño:
    - Use índices para eliminar productos específicos del carrito, evitando eliminar todos los productos con el mismo id.
    - La sección del carrito se genera dinámicamente cada vez que se actualiza, asegurando que la UI (User Interface)esté sincronizada con los datos.
    - Se optó por un diseño centrado y claro para las tarjetas de productos y los elementos del carrito.
*/


// Array de frutas - Ejercicio 1
const frutas = [
    { 
        id: 1, 
        nombre: "Ananá", 
        precio: 160, 
        ruta_img: "img/anana.jpg" 
    },
    { 
        id: 2, 
        nombre: "Arándano", 
        precio: 180, 
        ruta_img: "img/arandano.jpg" 
    },
    { 
        id: 3, 
        nombre: "Banana", 
        precio: 60, 
        ruta_img: "img/banana.jpg" 
    },
    { 
        id: 4, 
        nombre: "Frambuesas", 
        precio: 150, 
        ruta_img: "img/frambuesa.png" 
    },
    { 
        id: 5, 
        nombre: "Frutilla", 
        precio: 130, 
        ruta_img: "img/frutilla.jpg" 
    },
    { 
        id: 6, 
        nombre: "Kiwi", 
        precio: 110, 
        ruta_img: "img/kiwi.jpg" 
    },
    { 
        id: 7, 
        nombre: "Mandarina", 
        precio: 90, 
        ruta_img: "img/mandarina.jpg" 
    },
    { 
        id: 8, 
        nombre: "Manzana", 
        precio: 100, 
        ruta_img: "img/manzana.jpg" 
    },
    { 
        id: 9, 
        nombre: "Naranja", 
        precio: 70, 
        ruta_img: "img/naranja.jpg" 
    },
    { 
        id: 10, 
        nombre: "Pera", 
        precio: 80, 
        ruta_img: "img/pera.jpg" 
    },
    { 
        id: 11, 
        nombre: "Pomelo Amarillo", 
        precio: 120, 
        ruta_img: "img/pomelo-amarillo.jpg" 
    },
    { 
        id: 12, 
        nombre: "Pomelo Rojo", 
        precio: 130, 
        ruta_img: "img/pomelo-rojo.jpg" 
    },
    { 
        id: 13, 
        nombre: "Sandía", 
        precio: 150, 
        ruta_img: "img/sandia.jpg" 
    }
];

/*---------------------
    VARIABLES DEL DOM
-----------------------*/
const navAlumno = document.getElementById("nombre-alumno");
const contadorCarrito = document.getElementById("contador-carrito");
const barraBusqueda = document.getElementById("busqueda");
const contenedorFrutas = document.getElementById("productos");
const contenedorCarrito = document.getElementById("contenedor-carrito");
const contenedorOrdenarPdructos = document.getElementById("ordenar-productos");

/*---------------------
    VARIABLES DEL PROGRAMA
-----------------------*/
let carrito = [];

/*---------------------
ESCUCHADORES DE EVENTOS
-----------------------*/
barraBusqueda.addEventListener("input", filtrarProductos);

/*---------------------
    EJERCICIO 2 - Imprimir datos del alumno
    • Creamos un objeto con los datos del alumno para centralizar la info.
    • Lo mostramos en consola para depuración.
    • También mostramos el nombre completo en el header si el elemento existe.
-----------------------*/
function imprimirDatosAlumno() {
    const alumno = {
        dni: "39281224",   
        nombre: "Nicolas",
        apellido: "De Bella"
    };

    console.log(`Alumno: ${alumno.nombre} ${alumno.apellido}, DNI: ${alumno.dni}`);

    if(navAlumno){
        navAlumno.textContent = `${alumno.nombre} ${alumno.apellido}`;
    }
}

/*---------------------
    EJERCICIO 3 - Mostrar productos
    • Título estático "Nuestras Frutas".
    • Cada fruta se muestra en una tarjeta con imagen, nombre, precio y botón.
    • El botón llama a agregarAlCarrito con el id de la fruta.
    • Todo se mete en el contenedor del DOM.
-----------------------*/
function mostrarProductos(productos) {

    let htmlFrutas = `<h1 class="titulo-frutas">Nuestras Frutas</h1>`;  

    productos.forEach(fruta => {
        htmlFrutas += `
        <div class="card-producto">
            <img src="${fruta.ruta_img}" alt="${fruta.nombre}">
            <h3>${fruta.nombre}</h3>
            <p>$${fruta.precio}</p>
            <button onclick="agregarAlCarrito(${fruta.id})">Agregar al carrito</button>
        </div>`;
    });

    contenedorFrutas.innerHTML = htmlFrutas;
}


/*---------------------
    EJERCICIO 4 - Filtrar productos
    • Detectamos lo que escribe el usuario en tiempo real.
    • Convertimos a minúsculas para que no importe mayúsculas.
    • Filtramos el array y mostramos los productos que coincidan.
    • Si no hay coincidencias, mostramos mensaje.
-----------------------*/
function filtrarProductos () {

    let valorBuscado = barraBusqueda.value.toLowerCase();

    let productosFiltrados = frutas.filter(fruta => fruta.nombre.toLowerCase().includes(valorBuscado));

    if(productosFiltrados.length > 0)
    {
        mostrarProductos(productosFiltrados);
    }
    else{
        contenedorFrutas.innerHTML = `<h1 class="mensaje-no-encontrado">Producto no encontrado</h1>`;
    }
}

/*---------------------
    EJERCICIO 5 - Crear sección del carrito
    • Creamos la estructura del carrito con título, lista y acciones.
    • Incluye botón para vaciar y un párrafo para el total.
    • Se llama cada vez que el carrito cambia para refrescar la UI.
-----------------------*/
function crearSeccionCarrito() {
    contenedorCarrito.innerHTML = `
        <h2>Carrito</h2>
        <ul id="lista-carrito">
            
        </ul>
        <div class="acciones-carrito">
            <button class="btn-vaciar" onclick="vaciarCarrito()">Vaciar Carrito</button>
            <p id="total-carrito"></p>
        </div>
    `;
}

/*---------------------
    Mostrar carrito
    • Guardamos el carrito en localStorage para que se mantenga al recargar.
    • Recorremos cada producto y calculamos el total.
    • Cada producto va en un li con botón para eliminar.
    • Actualizamos el contador de productos en el header.
    • Si el carrito está vacío, el total no se muestra.
-----------------------*/
function mostrarCarrito() {
    console.log("Carrito de compras:", carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    crearSeccionCarrito();

    actualizarContadorCarrito();

    const listaCarrito = document.getElementById("lista-carrito");
    const totalCarrito = document.getElementById("total-carrito");

    let html = "";
    let total = 0;

    carrito.forEach((producto, index) => {
        html += `
            <li class="bloque-item">
                <p class="nombre-item">${producto.nombre} - $${producto.precio}</p>
                <button class="boton-eliminar" onclick="eliminarProducto(${index})">Eliminar</button>
            </li>
        `;
        total += producto.precio;
    });

    listaCarrito.innerHTML = html;

    if (carrito.length === 0) {
        totalCarrito.textContent = ""; 
        return;
    }else{
        totalCarrito.textContent = `Total: $${total}`;
    }
}


/*---------------------
    Agregar al carrito
    • Buscamos la fruta por id.
    • La agregamos al array carrito.
    • Llamamos a mostrarCarrito para actualizar UI, total y contador.
-----------------------*/
function agregarAlCarrito(productoId) {
    const fruta = frutas.find(f => f.id === productoId);
    carrito.push(fruta);
    mostrarCarrito();
}

/*---------------------
    Eliminar producto
    • Usamos splice para borrar solo el producto seleccionado.
    • Mostramos nuevamente el carrito para actualizar todo.
-----------------------*/
function eliminarProducto(elementoIndice){
    carrito.splice(elementoIndice, 1);  
    mostrarCarrito();
   
}

/*---------------------
    Vaciar carrito
    • Vaciamos el array carrito y borramos localStorage.
    • Actualizamos la UI para reflejar que no hay productos.
-----------------------*/
function vaciarCarrito() {
    carrito = [];                           
    localStorage.removeItem("carrito"); 
    mostrarCarrito();  
}

/*---------------------
    EJERCICIO 6 - Carrito persistente
    • Cargamos productos guardados en localStorage si existen.
    • Permite que el carrito se mantenga al recargar la página.
-----------------------*/
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
    mostrarCarrito(); 
}

/*---------------------
    EJERCICIO 7 - Contador de productos
    • Mostramos la cantidad de productos en el header.
    • Si no hay productos, no mostramos nada.
-----------------------*/
function actualizarContadorCarrito() {
    if (carrito.length > 0) {
        contadorCarrito.textContent = `Carrito: ${carrito.length} Productos`;
    } else {
        contadorCarrito.textContent = "";  
    }
}

/* ---------------------------
    Ejercicio 8 - Botones para ordenar productos    
    En este ejercicio implemente dos botones que permiten ordenar los productos 
    de la tienda. Uno ordena alfabéticamente por nombre y el otro por precio de menor a mayor. 
    La función mostrarBotonesOrden() se encarga de generar dinámicamente los botones en el DOM, 
    insertándolos en la sección correspondiente. Cada botón llama a su respectiva función 
    (ordenarPorNombre o ordenarPorPrecio) cuando se hace clic, actualizando la vista de productos.
   ---------------------------
*/
function ordenarPorNombre() {
    const productosOrdenados = frutas.sort((a, b) => a.nombre.localeCompare(b.nombre));
    mostrarProductos(productosOrdenados);
}

function ordenarPorPrecio() {
    const productosOrdenados = frutas.sort((a, b) => a.precio - b.precio);
    mostrarProductos(productosOrdenados);
}

function mostrarBotonesOrden() {
    contenedorOrdenarPdructos.innerHTML = `
        <div class="botones-orden">
            <button id="orden-nombre" onclick="ordenarPorNombre()">Ordenar por nombre</button>
            <button id="orden-precio" onclick="ordenarPorPrecio()">Ordenar por precio</button>
        </div>
    `;
}

/*---------------------
    Inicialización
    • Llamamos todas las funciones necesarias al cargar la página:
        - Datos del alumno
        - Mostrar productos
        - Cargar carrito persistente
        - Mostrar carrito y contador
-----------------------*/
function init() {
    imprimirDatosAlumno();
    mostrarBotonesOrden();
    mostrarProductos(frutas);
    cargarCarrito();
    mostrarCarrito(); 
}

// Llamamos a init al cargar la página
init();
