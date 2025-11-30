var express = require('express');
var app = express(); // ✅ Definido antes de usar

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var hbs = require('hbs');
hbs.registerHelper('eq', function (a, b) {
  return a === b;
});
require('dotenv').config();

// 🔒 Configuración de sesión institucional
var session = require('express-session');
app.use(session({
  secret: 'azzertotaucrot',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 10 } // 10 minutos
}));

// 💾 Middleware para exponer la sesión en las vistas
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

// 🧭 Middleware de seguridad para rutas protegidas
const secured = async (req, res, next) => {
  try {
    console.log('Rol de sesión:', req.session.rol);
    if (req.session.rol === 'pedidos' || req.session.rol === 'productos') {
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log('Error en middleware secured:', error);
    res.redirect('/admin/login');
  }
};


// 📦 Rutas
const adminIndexRouter = require('./routes/admin/index');
const adminLoginRouter = require('./routes/admin/login');
const adminPedidosRouter = require('./routes/admin/pedidosAdmin');
const adminProductosRouter = require('./routes/admin/productosAdmin');
const productosRouter = require('./routes/api/productos');
const pedidosRouter = require('./routes/api/pedidos');
const usersRouter = require('./routes/users');

app.use(cors());

// 🖼️ Configuración de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// 🧱 Middlewares base
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 🚪 Rutas públicas
app.use('/admin/login', adminLoginRouter);
app.use('/users', usersRouter);
app.use('/api/productos', productosRouter);
app.use('/api/pedidos', pedidosRouter);

// 🔐 Rutas protegidas por rol
app.use('/admin', secured, adminIndexRouter);
app.use('/admin/pedidosAdmin', secured, adminPedidosRouter);
app.use('/admin/productosAdmin', secured, adminProductosRouter);

app.get('/', (req, res) => {
  res.redirect('/admin/login');
});

// 🧯 Manejo de errores

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;

