const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const rol = req.session.rol;

  if (rol === 'pedidos') return res.redirect('/admin/pedidosAdmin');
  if (rol === 'productos') return res.redirect('/admin/productosAdmin');

  res.redirect('/admin/login');
});

module.exports = router;
