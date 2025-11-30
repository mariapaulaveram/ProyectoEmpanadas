const express = require('express');
const router = express.Router();
const pool = require('../../models/bd');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
  res.render('adminLogin');
});

router.post('/', async (req, res) => {
  const { usuario, clave } = req.body;

  try {
    const query = 'SELECT * FROM usuarios WHERE usuario = ?';
    const rows = await pool.query(query, [usuario.trim()]);

    if (rows.length === 0) {
      return res.render('adminLogin', { error: 'Usuario o clave incorrectos' });
    }

    const usuarioDB = rows[0];
    const match = await bcrypt.compare(clave, usuarioDB.clave);

    if (match) {
      req.session.rol = usuarioDB.rol;
      return res.redirect('/admin');
    }

    res.render('adminLogin', { error: 'Usuario o clave incorrectos' });
  } catch (error) {
    console.error('Error al consultar la base de datos:', error);
    res.render('adminLogin', { error: 'Error interno del servidor' });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/admin/login');
  });
});

module.exports = router;





