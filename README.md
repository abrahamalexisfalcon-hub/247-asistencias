# 24/7 Asistencias | Servicios Generales a Domicilio

Sitio web oficial de **24/7 Asistencias Generales**, una plataforma moderna, responsiva y optimizada para la cotización y visualización de servicios técnicos a domicilio en Lima Metropolitana (gasfitería, cerrajería, electricidad, pintura y auxilio vial).

Desarrollado con las mejores prácticas de la industria, diseño de alta fidelidad (*glassmorphism*, micro-animaciones) y una estructura modular e intuitiva.

---

## 🚀 Características Principales

* **Navegación Fluida (SPA)**: Enrutamiento del lado del cliente integrado con `react-router-dom` para transiciones instantáneas sin recarga de página.
* **Rutas Dinámicas**: Páginas de detalle independientes (`/servicios/:serviceId`) que cargan dinámicamente la información, imágenes y subservicios de cada área técnica.
* **Diseño Premium y Responsivo**:
  * Menú móvil lateral deslizable (*Slide-in Drawer*) con efecto de cristal esmerilado translúcido (*glassmorphism*) uniforme.
  * Grilla responsiva híbrida (Grid + Flexbox) que centra de forma balanceada las 5 tarjetas de servicios en pantallas grandes, evitando espacios vacíos asimétricos.
  * Espaciados y márgenes optimizados debajo de la barra de navegación *sticky*.
* **Estandarización de Llamadas a la Acción**: Botones corporativos simplificados hacia el texto único "Cotizar Servicio" con enlaces dinámicos a WhatsApp.
* **Optimización SEO**:
  * Configuración del idioma a español (`lang="es"`).
  * Metadatos meta descriptivos y títulos enriquecidos para buscadores.
  * Etiquetas Open Graph (Facebook, WhatsApp, LinkedIn) y Twitter Cards integradas para previsualizaciones premium al compartir el enlace.
  * Favicon vectorial funcional utilizando el logo SVG del proyecto.
* **Calidad de Código**: Linter limpio libre de variables inactivas o importaciones no utilizadas de React (`eslint` con 0 problemas).

---

## 🛠️ Stack Tecnológico

* **Core**: [React 19](https://react.dev/) (Última versión mayor)
* **Entorno de Compilación**: [Vite 8](https://vite.dev/) (Rápido empaquetado y HMR instantáneo)
* **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/) (Motor CSS-first ultrarrápido)
* **Enrutador**: [React Router DOM v7](https://reactrouter.com/) (Manejo de navegación)
* **Linter**: [ESLint 10](https://eslint.org/) (Estándar de calidad de código)

---

## 📁 Estructura del Proyecto

```text
24-7-servicios-generales/
├── public/                 # Recursos públicos estáticos (Imágenes e Iconos)
│   ├── icons/              # Iconos de redes sociales y WhatsApp
│   └── imagenes/           # Fotos de portada y logotipo vectorial
├── src/
│   ├── components/         # Componentes modulares e interactivos de React
│   │   ├── Navbar.jsx           # Cabecera sticky con menú lateral deslizable
│   │   ├── Hero.jsx             # Portada con fondo e interactividad
│   │   ├── ServicesSection.jsx  # Sección de servicios en Landing (3 destacados)
│   │   ├── ServiceCard.jsx      # Tarjeta individual con enlaces dinámicos
│   │   ├── BenefitsSection.jsx  # Sección informativa de garantías
│   │   ├── Footer.jsx           # Pie de página responsivo centrado en 3 columnas
│   │   ├── AllServicesPage.jsx  # Pantalla completa de todos los servicios
│   │   └── ServiceDetailPage.jsx# Plantilla dinámica para detalles de servicios
│   ├── data/               # Base de datos local centralizada
│   │   └── servicesData.js      # Array estructurado de las 5 categorías técnicas
│   ├── App.jsx             # Enrutador principal y configuración de pantallas
│   ├── main.jsx            # Punto de entrada de React
│   └── index.css           # Configuración de Tailwind CSS v4 (@import)
├── index.html              # Archivo de entrada HTML con etiquetas SEO y Open Graph
├── package.json            # Configuración de scripts y dependencias
└── vite.config.js          # Configuración del entorno de Vite
```

---

## ⚙️ Instalación y Uso Local

Para levantar el proyecto en tu entorno local, sigue los siguientes pasos:

### 1. Clonar el repositorio y entrar al directorio
```bash
git clone <url-del-repositorio>
cd 24-7-servicios-generales
```

### 2. Instalar dependencias
Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu equipo, luego ejecuta:
```bash
npm install
```

### 3. Ejecutar servidor de desarrollo
Inicia el entorno local para previsualizar el sitio de forma interactiva (usualmente en `http://localhost:5173`):
```bash
npm run dev
```

### 4. Analizar la calidad del código (Linter)
Ejecuta el formateador de reglas estáticas para asegurar que todo el código cumpla con las mejores prácticas de React:
```bash
npm run lint
```

### 5. Compilar para Producción
Genera la carpeta optimizada y minificada `dist/` lista para ser desplegada en cualquier servidor de hosting estático:
```bash
npm run build
```
