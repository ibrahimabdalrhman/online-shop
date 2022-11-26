const express = require("express")
const app = express();
const productsRouter = require('./Routes/productsRouter');
const usersRouter = rerequire('./Routes/usersRouter');

const morgan = require('morgan');
const xss = require("xss-clean");
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
app.use(morgan("dev"));
app.use(xss());
app.use(hpp());
app.use(mongoSanitize());
app.use(helmet());
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "too many requests from this IP, please try again in an hour",
});
app.use("/api", limiter);





const bodyParser=require('body-parser');
app.use(bodyParser.json());






app.use('/api/products', productsRouter);
app.use('/api/users',usersRouter)

const errorController = require("./controllers/errorController");
app.use(errorController);

module.exports = app;