# Documentación técnica — /api/pedidos

## ¿Qué es /api/pedidos?
Es una ruta del backend que permite crear pedidos, consultarlos y ver sus detalles. Además, envía un correo de confirmación al cliente cuando se registra un nuevo pedido.

## ¿Qué hace el código?

1. ***Crea un router de Express***:
  ```js
  const express = require('express');
  const router = express.Router();


2. ***Carga variables de entorno y configura el envío de correos con Nodemailer***:
  -Usa Mailtrap en desarrollo (ENV=dev)
  -Usa Gmail en producción
  ```js
  const nodemailer = require('nodemailer');
  const usarMailtrap = process.env.ENV === 'dev';
  const transporter = nodemailer.createTransport(usarMailtrap ? { ... } : { ... });


3. ***Importa funciones del modelo de pedidos***:
  ```js
  const {
  crearPedido,
  crearDetallePedido,
  getPedidos,
  getDetallePedido
  } = require('../../models/PedidosModel');


### Ruta POST /api/pedidos

***¿Qué hace?***
  -Recibe un pedido desde el frontend con datos del cliente, productos, totales, etc.
  -Valida los datos para asegurar que estén completos y correctos.
  -Guarda el pedido en la base de datos usando crearPedido() y crearDetallePedido().
  -Genera un correo HTML con el resumen del pedido.
  -Envía el correo al cliente usando Nodemailer.
  -Devuelve una respuesta JSON con el pedidoId.


***Validación de datos***:
```js
if (!cliente?.nombre || !cliente?.email || !Array.isArray(productos) || productos.length === 0) {
  return res.status(400).json({ error: 'Datos incompletos o inválidos en el pedido' });
  }
  ```

***Envío de correo***:
```js
  transporter.sendMail(mailOptions, (error, info) => {
  if (error) console.error('❌ Error al enviar email:', error);
  else console.log('📧 Email enviado:', info.response);
  });
```

### Ruta GET /api/pedidos
Devuelve un listado de todos los pedidos registrados.
```js
  router.get('/', async (req, res) => {
  const pedidos = await getPedidos();
  res.json(pedidos);
});
```

### Ruta GET /api/pedidos/:id/detalle
Devuelve el detalle de un pedido específico (productos, cantidades, comentarios).
```js
  router.get('/:id/detalle', async (req, res) => {
  const detalle = await getDetallePedido(req.params.id);
  res.json(detalle);
  });
```

## Manejo de errores
Todas las rutas tienen bloques try/catch para capturar errores y devolver respuestas HTTP adecuadas (500 en caso de fallos).



