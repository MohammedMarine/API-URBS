//load environment variables
require("dotenv/config");

//Third party dependencies
const express = require ("express");
const cors = require("cors");

//local dependencies
const router = require ('./app/router');

//Creating app
const app = express();

//Adding CORS mw
app.use(cors("*"));

//Adding body parsers
app.use(express.urlencoded({ extended: false })); //to get form data sent in POST
app.use(express.json());

//Plugging router
app.use(router);

//Starting the application
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Listening at http://localhost:${PORT}`);
});
