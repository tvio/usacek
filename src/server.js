"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* app/server.ts */
var port = process.env.PORT || 3000;
// Import everything from express and assign it to the express variable
var express_1 = __importDefault(require("express"));
// Import WelcomeController from controllers entry point
var controller_1 = require("./controller");
// Create a new express application instance
var app = express_1.default();
// The port the express app will listen on
//const port: number = 3000;
//cors
//options for cors midddleware
// const options:cors.CorsOptions = {
//     allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
//     credentials: true,
//     methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
//     origin: "http://192.168.1.7:3000",
//     preflightContinue: false
//   };
//  app.use(cors(options));
// Mount the WelcomeController at the / route
app.use('/', controller_1.Controller);
//pubic folder
var path = require('path');
var publicPath = path.join(__dirname, '../public/');
console.log(__dirname);
app.use(express_1.default.static(publicPath));
console.log(publicPath);
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://192.168.1.7:" + port + "/");
});
