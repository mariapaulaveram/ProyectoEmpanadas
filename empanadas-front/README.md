# 🥟 Empanadas App — Frontend (React + Vite)

Este proyecto es la interfaz web para la gestión de pedidos de empanadas. Desarrollado con React y Vite, permite a los usuarios explorar el menú, personalizar su pedido, seleccionar tipo de entrega y confirmar la compra.  
Me inspiré en el diseño y experiencia de usuario de [menu.fu.do/more](https://menu.fu.do/more), adaptándolo a un enfoque gastronómico local.

---

##  Tecnologías utilizadas

- React
- Vite
- Axios
- React Router DOM
- CSS Modules
- Font Awesome (íconos)

---

##  Funcionalidades

- 📋 Catálogo de empanadas con imágenes y descripciones
- 🛒 Carrito interactivo con edición, eliminación y comentarios
- 🧮 Cálculo automático de subtotal, envío y total
- 🧑‍🍳 Modal para seleccionar sabores en docenas personalizadas
- ✏️ Edición de productos antes de confirmar el pedido
- 📬 Formulario de cliente con validación y opciones de entrega
- 📤 Envío del pedido al backend vía API REST
- 📧 Confirmación por email (desde el backend)
- 📜 Scroll automático al navegar entre rutas

---

## 📁 Estructura del proyecto

```plaintext
├── public/
│   └── logo.png                     # Logo del negocio e imagenes varias
│
├── src/
│   ├── componentes/                 # Componentes reutilizables
│   │   ├── layouts/                 # Layout general (estructura base)
│   │   │   ├── Layout.jsx           # Componente principal de layout
│   │   │   ├── Header.jsx           # Encabezado del sitio (navbar)
│   │   │   └── Footer.jsx           # Pie de página
│   │   ├── CarritoItem.jsx         # Ítem individual en el carrito
│   │   ├── CarritoResumen.jsx      # Resumen de precios y botón de continuar
│   │   ├── DocenaEmpanadasModal.jsx# Modal para elegir sabores de docena
│   │   ├── EditarProductoModal.jsx # Modal para editar cantidad y comentario
│   │   ├── EntregaSelector.jsx     # Selector de tipo de entrega
│   │   ├── FormularioPedido.jsx    # Formulario de datos del cliente
│   │   └── ProductoCard.jsx        # Tarjeta de producto en el catálogo
│
│   ├── paginas/                    # Páginas principales
│   │   └── Home.jsx                # Página principal con menú y carrito
│
│   ├── styles/                     # Estilos con CSS Modules
│   │   ├── Home.module.css
│   │   ├── CarritoItem.module.css
│   │   ├── CarritoResumen.module.css
│   │   ├── DocenaEmpanadas.module.css
│   │   ├── EditarProductoModal.module.css
│   │   ├── EntregaSelector.module.css
│   │   ├── FormularioPedido.module.css
│   │   ├── Header.module.css
│   │   ├── Footer.module.css
│   │   └── ProductoCard.module.css
│   │
│   ├── App.jsx                     # Configuración de rutas
│   └── main.jsx                    # Punto de entrada de la app
│
├── .gitignore                      # Archivos y carpetas ignoradas por Git
├── README.md                       # Documentación del proyecto
└── index.html                      # HTML base para Vite


```

##  Cómo correr el proyecto

1. Cloná el repositorio:   verrrr 

```bash
git clone https://github.com/mariapaulaveram/empanadas-front.git
```

2. Requisitos previos

- Node.js (versión recomendada: 18 o superior)
- npm (v9 o superior)

3. Instalá las dependencias
```bash
npm install
```

4. Iniciá el servidor de desarrollo
```bash
npm run dev
```

5. Accedé en tu navegador a

http://localhost:5173

## Funcionalidades para el usuario

La aplicación permite al cliente realizar las siguientes acciones:

### Gestión del pedido

- Visualizar el menú de empanadas con imágenes y descripciones  
- Agregar productos al carrito con cantidad y comentarios  
- Seleccionar sabores personalizados en docenas mixtas  
- Editar o eliminar ítems del carrito antes de confirmar  
- Ver resumen del pedido con subtotal, envío y total

### Confirmación del pedido

- Completar formulario con datos personales  
- Elegir tipo de entrega: domicilio o retiro en el local  
- Enviar el pedido al backend vía API REST  
- Recibir confirmación visual (y por email desde el backend)


## Rutas de la aplicación
La navegación está gestionada con react-router-dom. Estas son las rutas principales:

| Ruta | Componente | Función principal                     |
|------|------------|---------------------------------------|
| `/`  | `Home`     | Página principal con menú y carrito   |



##  Página principal

Al ingresar al sitio, el usuario ve:

- El selector de tipo de entrega  
- El catálogo de empanadas en formato grid  
- Un carrito interactivo con resumen y opciones de edición  
- Un formulario emergente para confirmar el pedido



## Créditos
Desarrollado por MPVM — 2025 Inspirado en menu.fu.do/more


##  Futuras mejoras

- Integración con Mercado Pago para pagos online  
- Mejoras en la seguridad del sistema  
- Ampliar el menú con nuevos sabores y productos   
- Validación más robusta en el formulario de cliente  
- Animaciones suaves y mejoras de accesibilidad


## Licencia

Este proyecto está bajo la Licencia MIT. Podés usarlo, modificarlo y distribuirlo libremente, siempre que mantengas los créditos originales.  
Ver el archivo [LICENSE](./LICENSE) para más detalles.
