# Documentación técnica — /admin/pedidosAdmin

## ¿Qué es /admin/pedidosAdmin?
Es una ruta protegida del backend que permite a los administradores con rol pedidos gestionar los pedidos realizados por los clientes. Desde esta interfaz se puede:

- Ver el listado completo de pedidos
- Consultar el detalle de cada pedido
- Actualizar el estado de un pedido (ej. "pendiente", "en preparación", "entregado")

## Requiere sesión con rol pedidos
Esta ruta está protegida por middleware y solo accesible si el usuario tiene el rol adecuado. Si no tiene sesión activa o el rol correcto, será redirigido al login.


## Ruta GET /admin/pedidosAdmin

 ***¿Qué hace?***
- Consulta todos los pedidos desde la base de datos usando getPedidos()
- Renderiza la vista adminPedidos.hbs con el listado

```js
router.get('/', async (req, res) => {
  const pedidos = await getPedidos();
  res.render('adminPedidos', { pedidos });
});
```

## Ruta GET /admin/pedidosAdmin/:id

***¿Qué hace?***
- Consulta un pedido específico por su ID (getPedidoById)
- Obtiene el detalle del pedido (getDetallePedido)
- Formatea la fecha para mostrarla en formato legible
- Renderiza la vista adminDetalle.hbs con los datos

```js
router.get('/:id', async (req, res) => {
  const pedido = await getPedidoById(req.params.id);
  const detalle = await getDetallePedido(req.params.id);

  pedido.fecha_formateada = new Date(pedido.fecha).toLocaleString('es-AR', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });

  res.render('adminDetalle', { pedido, detalle });
});
```

## Ruta POST /admin/pedidosAdmin/:id/estado

***¿Qué hace?***
- Recibe el nuevo estado del pedido desde un formulario
- Actualiza el estado en la base de datos (actualizarEstadoPedido)
- Redirige nuevamente al detalle del pedido

```js
router.post('/:id/estado', async (req, res) => {
  const pedidoId = req.params.id;
  const nuevoEstado = req.body.estado;

  await actualizarEstadoPedido(pedidoId, nuevoEstado);
  res.redirect(`/admin/pedidosAdmin/${pedidoId}`);
});
```

## ¿Qué permite hacer esta ruta?

| Acción                  | Resultado                                                  |
|-------------------------|------------------------------------------------------------|
| Ver todos los pedidos   | Renderiza `adminPedidos` con el listado                    |
| Ver detalle de un pedido| Muestra `adminDetalle` con productos, fecha y cliente      |
| Cambiar estado          | Actualiza el estado y redirige al detalle actualizado      |
