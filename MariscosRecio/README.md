# Mariscos Recio - Landing Page

![Mariscos Recio](logo.png)

## Descripción

Este proyecto es una landing page para "Mariscos Recio", el negocio ficticio de mariscos y pescados del personaje Antonio Recio de la serie española "La que se avecina". La página está diseñada como una tienda online de productos del mar, manteniendo el estilo y las frases características del personaje.

## Características

- Diseño responsive adaptado a dispositivos móviles y de escritorio
- Catálogo de productos con imágenes y precios
- Carrito de compra funcional con almacenamiento local
- Formulario de contacto
- Suscripción a newsletter
- Animaciones y efectos visuales
- Frases características de Antonio Recio

## Tecnologías utilizadas

- HTML5
- CSS3 (con variables CSS, flexbox y grid)
- JavaScript (vanilla, sin frameworks)
- LocalStorage para persistencia de datos

## Instalación

1. Clona este repositorio o descarga los archivos
2. Asegúrate de tener todas las imágenes necesarias (ver el archivo `imagenes-necesarias.html` para más detalles)
3. Abre el archivo `index.html` en tu navegador

## Imágenes necesarias

Para que la página funcione correctamente, necesitas añadir las siguientes imágenes al directorio raíz:

- `logo.png` - Logo de Mariscos Recio
- `hero-bg.jpg` - Imagen de fondo para la sección principal
- `producto1.jpg` - Imagen de gambas
- `producto2.jpg` - Imagen de mejillones
- `producto3.jpg` - Imagen de pulpo
- `producto4.jpg` - Imagen de lubina
- `antonio-recio.jpg` - Imagen del personaje Antonio Recio

Consulta el archivo `imagenes-necesarias.html` para obtener instrucciones detalladas sobre cómo obtener estas imágenes.

## Estructura del proyecto

```
mariscos-recio/
│
├── index.html          # Estructura principal de la página
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
├── imagenes-necesarias.html  # Guía para las imágenes requeridas
├── README.md           # Este archivo
│
└── imágenes/           # Carpeta para las imágenes (debes crearla)
    ├── logo.png
    ├── hero-bg.jpg
    ├── producto1.jpg
    ├── producto2.jpg
    ├── producto3.jpg
    ├── producto4.jpg
    └── antonio-recio.jpg
```

## Uso

1. Navega por las diferentes secciones usando el menú de navegación
2. Explora los productos disponibles en la sección "Productos"
3. Añade productos al carrito haciendo clic en "Añadir al carrito"
4. Visualiza tu carrito haciendo clic en el icono de carrito flotante
5. Ajusta cantidades o elimina productos en el carrito
6. Finaliza tu compra haciendo clic en "Finalizar compra"
7. Utiliza el formulario de contacto para enviar mensajes
8. Suscríbete al newsletter para recibir novedades

## Personalización

Puedes personalizar fácilmente esta landing page:

- Modifica los colores en las variables CSS al inicio del archivo `styles.css`
- Cambia los productos editando la sección correspondiente en `index.html`
- Añade o modifica las frases de Antonio Recio en el array `frases` en `script.js`
- Personaliza las imágenes manteniendo los mismos nombres de archivo

## Frases de Antonio Recio

La página muestra aleatoriamente frases características del personaje, como:

- "¡Soy Antonio Recio, mayorista, no limpio pescado!"
- "¡El mar al mejor precio!"
- "Mayorista y minorista. ¡No vendemos a negros!"
- "¡Mariscos Recio, el mar en su mesa!"

## Licencia

Este proyecto es de uso libre y está creado con fines educativos y de entretenimiento. Los personajes y frases de "La que se avecina" pertenecen a sus respectivos propietarios.

## Autor

Este proyecto fue creado como parte de un ejercicio de desarrollo web.

---

*"¡Soy Antonio Recio, mayorista, no limpio pescado!"*