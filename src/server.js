"use strict";
/* app/server.ts */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import everything from express and assign it to the express variable
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
// Import WelcomeController from controllers entry point
var controller_1 = require("./controller");
// Create a new express application instance
var app = express_1.default();
// The port the express app will listen on
var port = 3000;
//cors
//options for cors midddleware
var options = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "http://localhost:3000",
    preflightContinue: false
};
app.use(cors_1.default(options));
// Mount the WelcomeController at the / route
app.use('/', controller_1.Controller);
//pubic folder
var path = require('path');
var publicPath = path.join(__dirname, '../public');
app.use(express_1.default.static(publicPath));
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
