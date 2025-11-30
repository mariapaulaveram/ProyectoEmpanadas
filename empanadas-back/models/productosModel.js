const pool = require('./bd');



async function getTodos() {
  const result = await pool.query('SELECT * FROM productos');
  console.log('🔍 Resultado completo del query:', result);
  return result;
}

async function getPorId(id) {
  const result = await pool.query('SELECT * FROM productos WHERE id = ?', [id]);
  console.log('🔍 Producto encontrado por ID:', id, result[0]); // Verificación
  return result[0]; // ✅ accedés al primer objeto del array
}


async function agregar(data) {
  const query = 'INSERT INTO productos (nombre, descripcion, precio, imagen) VALUES (?, ?, ?, ?)';
  await pool.query(query, [data.nombre, data.descripcion, data.precio, data.imagen]);
}

async function modificar(data) {
  const query = 'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, imagen = ? WHERE id = ?';
  await pool.query(query, [data.nombre, data.descripcion, data.precio, data.imagen, data.id]);
}

async function eliminar(id) {
  const query = 'DELETE FROM productos WHERE id = ?';
  await pool.query(query, [id]);
}


module.exports = { getTodos, getPorId, agregar, modificar, eliminar};


