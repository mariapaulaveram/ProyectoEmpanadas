# 🥟 Empanadas Backend
Este proyecto representa el backend de una aplicación de gestión de pedidos y productos de empanadas. Está construido con Node.js, Express, y utiliza MySQL como base de datos. Incluye autenticación por roles, vistas protegidas, y una API para el frontend.

## Instalación
git clone https://github.com/tuusuario/empanadas-back.git VER
cd empanadas-back
npm install


##  Configuración
Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=empanadasdb
SESSION_SECRET=azzertotaucrot
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
```

##  Scripts

```bash
npm start
```
Usa nodemon para levantar el servidor desde ./bin/www.

## Estructura del proyecto
empanadas-back/
├── bin/
│   └── www
├── models/
│   ├── bd.js
│   ├── productosModel.js
│   └── pedidosModel.js
├── routes/
│   ├── admin/
│   │   ├── index.js
│   │   ├── login.js
│   │   ├── productosAdmin.js
│   │   └── pedidosAdmin.js
│   ├── api/
│   │   ├── productos.js
│   │   └── pedidos.js
│   └── users.js
├── views/
│   └── *.hbs
├── public/
│   └── images

├── .env
├── app.js
└── package.json


## Autenticación y roles
Se utiliza express-session para manejar sesiones.

Los roles permitidos son pedidos y productos.

Las rutas protegidas redirigen al login si el rol no es válido.


## Rutas del servidor

El backend expone distintas rutas agrupadas en dos grandes categorías: **públicas** (accesibles sin autenticación) y **protegidas** (requieren sesión con rol específico).

###  Rutas públicas

Estas rutas no requieren autenticación y están disponibles para el frontend o usuarios externos:

| Ruta             | Descripción                                 |
|------------------|---------------------------------------------|
| `/admin/login`   | Página de login para administradores        |
| `/users`         | Endpoints relacionados a usuarios           |
| `/api/productos` | API REST para consultar productos           |
| `/api/pedidos`   | API REST para enviar y consultar pedidos    |

###  Rutas protegidas (requieren sesión con rol)

Estas rutas están protegidas por middleware y solo accesibles si el usuario tiene un rol válido (`pedidos` o `productos`):

| Ruta                      | Rol requerido | Descripción                          |
|---------------------------|---------------|--------------------------------------|
| `/admin`                  | cualquiera    | Dashboard principal                  |
| `/admin/productosAdmin`   | `productos`   | Gestión de productos (CRUD)          |
| `/admin/pedidosAdmin`     | `pedidos`     | Gestión de pedidos (CRUD y estado)   |

>  Si el usuario no tiene el rol adecuado, será redirigido automáticamente al login.



##  Dependencias clave

- **express**: Framework principal para construir el servidor y manejar rutas.
- **hbs**: Motor de plantillas para renderizar vistas en el backend.
- **mysql2**: Cliente para conectarse y ejecutar consultas en la base de datos MySQL.
- **dotenv**: Permite cargar variables de entorno desde un archivo `.env`.
- **express-session**: Manejo de sesiones de usuario en el servidor.

- **bcrypt**: Encriptación segura de contraseñas antes de almacenarlas en la base de datos.

- **cloudinary**: Servicio para subir, almacenar y manipular imágenes en la nube.

- **nodemailer**: Envío de correos electrónicos desde el servidor (por ejemplo, confirmaciones o alertas).

- **cors**: Middleware para habilitar solicitudes entre dominios (Cross-Origin Resource Sharing).
- **cookie-parser**: Analiza cookies en las solicitudes HTTP.
- **morgan**: Middleware para registrar solicitudes HTTP en consola (útil para debugging).


## Base de datos
La conexión se configura en models/bd.js usando mysql2. Los modelos productosModel.js y pedidosModel.js manejan las operaciones CRUD.

## Confirmación por email
El envío del correo de confirmación al cliente se realiza desde el backend, utilizando la librería nodemailer. Cuando el frontend envía el pedido vía API (POST /api/pedidos), el backend lo guarda en la base de datos y luego dispara el correo de confirmación con los datos del pedido.

El frontend solo recopila la información y la envía; el backend se encarga de procesarla y enviar el email.

## Manejo de errores
Errores 404 y 500 renderizados con vistas HBS.

Logs en consola con morgan.


## Roles: local y gerente
El sistema utiliza dos roles definidos en la tabla usuarios:

Usuario	Rol	Acceso a rutas protegidas
local	pedidos	/admin/pedidosAdmin → gestión de pedidos
gerente	productos	/admin/productosAdmin → gestión de productos
El rol pedidos permite ver, editar y actualizar pedidos realizados por los clientes.

El rol productos permite administrar el catálogo de empanadas: agregar, editar o eliminar productos.

Ambos roles acceden al dashboard general (/admin), pero cada uno ve solo lo que le corresponde según su rol.

## 👤 Inserción de usuarios de prueba
Para insertar usuarios de prueba en la base de datos, ejecutá el script `insertUsuarios.js`. Este script realiza las siguientes acciones:

- Limpia la tabla `usuarios` (opcional).
- Inserta dos usuarios iniciales:
  - **local** con clave `1234` y rol `pedidos`
  - **gerente** con clave `abcd` y rol `productos`
- Encripta las contraseñas usando `bcrypt` antes de guardarlas.

### Ejecución
```bash
node insertUsuarios.js
```

## Créditos
Desarrollado por MPVM — 2025 Inspirado en menu.fu.do/more


##  Futuras mejoras
- Implementar autenticación con JWT para reforzar la seguridad.
- Agregar panel de administración para gestionar usuarios y roles.
- Registrar historial de pedidos y cambios en productos.
- Integrar Mercado Pago para pagos online.
- Enviar correos con diseño HTML y resumen del pedido.
- Validar campos del formulario en el backend.
- Internacionalización (i18n) para soporte multilenguaje.
- Tests automatizados con Jest o Mocha.
- Despliegue en servicios como Render, Vercel o Railway.


## Licencia

Este proyecto está bajo la Licencia MIT. Podés usarlo, modificarlo y distribuirlo libremente, siempre que mantengas los créditos originales.  
Ver el archivo [LICENSE](./LICENSE) para más detalles.