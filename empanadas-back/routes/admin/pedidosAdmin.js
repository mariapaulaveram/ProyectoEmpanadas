const express = require('express');
const router = express.Router();
const { getPedidos, getDetallePedido, getPedidoById, actualizarEstadoPedido } = require('../../models/PedidosModel');

// Vista principal del panel de pedidos
router.get('/', async (req, res) => {
  try {
    const pedidos = await getPedidos();
    res.render('adminPedidos', { pedidos });
  } catch (error) {
    res.status(500).send('Error al cargar pedidos');
  }
});

// Vista del detalle de un pedido
router.get('/:id', async (req, res) => {
  try {
    const pedido = await getPedidoById(req.params.id);
    const detalle = await getDetallePedido(req.params.id);

    if (!pedido) {
      return res.status(404).render('error', { message: 'Pedido no encontrado' });
    }

    // 🕒 Formatear la fecha de forma sencilla
    pedido.fecha_formateada = new Date(pedido.fecha).toLocaleString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    res.render('adminDetalle', { pedido, detalle });
  } catch (error) {
    console.error('Error al cargar detalle:', error);
    res.status(500).send('Error al cargar detalle');
  }
});


// Actualizar estado del pedido
router.post('/:id/estado', async (req, res) => {
  const pedidoId = req.params.id;
  const nuevoEstado = req.body.estado;

  console.log('📥 POST recibido para actualizar estado');
  console.log('🆔 ID del pedido:', pedidoId);
  console.log('📌 Nuevo estado:', nuevoEstado);

  try {
    await actualizarEstadoPedido(pedidoId, nuevoEstado);
    console.log('✅ Estado actualizado correctamente');
    res.redirect(`/admin/pedidosAdmin/${pedidoId}`);
  } catch (error) {
    console.error('❌ Error al actualizar estado:', error);
    res.status(500).send('No se pudo actualizar el estado');
  }
});





module.exports = router;
