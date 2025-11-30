const express = require('express');
const router = express.Router();
const productosModel = require('../../models/productosModel');
const cloudinary = require('../../config/cloudinary');
const util = require('util');
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);
const fileUpload = require('express-fileupload');

router.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

// Middleware de rol
router.use((req, res, next) => {
  if (req.session.rol !== 'productos') {
    return res.redirect('/admin');
  }
  next();
});

// Listar productos
router.get('/', async (req, res) => {
  let productos = await productosModel.getTodos();

  productos = productos.map(p => {
    return {
      ...p,
      imagen: p.imagen ? cloudinary.image(p.imagen, { width: 100, height: 100, crop: 'fill' }) : ''
    };
  });

  res.render('adminProductos', {
    persona: req.session.nombre,
    productos
  });
});

// Formulario agregar
router.get('/agregar', (req, res) => {
  res.render('agregarProducto');
});

// Procesar agregar
router.post('/agregar', async (req, res) => {
  try {
    let imagen = '';
    if (req.files && req.files.foto) {
      const archivo = req.files.foto;
      imagen = (await uploader(archivo.tempFilePath)).public_id;
    }

    await productosModel.agregar({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio: req.body.precio,
      imagen
    });

    res.redirect('/admin/productosAdmin');
  } catch (error) {
    console.log(error);
    res.render('agregarProducto', {
      error: true,
      message: 'No se pudo agregar el producto'
    });
  }
});


// Formulario modificar
router.get('/modificar/:id', async (req, res) => {
  console.log('🛠️ ID recibido en la ruta:', req.params.id);
  const producto = await productosModel.getPorId(req.params.id);

  if (!producto) {
    return res.status(404).send('Producto no encontrado');
  }

  const productoProcesado = {
    ...producto,
    imagen_id: producto.imagen,
    imagen_html: producto.imagen
      ? cloudinary.image(producto.imagen, { width: 100, height: 100, crop: 'fill' })
      : ''
  };

  res.render('modificarProducto', { producto: productoProcesado });
});


// Procesar modificar
router.post('/modificar', async (req, res) => {
  try {
    let imagen = req.body.img_original;
    let borrar_img_vieja = false;

    if (req.body.img_delete === "1") {
      imagen = null;
      borrar_img_vieja = true;
    } else if (req.files && req.files.foto) {
      const archivo = req.files.foto;
      imagen = (await uploader(archivo.tempFilePath)).public_id;
      borrar_img_vieja = true;
    }

    if (borrar_img_vieja && req.body.img_original) {
      await destroy(req.body.img_original);
    }

    await productosModel.modificar({
      id: req.body.id,
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio: req.body.precio,
      imagen
    });

    res.redirect('/admin/productosAdmin');
  } catch (error) {
    console.log(error);
    res.render('modificarProducto', {
      error: true,
      message: 'No se pudo modificar el producto'
    });
  }
});

/*eliminar producto */

router.get('/eliminar/:id', async (req, res) => {
  try {
    const producto = await productosModel.getPorId(req.params.id);

    if (!producto) {
      return res.status(404).send('Producto no encontrado');
    }

    // Si tiene imagen en Cloudinary, eliminarla
    if (producto.imagen && !producto.imagen.startsWith('/images/')) {
      await destroy(producto.imagen);
      console.log('🧹 Imagen eliminada de Cloudinary:', producto.imagen);
    }

    await productosModel.eliminar(req.params.id);
    res.redirect('/admin/productosAdmin');
  } catch (error) {
    console.log('❌ Error al eliminar producto:', error);
    res.status(500).send('Error al eliminar el producto');
  }
});



module.exports = router;





