const pool = require('./bd');

// Crear un nuevo pedido
async function crearPedido(tipoEntrega, cliente, subtotal, envio, total, fecha, estado) {
  const query = `
    INSERT INTO pedidos (
      tipo_entrega,
      nombre_cliente, email_cliente, telefono_cliente,
      direccion, piso_depto, comentarios, forma_pago,
      subtotal, envio, total, fecha, estado
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const result = await pool.query(query, [
    tipoEntrega,
    cliente.nombre,
    cliente.email,
    cliente.telefono,
    cliente.direccion || null,
    cliente.pisoDepto || null,
    cliente.comentarios,
    cliente.formaPago,
    subtotal,
    envio,
    total,
    fecha,
    estado
  ]);

  return result.insertId;
}


// Crear los detalles del pedido
async function crearDetallePedido(pedidoId, productos) {
    const query = `
    INSERT INTO detalle_pedido (pedido_id, producto_id, nombre_producto, cantidad, precio_unitario, subtotal, comentario)
    VALUES ?
  `;
    const valores = productos.map((p) => [
        pedidoId,
        p.id,
        p.nombre,
        p.cantidad,
        p.precioUnitario,
        p.subtotal,
        p.comentario
    ]);
    await pool.query(query, [valores]);
}

// Ver todos los pedidos
async function getPedidos() {
    const query = 'SELECT * FROM pedidos ORDER BY fecha DESC';
    const rows = await pool.query(query);
    return rows;
}

// Ver detalles de un pedido
async function getDetallePedido(pedidoId) {
    const query = 'SELECT * FROM detalle_pedido WHERE pedido_id = ?';
    const rows = await pool.query(query, [pedidoId]);
    return rows;
}

async function getPedidoById(pedidoId) {
  const query = 'SELECT * FROM pedidos WHERE id = ?';
  const rows = await pool.query(query, [pedidoId]);
  return rows[0]; // devuelve solo uno
}

async function actualizarEstadoPedido(pedidoId, nuevoEstado) {
  const query = 'UPDATE pedidos SET estado = ? WHERE id = ?';
  await pool.query(query, [nuevoEstado, pedidoId]);
}


module.exports = {
    crearPedido,
    crearDetallePedido,
    getPedidos,
    getDetallePedido,
    getPedidoById,
    actualizarEstadoPedido
};
