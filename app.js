const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
//routes
const blogRouter = require('./routes/blogRouter');
const newsRouter = require('./routes/newsRouter');

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) =>{
    cb(null, file.originalname);
  },
});


app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(multer({storage:storageConfig}).single("file"));

app.use('/', blogRouter);
app.use('/admin', newsRouter);


app.listen(3000, () => console.log('SERVER START'));
