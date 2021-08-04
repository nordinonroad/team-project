const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const indexRouter = require('./routes/indexRouter');
const adminRouter = require('./routes/adminRouter');

const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(session({
  secret: '8u54trgh9but349rgjoi53eigrpj4wegrjpo',
  resave: false,
  saveUninitialized: false,
  name: 'userLogin',
  cookie: { secure: false },
  store: new FileStore({}),
}));

app.use('/', indexRouter);
app.use('/admin', adminRouter);

// app.use((req, res, next) => {
//   const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
//   next(error);
// });

// res.locals.message = err.message;
// res.locals.error = error;

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
