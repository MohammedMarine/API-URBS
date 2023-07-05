//load environment variables
require("dotenv/config");

//Third party dependencies
const express = require ("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const multer = require('multer');

//local dependencies
const router = require ('./app/router');
const { initSession } = require("./middlewares/initSession");
const { initCart } = require("./middlewares/initCart");
const { initWishlist } = require('./middlewares/initWishlist');

//Creating app
const app = express();

//Adding CORS mw
app.use(cors("*")); //to authorize everybody on URBS API

//Adding body parsers
app.use(express.urlencoded({ extended: false })); //to extract data from POST request with Express
app.use(bodyParser.json()); // for parsing application/json
const multipartParser = multer(); // To extract data from POST request formated in multipart
app.use(multipartParser.none()); // .none() means we do not expect files, only "classics" inputs.
app.use(express.json());
app.use(initSession);
app.use(initCart);
app.use(initWishlist)

//Plugging router
app.use(router);

//Starting the application
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Listening at http://localhost:${PORT}`);
});
