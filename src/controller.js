"use strict";
/* app/controllers/welcome.controller.ts */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import only what we need from express
var express_1 = require("express");
var data_js_1 = __importDefault(require("./data.js"));
// Assign router to the express.Router() instance
var router = express_1.Router();
// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/data', function (req, res) {
    // Extract the name from the request parameters
    //let { name } = req.params;
    // Greet the given name
    res.send(data_js_1.default);
});
router.get('/', function (req, res) {
    // Reply with a hello world when no name param is provided
    res.send('Hello, World!');
});
router.get('/:name', function (req, res) {
    // Extract the name from the request parameters
    var name = req.params.name;
    // Greet the given name
    res.send("Hello, " + name);
});
// Export the express.Router() instance to be used by server.ts
exports.Controller = router;
