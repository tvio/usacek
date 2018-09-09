"use strict";
/* app/controllers/welcome.controller.ts */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import only what we need from express
var express_1 = require("express");
var body_parser_1 = __importDefault(require("body-parser"));
var db2_1 = __importDefault(require("./db2"));
var data_1 = require("./data");
// Assign router to the express.Router() instance
var router = express_1.Router();
//bodyparser
var jsonParser = body_parser_1.default.json();
// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
// rpidej body parser
// router.post('/usacek',jsonParser, (req: Request, res: Response) => {
//     //nacti data z requestu
//     if (!req.body) return res.status(400);
//      let data = req.body;
//     console.log(data);
//     // pridat do db pomoci funkce a vypsat zpet na obr.
//     data = res.send(insert(data));
// });
// router.get('/usacek', (req: Request, res: Response) => {
//      //if (data) return res.send({"data":"no records"});
//      console.log(select());
//     res.send(select());
// });
router.get('/', function (req, res) {
    //if (data) return res.send({"data":"no records"});
    console.log(db2_1.default());
    res.setHeader('Content-Type', 'application/json');
    // res.send(select());
    res.send(JSON.stringify(data_1.dny));
});
// router.get('/:name', (req: Request, res: Response) => {
//     // Extract the name from the request parameters
//     let { name } = req.params;
//     // Greet the given name
//     res.send(`Hello, ${name}`);
// });
// Export the express.Router() instance to be used by server.ts
exports.Controller = router;
