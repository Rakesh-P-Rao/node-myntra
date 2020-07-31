const express = require("express");
const app = express();
const { connect } = require("mongoose");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser"); 

/*=====================Template engine middleware starts here ===========================*/
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
/*=====================Template engine middleware ends here ==============================*/


/*=====================body parser incoming request stream to convert data ================*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*=========================================================================================*/


/*===========================serve static assests ==========================================*/
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules"));
/*===========================================================================================*/


let port = 2700;
app.listen(port, (err) => {
    if (err) throw err;
    console.log("Myntra server is running on port number " + port);
});

