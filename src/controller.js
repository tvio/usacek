"use strict";
/* app/controllers/welcome.controller.ts */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import only what we need from express
var express_1 = require("express");
var body_parser_1 = __importDefault(require("body-parser"));
var db_1 = require("./db");
// Assign router to the express.Router() instance
var router = express_1.Router();
//bodyparser
var jsonParser = body_parser_1.default.json();
// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
// rpidej body parser
router.post('/usacek', jsonParser, function (req, res) {
    //nacti data z requestu
    if (!req.body)
        return res.status(400);
    var data = req.body;
    console.log(data);
    // pridat do db pomoci funkce a vypsat zpet na obr.
    data = res.send(db_1.insert(data));
});
router.get('/usacek', function (req, res) {
    //if (data) return res.send({"data":"no records"});
    console.log(db_1.select());
    res.send(db_1.select());
});
// router.get('/:name', (req: Request, res: Response) => {
//     // Extract the name from the request parameters
//     let { name } = req.params;
//     // Greet the given name
//     res.send(`Hello, ${name}`);
// });
// Export the express.Router() instance to be used by server.ts
exports.Controller = router;
