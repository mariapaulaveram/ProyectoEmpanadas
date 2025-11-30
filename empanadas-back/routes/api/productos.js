const express = require('express');
const router = express.Router();
const productosModel = require('../../models/productosModel');
const cloudinary = require('cloudinary').v2;

router.get('/', async (req, res) => {
  try {
    let productos = await productosModel.getTodos();

    productos = productos.map(p => {
      return {
        ...p,
        imagen: p.imagen
          ? cloudinary.url(p.imagen, {
            transformation: [
              { width: 400, height: 400, crop: 'fill' },
              { fetch_format: 'auto' }
            ]
          })
          : ''

      };
    });

    res.json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;

