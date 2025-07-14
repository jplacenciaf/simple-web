# 🌐 Simple Web - API Consumer

Una aplicación web simple y elegante que consume APIs públicas para mostrar datos dinámicos. Desarrollada con HTML, CSS y JavaScript vanilla.

## 🚀 Características

- **Interfaz moderna**: Diseño responsive con gradientes y efectos visuales
- **Consumo de APIs**: Integración con múltiples APIs públicas
- **Datos dinámicos**: Carga y muestra información en tiempo real
- **Manejo de errores**: Gestión robusta de errores de red
- **Animaciones**: Transiciones suaves y efectos visuales
- **Responsive**: Adaptable a diferentes tamaños de pantalla

## 📋 Funcionalidades

### 1. Carga de Usuarios
- Consume la API de JSONPlaceholder para obtener datos de usuarios
- Muestra información completa: nombre, email, ciudad, teléfono, etc.
- Presenta los datos en tarjetas organizadas

### 2. Datos Aleatorios
- **Citas inspiracionales**: Obtiene citas aleatorias de la API de Quotable
- **Posts aleatorios**: Muestra posts aleatorios de JSONPlaceholder
- Alterna entre diferentes tipos de contenido

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6+**: Lógica de la aplicación y consumo de APIs
- **Fetch API**: Para realizar peticiones HTTP
- **Async/Await**: Manejo asíncrono de datos

## 🌐 APIs Utilizadas

1. **JSONPlaceholder**: `https://jsonplaceholder.typicode.com/`
   - Usuarios: `/users`
   - Posts: `/posts`

2. **Quotable**: `https://api.quotable.io/`
   - Citas aleatorias: `/random`

## 📁 Estructura del Proyecto

```
simple-web/
├── index.html          # Página principal
├── styles.css          # Estilos y diseño
├── script.js           # Lógica JavaScript
└── README.md           # Documentación
```

## 🚀 Cómo usar

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/jplacenciaf/simple-web.git
   cd simple-web
   ```

2. **Abre el archivo HTML**:
   - Abre `index.html` en tu navegador web
   - O usa un servidor local como Live Server en VS Code

3. **Interactúa con la aplicación**:
   - Haz clic en "Cargar Usuarios" para ver los datos de usuarios
   - Usa "Obtener Dato Aleatorio" para alternar entre citas y posts

## 🌟 Características Técnicas

### Manejo de Errores
- Validación de respuestas HTTP
- Mensajes de error informativos
- Recuperación automática de errores

### Optimizaciones
- Indicadores de carga visual
- Animaciones CSS para mejor UX
- Código modular y reutilizable

### Responsive Design
- Adaptable a móviles y tablets
- Grid layout flexible
- Breakpoints para diferentes pantallas

## 🎨 Diseño

- **Paleta de colores**: Gradientes azul-púrpura
- **Tipografía**: Segoe UI para mejor legibilidad
- **Efectos**: Glassmorphism y sombras suaves
- **Iconos**: Emojis para elementos visuales

## 📱 Capturas de Pantalla

La aplicación incluye:
- Header con título y descripción
- Sección de usuarios con tarjetas informativas
- Sección de datos aleatorios
- Footer con información del desarrollador

## 🔧 Personalización

### Agregar nuevas APIs
1. Agrega la URL en el objeto `API_URLS` en `script.js`
2. Crea una nueva función para manejar los datos
3. Actualiza la interfaz en `index.html`

### Modificar estilos
- Edita `styles.css` para cambiar colores, fuentes o layout
- Usa variables CSS para facilitar la personalización

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 👨‍💻 Desarrollado por

**jplacenciaf** - [GitHub](https://github.com/jplacenciaf)

---

⭐ ¡No olvides dar una estrella al proyecto si te ha sido útil!

## 🚀 Demo en Vivo

Puedes ver la aplicación en funcionamiento visitando: [GitHub Pages](https://jplacenciaf.github.io/simple-web/)

## 🔮 Próximas Mejoras

- [ ] Agregar más APIs públicas
- [ ] Implementar cache local
- [ ] Añadir modo oscuro
- [ ] Incluir filtros de búsqueda
- [ ] Agregar paginación
- [ ] Implementar PWA features