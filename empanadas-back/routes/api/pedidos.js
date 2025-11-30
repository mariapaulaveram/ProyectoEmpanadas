const express = require('express');
const router = express.Router();
require('dotenv').config();
const nodemailer = require('nodemailer');

const {
    crearPedido,
    crearDetallePedido,
    getPedidos,
    getDetallePedido
} = require('../../models/PedidosModel');

// Configuración dinámica del transporte según entorno
const usarMailtrap = process.env.ENV === 'dev';

const transporter = nodemailer.createTransport(
  usarMailtrap
    ? {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASS
        }
      }
    : {
        service: 'gmail',
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
      }
);

// Generador de HTML para el correo
function generarHTMLDelPedido(pedido) {
  return `
    <h2 style="color:#ff5023; ">Gracias por tu pedido, ${pedido.cliente.nombre}!</h2>
    <p><strong>Forma de entrega:</strong> ${pedido.tipoEntrega}</p>
    <p><strong>Total a pagar:</strong> $${pedido.total}</p>
    <h3>Detalle:</h3>
    <ul>
      ${pedido.productos.map(p => `
        <li>
          ${p.cantidad} x ${p.nombre} ($${p.precioUnitario})<br/>
          Comentario: ${p.comentario || '—'}
        </li>
      `).join('')}
    </ul>
    <p><strong>Fecha:</strong> ${pedido.fecha}</p>
  `;
}

// Ruta principal para crear pedido
router.post('/', async (req, res) => {
  const { cliente, productos, subtotal, envio, total, fecha, estado, tipoEntrega } = req.body;

  // Validación básica
  if (
    !cliente?.nombre ||
    !cliente?.email ||
    !cliente?.telefono ||
    !tipoEntrega ||
    !Array.isArray(productos) ||
    productos.length === 0 ||
    typeof subtotal !== 'number' ||
    typeof total !== 'number'
  ) {
    return res.status(400).json({ error: 'Datos incompletos o inválidos en el pedido' });
  }

  try {
    const pedidoId = await crearPedido(tipoEntrega, cliente, subtotal, envio, total, fecha, estado);
    await crearDetallePedido(pedidoId, productos);

    // Armar objeto completo para el email
    const pedido = {
      cliente,
      productos,
      subtotal,
      envio,
      total,
      fecha,
      tipoEntrega
    };

    // Opciones del correo
    const mailOptions = {
      from: '"Buen Pastor Hotel" <buenpastorhotel@gmail.com>',
      to: cliente.email,
      subject: 'Confirmación de tu pedido',
      html: generarHTMLDelPedido(pedido)
    };

    // Enviar correo
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('❌ Error al enviar email:', error);
      } else {
        console.log('📧 Email enviado:', info.response);
      }
    });

    res.status(201).json({ mensaje: '✅ Pedido guardado con éxito', pedidoId });
  } catch (error) {
    console.error('❌ Error al guardar pedido:', error);
    res.status(500).json({ error: 'Error al guardar el pedido' });
  }
});

// Otras rutas
router.get('/', async (req, res) => {
  try {
    const pedidos = await getPedidos();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener pedidos' });
  }
});

router.get('/:id/detalle', async (req, res) => {
  try {
    const detalle = await getDetallePedido(req.params.id);
    res.json(detalle);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener detalle del pedido' });
  }
});

module.exports = router;

