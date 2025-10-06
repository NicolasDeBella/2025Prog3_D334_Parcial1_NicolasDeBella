# 🍎 Parcial Programación III - Tienda de Frutas  
🍍🍐🍊🍉

Este proyecto consiste en el desarrollo de un **frontend para una tienda de frutas**, aplicando conceptos de **JavaScript, manipulación del DOM y almacenamiento local (localStorage)**.

---

## 🧾 Instrucciones del parcial
- Desarrollá los puntos **en el orden indicado**.  
- Se valorará un **código limpio, bien comentado y estructurado**.  
- Utilizá **comentarios** para separar bloques de código.  
- Incorporá **comentarios explicativos** que detallen cómo pensaste la resolución y por qué elegiste esa implementación.  

---

## 📘 Ejercicios

### 🥝 Ejercicio 1 — 0.5 pts  
Crear un **array de objetos con 13 frutas**.  
Cada objeto debe contener las claves:
- `id`
- `nombre`
- `precio`
- `ruta` (correspondiente a la carpeta `/img`)

---

### 🍋 Ejercicio 2 — 0.5 pts  
Modificar la función `init()` para incluir una función que imprima tu nombre y apellido en el `<nav>` y en la consola.

Pasos:
1. Crear un objeto `alumno` con tus datos: `dni`, `nombre`, `apellido`.  
2. Usar **backticks** para mostrar un mensaje en consola con estos datos.  
3. Mostrar tu **nombre y apellido** en el `<nav>` y en la consola.  
4. Incluir todo dentro de la función `imprimirDatosAlumno()`.

---

### 🍎 Ejercicio 3 — 1 pt  
Implementar una función que imprima en pantalla los productos del array.  
Debe ejecutarse dentro de `init()`.

Estructura esperada del HTML generado:

```html
<div class="card-producto">
  <img src="" alt="">
  <h3></h3>
  <p>$</p>
  <button>Agregar al carrito</button>
</div>
```

---

### 🍇 Ejercicio 4 — 1 pt  
Implementar una función de **filtro** que se active al escribir en un campo `<input>`, mostrando solo los productos que coincidan con el texto ingresado.

---

### 🍓 Ejercicio 5 — 2 pts  
1. Implementar la funcionalidad de **carrito**, asociada al botón “Agregar al carrito”.  
   - El carrito debe mostrarse mediante `console.log()`.  
2. Crear la función `mostrarCarrito()` que genere el siguiente HTML:

```html
<li class="bloque-item">
  <p class="nombre-item">nombreProducto - precioProducto</p>
  <button class="boton-eliminar">Eliminar</button>
</li>
```

3. Implementar `eliminarProducto()` asociada al botón del carrito.

---

### 🍉 Ejercicio 6 — 1 pt  
- Guardar los productos del carrito en **localStorage**.  
- Mantener los cambios (agregados y eliminados).  
- Si hay productos almacenados previamente, deben cargarse automáticamente al iniciar la página.

---

### 🍌 Ejercicio 7 — 1 pt  
- Implementar un **contador** de productos del carrito.  
- Si hay 0 productos, se limpia el carrito.  
- Actualizar en el header: `Carrito: X productos`.  
- Mostrar el **precio total** en la parte inferior derecha del carrito.

---

### 🍑 Ejercicio 8 — 1 pt  
- Agregar **dos botones** junto al título de la sección “Productos”.  
- Implementar la funcionalidad para **ordenar** los productos:
  - Uno por **nombre (A–Z)**.
  - Otro por **precio (menor a mayor)**.

---

### 🍒 Ejercicio 9 — 0.5 pts  
Implementar la función para **vaciar el carrito** mediante un botón dentro de la sección del carrito.

---

### 🍊 Ejercicio 10 — 1.5 pts  
Aplicar estilos al sitio siguiendo el diseño de referencia:  
📸 **`sample.png`**

---

---

## 💡 Tecnologías utilizadas
- **HTML5**
- **CSS3**
- **JavaScript (DOM, eventos, localStorage)**

---

## 👨‍💻 Autor
**Nombre y Apellido:** Nicolas De Bella  
**Materia:** Programación III  
**Institución:** UTN FRA  

---


