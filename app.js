const express = require('express');
const hbs = require('hbs')
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const multer = require('multer');

const indexRouter = require('./routes/indexRouter');
const adminRouter = require('./routes/adminRouter');
const postrouter = require('./routes/postrouter');
const blogRouter = require('./routes/blogRouter');
const newsRouter = require('./routes/newsRouter');
const oldWebsiteRouter = require('./routes/oldWebsiteRouter');

const app = express();
const PORT = 3000;


const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) =>{
    cb(null, file.originalname);
  },
});

hbs.registerPartials('views');
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
  name: 'login',
  cookie: { secure: false },
  store: new FileStore({}),
}));

//res locals login
app.use((req,res,next) => {
  res.locals.login = req.session.login; 
  // console.log('2141241244121', req.session.login)
  next();
})


app.use(multer({storage:storageConfig}).single("file"));
app.use('/', blogRouter);
app.use('/admin', newsRouter);
app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/post', postrouter);
app.use('/', oldWebsiteRouter)


app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
