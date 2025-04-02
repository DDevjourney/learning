**Documentación Técnica: To-Do List Web App**  
**Versión: 1.0** | **Fecha: 02/04/2025**  

## HTML

### **1. Descripción General**  
El proyecto **To-Do List** es una aplicación web interactiva diseñada para permitir a los usuarios gestionar tareas diarias. Desarrollada con HTML5, CSS y JavaScript, ofrece una interfaz minimalista con funcionalidades básicas como agregar tareas y marcarlas como completadas. El código proporcionado estructura el esqueleto HTML y define los componentes clave para la interacción del usuario.

---

### **2. Estructura HTML**  

#### **2.1 Declaración DOCTYPE y Etiqueta `<html>`**  
```html  
<!DOCTYPE html>
<html lang="en">
```  
- **Propósito**: Define el documento como HTML5 y establece el idioma predeterminado (inglés).  
- **Mejora sugerida**: Cambiar `lang="es"` si el contenido está dirigido a hispanohablantes.  

---

#### **2.2 Sección `<head>`**  
```html  
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do-List</title>
    <link rel="stylesheet" href="style.css">
</head>
```  
- **Metadatos**:  
  - `charset="UTF-8"`: Asegura compatibilidad con caracteres especiales.  
  - `viewport`: Optimiza la visualización en dispositivos móviles.  
- **Enlace a CSS**: Importa estilos desde `style.css` para separar contenido y diseño.  

---

#### **2.3 Sección `<body>`**  

##### **Contenedor Principal**  
```html  
<div class="container">
    <div class="tasks">
        <h2>To-Do List<img src="img/completed-task.png" id="UUImage"></h2>
        <!-- ... -->
    </div>
</div>
```  
- **Propósito**: Organiza el contenido en un contenedor flexible para facilitar el diseño responsivo.  
- **Imagen en el Título**: Muestra un icono (`completed-task.png`) para reforzar el propósito de la app.  
  - **Mejora**: Agregar atributo `alt` para accesibilidad:  
    ```html  
    <img src="img/completed-task.png" alt="Icono de tarea completada" id="UUImage">
    ```  

---

##### **Bloque de Entrada de Tareas**  
```html  
<div class="row">
    <input type="text" id="input-box" placeholder="Add your tasks">
    <button onclick="addTask()">Add</button>
</div>
```  
- **Input**:  
  - `type="text"`: Campo de texto para ingresar tareas.  
  - `placeholder`: Texto guía para el usuario.  
- **Botón "Add"**: Ejecuta la función `addTask()` definida en `app.js` al hacer clic.  

---

##### **Lista de Tareas**  
```html  
<ul id="list-container">
    <!-- Elementos <li> generados dinámicamente por JavaScript -->
</ul>
```  
- **Propósito**: Contenedor para mostrar tareas agregadas.  
- **Dinamismo**: Las tareas se insertarán como elementos `<li>` mediante JavaScript.  

---

#### **2.4 Scripts**  
```html  
<script src="app.js"></script>
```  
- **Función**: Vincula el archivo JavaScript que maneja la lógica de la app (agregar, marcar como completada, eliminar).  

---

### **3. Buenas Prácticas Implementadas**  
1. **Separación de Responsabilidades**:  
   - HTML para estructura.  
   - CSS para estilos (`style.css`).  
   - JavaScript para funcionalidad (`app.js`).  

2. **Diseño Responsivo**:  
   - Uso de `viewport` y clases como `container` para adaptabilidad.  

3. **Semántica HTML**:  
   - Etiquetas adecuadas como `<ul>`, `<li>`, y `<button>`.  

4. **Accesibilidad Básica**:  
   - Campo de texto con `placeholder` y botón con acción clara.  

## CSS

### **1. Estructura Global**  
#### **Reset Básico y Configuración Inicial**  
```css  
* {
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    box-sizing: border-box;
}  
```  
- **Propósito**:  
  - Elimina márgenes y paddings predeterminados de todos los elementos.  
  - Establece una fuente uniforme para toda la aplicación.  
  - `box-sizing: border-box` asegura que el padding no afecte el ancho total de los elementos.  

---

### **2. Contenedor Principal**  
```css  
.container {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg, #ffffff, #4287f5);
    padding: 10px;
}  
```  
- **Responsividad**:  
  - `min-height: 100vh` garantiza que el contenedor ocupe al menos el alto completo de la pantalla.  
- **Diseño Visual**:  
  - Fondo con degradado diagonal (`135deg`) de blanco a azul (#4287f5).  
  - Padding de 10px para evitar que el contenido toque los bordes.  

---

### **3. Bloque de Tareas**  
```css  
.tasks {
    width: 100%;
    max-width: 540px;
    background: #ffffff;
    margin: 100px auto 20px;
    padding: 40px 30px 70px;
    border-radius: 10px;
}  
```  
- **Centrado y Adaptabilidad**:  
  - `max-width: 540px` limita el ancho en pantallas grandes.  
  - `margin: 100px auto 20px` centra horizontalmente y añade espacio superior/inferior.  
- **Estética**:  
  - Borde redondeado (`border-radius: 10px`) para un look moderno.  
  - Padding generoso para separar el contenido de los bordes.  

---

### **4. Estilos del Encabezado**  
```css  
.tasks h2 {
    display: flex;
    align-items: center;
    padding: 15px;
    color: rgb(0, 0, 0);
    margin-bottom: 20px;
}  

.tasks h2 img {
    width: 30px;
    height: 30; /* Error: falta unidad (ej: 30px) */
    margin-left: 10px;
}  
```  
- **Alineación Flexible**:  
  - `display: flex` permite alinear ícono y texto verticalmente.  
- **Problema Detectado**:  
  - `height: 30` está incompleto (debe ser `30px`).  
- **Mejora Sugerida**:  
  - Añadir `alt` al HTML para accesibilidad y tamaño consistente del ícono.  

---

### **5. Fila de Entrada de Tareas**  
```css  
.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #edeef0;
    border-radius: 30px;
    padding-left: 20px;
    margin-bottom: 25px;
}  

.row input {
    flex: 1;
    padding: 10px;
    border: none;
    background: transparent;
    outline: none;   
}  
```  
- **Diseño de Input**:  
  - Fondo gris claro (#edeef0) y bordes redondeados para simular un campo de búsqueda moderno.  
  - `flex: 1` permite que el input ocupe el espacio restante.  
- **Accesibilidad**:  
  - Considerar añadir `:focus` states para mejorar la experiencia de usuario.  

---

### **6. Botón "Add"**  
```css  
button {
    padding: 16px 50px;
    background: #4287f5;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    border-radius: 40px;
}  
```  
- **Estilo Visual**:  
  - Color primario (#4287f5) para destacar la acción principal.  
  - Bordes hiper-redondeados (`40px`) para efecto "pastilla".  
- **Optimización**:  
  - Añadir transición suave en hover:  
    ```css  
    transition: background 0.3s, transform 0.2s;  
    ```  

---

### **7. Elementos de la Lista**  
#### **Items y Checkboxes Personalizados**  
```css  
ul li {
    list-style: none;
    padding: 12px 8px 12px 50px;
    position: relative;
}  

ul li::before {
    content: '';
    position: absolute;
    height: 28px;
    width: 28px;
    background-image: url(img/unchecked.png);
    /* ... */
}  

ul li.checked::before {
    background-image: url(img/check.png);
}  
```  
- **Checkboxes Personalizados**:  
  - Se usa `::before` para crear checkboxes con íconos.  
  - Rutas de imágenes (`img/unchecked.png` y `img/check.png`) deben verificarse en el proyecto.  
- **Feedback Visual**:  
  - `text-decoration: line-through` en tareas completadas.  

---

### **8. Icono de Eliminación**  
```css  
ul li span {
    position: absolute;
    right: 0;
    top: 5px;
    width: 40px;
    height: 40px;
    /* ... */
}  

ul li span:hover {
    background: #edeef0;
}  
```  
- **Posicionamiento**:  
  - Ubicado a la derecha con `position: absolute`.  
- **Interactividad**:  
  - Efecto hover sutil para indicar acción de eliminar.  

---

## JAVASCRIPT

**Documentación Técnica: Lógica JavaScript para To-Do List Web App**  
**Versión: 1.0** | **Fecha: [Fecha Actual]**  

---

### **1. Descripción General**  
El código JavaScript implementa la funcionalidad básica de una To-Do List, incluyendo:  
- **Agregar tareas** desde un campo de entrada.  
- **Marcar/completar tareas** con un click.  
- **Eliminar tareas** con un botón (ícono "×").  
- **Persistencia de datos** usando `localStorage`.  

---

### **2. Variables Globales**  
```javascript  
const inputBox = document.getElementById("input-box");  
const listContainer = document.getElementById("list-container");  
```  
- **Propósito**: Referencias a elementos clave del DOM:  
  - `inputBox`: Campo de texto para ingresar tareas.  
  - `listContainer`: Contenedor `<ul>` donde se renderizan las tareas.  

---

### **3. Función `addTask()`**  
```javascript  
function addTask() {  
    if (inputBox.value.trim() === '') {  
        alert("You must write something!");  
    } else {  
        // Crear elemento <li> y asignar texto  
        let li = document.createElement("li");  
        li.textContent = inputBox.value;  

        // Crear botón de eliminación (ícono "×")  
        let span = document.createElement("span");  
        span.innerHTML = "\u00d7";  

        // Ensamblar elementos  
        li.appendChild(span);  
        listContainer.appendChild(li);  

        inputBox.value = "";  
        saveData();  
    }  
}  
```  

#### **Flujo de Trabajo**:  
1. **Validación**: Verifica que el campo no esté vacío (usa `trim()` para ignorar espacios).  
2. **Creación Dinámica**:  
   - `<li>`: Contiene el texto de la tarea.  
   - `<span>`: Botón de eliminación con Unicode `\u00d7` (×).  
3. **Persistencia**: Guarda los datos en `localStorage` tras cada cambio.  

---

### **4. Event Listener para Interacciones**  
```javascript  
listContainer.addEventListener("click", function(e) {  
    if (e.target.tagName === "LI") {  
        e.target.classList.toggle("checked");  
        saveData();  
    } else if (e.target.tagName === "SPAN") {  
        e.target.parentElement.remove();  
        saveData();  
    }  
}, false);  
```  

#### **Mecanismos Clave**:  
- **Event Delegation**: Maneja eventos en elementos dinámicos (tareas añadidas después del DOM inicial).  
- **Toggle de Estado**:  
  - Click en `<li>`: Alterna clase `checked` (tacha el texto vía CSS).  
  - Click en `<span>`: Elimina la tarea padre (`parentElement.remove()`).  

---

### **5. Gestión de Datos con `localStorage`**  
```javascript  
function saveData() {  
    localStorage.setItem("data", listContainer.innerHTML);  
}  

function showTask() {  
    listContainer.innerHTML = localStorage.getItem("data");  
}  

showTask(); // Carga tareas al iniciar  
```  

#### **Funcionalidad**:  
- **`saveData()`**: Guarda el HTML actualizado de la lista (incluyendo clases como `checked`).  
- **`showTask()`**: Recupera y renderiza los datos al cargar/recargar la página.  

---



