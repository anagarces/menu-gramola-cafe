# Menú Digital - A Gramola Café
Enlace: https://agramolamenu.netlify.app/

Este proyecto es la versión digital e interactiva del menú de "A Gramola Café". Ha sido diseñado para ser consultado online desde cualquier dispositivo y para ser utilizado en el local a través de códigos QR.

##  Características

* **Contenido Dinámico:** Todos los productos, descripciones y precios se gestionan desde un único archivo (`menu.json`), facilitando futuras actualizaciones.
* **Multi-idioma:** El menú está disponible en Castellano, Galego e Inglés.
* **Sin Recargas:** El cambio de idioma se realiza de forma instantánea gracias a JavaScript, sin necesidad de recargar la página.
* **Diseño Responsivo:** Se adapta correctamente a pantallas de móviles, tabletas y ordenadores.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Para la estructura del contenido.
* **CSS3:** Para los estilos y el diseño visual.
* **JavaScript (Vanilla):** Para la lógica de la aplicación y la manipulación del DOM.

## ⚙️ ¿Cómo funciona?

La aplicación funciona de una manera muy sencilla:

1.  El archivo `index.html` contiene la estructura base sin texto.
2.  El archivo `menu.json` almacena todo el contenido textual del menú en los tres idiomas.
3.  El script `app.js` se encarga de:
    * Cargar los datos del `menu.json`.
    * Pintar el contenido en el idioma por defecto (castellano).
    * Escuchar los clics en los botones de idioma para cambiar dinámicamente todo el texto sin recargar la página.

## ✏️ ¿Cómo modificar el menú?

Para añadir, eliminar o cambiar cualquier elemento o precio del menú, **solo necesitas editar el archivo `menu.json`**. No es necesario tocar el código HTML o JavaScript.

Abre `menu.json`, busca el producto que quieres modificar y actualiza su `name`, `description` o `price` en los tres idiomas (`es`, `gl`, `en`).

---
