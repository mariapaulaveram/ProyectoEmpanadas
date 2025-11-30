require('dotenv').config(); // 👈 Carga las variables del .env

const bcrypt = require('bcrypt');
const pool = require('./models/bd'); // 👈 Reutiliza tu bd.js

(async () => {
  try {
    const localHash = await bcrypt.hash('1234', 10);
    const gerenteHash = await bcrypt.hash('abcd', 10);

    await pool.query('DELETE FROM usuarios'); // Opcional: limpia la tabla

    await pool.query(
      'INSERT INTO usuarios (usuario, clave, rol) VALUES (?, ?, ?)',
      ['local', localHash, 'pedidos']
    );

    await pool.query(
      'INSERT INTO usuarios (usuario, clave, rol) VALUES (?, ?, ?)',
      ['gerente', gerenteHash, 'productos']
    );

    console.log('✅ Usuarios insertados con bcrypt');
    process.exit();
  } catch (error) {
    console.error('❌ Error al insertar usuarios:', error);
    process.exit(1);
  }
})();
