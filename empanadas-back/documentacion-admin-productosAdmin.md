# Documentación técnica — /admin/productosAdmin

## ¿Qué es /admin/productosAdmin?
Es una ruta protegida del backend que permite a los administradores con rol productos gestionar el catálogo de productos. Desde esta interfaz se puede:

- Ver todos los productos
- Agregar nuevos productos
- Modificar productos existentes
- Eliminar productos
- Subir y eliminar imágenes con Cloudinary

## Requiere sesión con rol productos
Un middleware verifica que el usuario tenga el rol adecuado. Si no lo tiene, se redirige al dashboard general /admin.

```js
router.use((req, res, next) => {
  if (req.session.rol !== 'productos') {
    return res.redirect('/admin');
  }
  next();
});
```

## Funcionalidades principales
Esta ruta permite al administrador con rol productos gestionar el catálogo completo. Las acciones disponibles son:

- Listar productos: muestra todos los productos con sus imágenes en miniatura.
- Agregar producto: permite cargar nombre, descripción, precio e imagen (subida a Cloudinary).
- Modificar producto: carga los datos actuales, permite editar y reemplazar o eliminar la imagen.
- Eliminar producto: borra el producto y su imagen asociada en Cloudinary si existe.

Cada acción tiene su propia ruta (/agregar, /modificar/:id, /eliminar/:id) y está conectada a vistas específicas como adminProductos, agregarProducto y modificarProducto.

## Manejo de imágenes

- Se usa express-fileupload para recibir archivos.
- Se usa cloudinary.uploader.upload() para subir imágenes.
- Se usa cloudinary.uploader.destroy() para eliminar imágenes antiguas.

## ¿Qué hace cada ruta?

***Listar productos***

```js
router.get('/', async (req, res) => {
  const productos = await productosModel.getTodos();
  res.render('adminProductos', { persona: req.session.nombre, productos });
});
```

***Agregar producto***

```js
router.get('/agregar', (req, res) => {
  res.render('agregarProducto');
});

router.post('/agregar', async (req, res) => {
  // Sube imagen si existe, guarda producto
});
```

***Modificar producto***
```js
router.get('/modificar/:id', async (req, res) => {
  // Carga datos del producto y muestra formulario
});

router.post('/modificar', async (req, res) => {
  // Actualiza datos, reemplaza o elimina imagen
});
```

***Eliminar producto***
```js
router.get('/eliminar/:id', async (req, res) => {
  // Elimina producto y su imagen si está en Cloudinary
});
```

