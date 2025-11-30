#  Documentación técnica — `/api/productos`

## ¿Qué es `/api/productos`?

Es una ruta del backend que responde a solicitudes HTTP del tipo `GET`.  
Cuando el frontend hace una petición a `http://localhost:3000/api/productos`, este archivo se ejecuta y devuelve un listado de productos en formato JSON.

---

## ¿Qué hace el código?

1. **Crea un router de Express para definir rutas específicas**:
   ```js
   const express = require('express');
   const router = express.Router();
   ```

2. **Importa el modelo que se conecta con la base de datos y trae los productos**:

```js
const productosModel = require('../../models/productosModel');
```

3. **Importa Cloudinary para generar URLs de imágenes almacenadas en la nube**:
```js
const cloudinary = require('cloudinary').v2;
```

### Ruta GET /

1. **Define lo que pasa cuando alguien accede a /api/productos**:
- El servidor recibe una solicitud HTTP de tipo GET
- Se ejecuta la función asincrónica (async) Esto permite usar await para esperar resultados de la base de datos sin bloquear el servidor.
- req	Representa la solicitud del cliente (por ejemplo, el frontend o Postman).
- res	Representa la respuesta que el servidor va a enviar.

```js
router.get('/', async (req, res) => { ... });
```

2. **Llama a la función getTodos() del modelo para obtener todos los productos desde la base de datos**:
```js
let productos = await productosModel.getTodos();
```

3. **Recorre cada producto y transforma su campo imagen**:

Si tiene una imagen, genera una URL optimizada desde Cloudinary.

Si no tiene imagen, deja el campo vacío.

```js
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
```

4. **Devuelve el array de productos como respuesta en formato JSON**:
```js
res.json(productos);
```

5. **Manejo de errores**:
Si algo falla (por ejemplo, no se puede conectar a la base), devuelve un error 500.
```js
catch (error) {
  console.error('Error al obtener productos:', error.message);
  res.status(500).json({ error: 'Error interno del servidor' });
}
```