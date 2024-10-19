const express = require('express');
const connectDB = require('./config/dbConfig');

const userRouter = require('./Routers/userRouter');
const usertypeRouter = require('./Routers/userTypeRouter');
const mainproductsRouter = require('./Routers/mainProductsRouter');
const landingimagesRouter = require('./Routers/landingImagesRouter');
const infoRouter = require('./Routers/infoRouter');

const cors = require('cors');
const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use('/usertype',usertypeRouter);
app.use('/user',userRouter);
app.use('/mainproducts',mainproductsRouter);
app.use('/landingimages',landingimagesRouter);
app.use('/api', infoRouter);

app.listen(port, _=> console.log('server started at port 3000'))