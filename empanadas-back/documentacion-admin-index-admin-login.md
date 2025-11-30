# Documentación técnica — /admin (Dashboard principal)

## ¿Qué es /admin?
Es la ruta raíz protegida del panel de administración. Su función principal es redirigir al área correspondiente según el rol del usuario autenticado (pedidos o productos).

## Requiere sesión activa
Esta ruta no muestra contenido directamente, sino que verifica el rol guardado en la sesión (req.session.rol) y redirige al módulo adecuado:

- Si el rol es pedidos, redirige a /admin/pedidosAdmin
- Si el rol es productos, redirige a /admin/productosAdmin
- Si no hay rol válido, redirige al login (/admin/login)

## ¿Cómo funciona el código?
```js
  router.get('/', (req, res) => {
  const rol = req.session.rol;

  if (rol === 'pedidos') return res.redirect('/admin/pedidosAdmin');
  if (rol === 'productos') return res.redirect('/admin/productosAdmin');

  res.redirect('/admin/login');
  });
```

1. Lee el rol desde la sesión:
```js
    const rol = req.session.rol;
```

2. Redirige según el rol:

- Si el rol es válido, lleva al módulo correspondiente.
- Si no hay sesión o el rol no está definido, el usuario es redirigido al login.

3. Evita acceso directo sin autenticación:

- No renderiza vistas ni devuelve datos.
- Solo actúa como puerta de entrada inteligente al panel admin.


------------------------------------------------------------------------------------------------------


# Documentación técnica — /admin/login
Este archivo gestiona el sistema de autenticación para administradores.

## ¿Qué es /admin/login?
Es la ruta de acceso al panel de administración. Permite que los usuarios con rol válido (productos o pedidos) inicien sesión y accedan a las rutas protegidas del backend.

## ¿Cómo funciona el sistema de login?

1. Ruta GET /admin/login
    -Renderiza la vista del formulario de login.
    -No realiza ninguna validación ni consulta.

```js
router.get('/', (req, res) => {
  res.render('adminLogin');
});
```

2. Ruta POST /admin/login
    -Recibe los datos del formulario (usuario y clave).
    -Consulta la base de datos para verificar si el usuario existe.
    -Compara la contraseña ingresada con la almacenada (encriptada con bcrypt).
    -Si es correcta, guarda el rol en la sesión y redirige al dashboard /admin.
    -Si es incorrecta, vuelve a mostrar el login con un mensaje de error.

```js
router.post('/', async (req, res) => {
  const { usuario, clave } = req.body;

  const query = 'SELECT * FROM usuarios WHERE usuario = ?';
  const rows = await pool.query(query, [usuario.trim()]);
  
  // Validación
  if (rows.length === 0 || !(await bcrypt.compare(clave, rows[0].clave))) {
    return res.render('adminLogin', { error: 'Usuario o clave incorrectos' });
  }

  // Autenticación exitosa
  req.session.rol = rows[0].rol;
  res.redirect('/admin');
});
```

3. Ruta GET /admin/login/logout
    -Destruye la sesión actual.
    -Redirige al formulario de login.

```js
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/admin/login');
  });
});
```

## ¿Qué hace este sistema?

| Acción            | Resultado                                                        |
|----------------   |------------------------------------------------------------------|
| Usuario válido    | Se guarda el rol en `req.session.rol` y se redirige al panel     |
| Usuario inválido  | Se muestra el login con mensaje de error                         |
| Logout            | Se elimina la sesión y se vuelve al login                        |



## Seguridad
- Las contraseñas están encriptadas con bcrypt.
- El rol determina qué rutas protegidas puede ver el usuario.
- Si el rol no está presente en la sesión, el acceso a /admin y sus subrutas es bloqueado.
