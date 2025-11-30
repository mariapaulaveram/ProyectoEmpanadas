# Proyecto: Empanadas — E-commerce Local
Este proyecto es una solución integral para la gestión de pedidos de empanadas en un entorno local. Incluye tanto la interfaz web (frontend) como el servidor y base de datos (backend), ofreciendo una experiencia completa para usuarios y administradores.

Frontend: desarrollado con React + Vite, permite explorar el menú, personalizar pedidos, elegir tipo de entrega y confirmar la compra.

Backend: construido con Node.js + Express, conectado a MySQL, gestiona productos, pedidos y usuarios. Incluye autenticación por roles, vistas protegidas y una API REST para el frontend.

La inspiración del diseño proviene de menu.fu.do/more, adaptado a un enfoque gastronómico local.

## Objetivo
Crear una plataforma web para que los clientes puedan:

Ver el menú de empanadas

Filtrar por tipo (carne, verdura, vegana, etc.)

Armar su pedido desde el carrito

Simular el checkout (con pago en efectivo o transferencia)

Y que el administrador pueda gestionar el menú y los pedidos

# Frontend (React + Vite)
## Funcionalidades
Catálogo de empanadas con imagen, descripción y precio

Filtros por categoría (carne, pollo, queso, vegana, dulces)

Carrito persistente con cantidad por sabor

Checkout simulado con selección de método de pago

Formulario de contacto o sugerencias

Panel de administración (solo si querés incluirlo en el frontend)


# Backend (Express)
## Funcionalidades
CRUD de productos (empanadas): nombre, descripción, precio, categoría, imagen

Gestión de usuarios: login, registro, historial de pedidos

API de pedidos: crear, listar, actualizar estado (pendiente, entregado)

Simulación de pago: efectivo, transferencia, o QR

Envío de confirmación por email (opcional con Nodemailer)


# Base de datos (MySQL)
Tabla productos (empanadas)

Tabla usuarios

Tabla pedidos

Tabla detalle_pedido (empanadas por pedido)




# Frontend – React + Vite (empanadas-front)
## Estructura sugerida
empanadas-front/
├── public/
│   └── logo.png
├── src/
│   ├── componentes/
│   │   ├── ProductoCard.jsx        # Tarjeta de empanada
│   │   ├── FiltroCategorias.jsx    # Filtros por tipo
│   │   ├── Carrito.jsx             # Vista del carrito
│   │   ├── CheckoutForm.jsx        # Formulario de compra
│   │   └── Navbar.jsx              # Navegación
│   ├── paginas/
│   │   ├── Home.jsx                # Catálogo principal
│   │   ├── Checkout.jsx            # Vista de pago
│   │   └── AdminPanel.jsx          # Panel de administración
│   ├── context/
│   │   └── CarritoContext.jsx      # Estado global del carrito
│   ├── styles/
│   │   └── estilos.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css


## Funcionalidades clave
Mostrar empanadas desde la API

Filtrar por categoría

Agregar al carrito

Persistencia con localStorage

Simulación de pago

Envío de pedido al backend


# Backend – Express (empanadas-back)
empanadas-back/
├── app.js
├── routes/
│   ├── productos.js       # CRUD de empanadas
│   ├── pedidos.js         # Crear y listar pedidos
│   └── usuarios.js        # Login y registro
├── models/
│   ├── productoModel.js
│   ├── pedidoModel.js
│   └── usuarioModel.js
├── controllers/
│   ├── productoController.js
│   ├── pedidoController.js
│   └── usuarioController.js
├── utils/
│   └── mailer.js          # Confirmación por email (opcional)
├── .env
├── package.json
└── README.md

## Funcionalidades clave
API REST para productos, pedidos y usuarios

Validación de stock y duplicados

Simulación de pago

Confirmación por email (opcional)

Panel de administración protegido