"use strict";
/* app/controllers/welcome.controller.ts */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
// Import only what we need from express
var express_1 = require("express");
var BodyParser = __importStar(require("body-parser"));
var db2_1 = require("./db2");
// Assign router to the express.Router() instance
var email_1 = require("./email");
var router = express_1.Router();
//bodyparser
var jsonParser = BodyParser.json();
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
router.post('/email', jsonParser, function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            console.log(req.body);
            console.log(req.body.pozn2, req.body.datum);
            email_1.email(req.body.pozn2, req.body.datum, 'jana.fukalova@live.com');
            email_1.email(req.body.pozn2, req.body.datum, 't.hajek@seznam.cz');
            res.send('email ok');
            //next();
        }
        catch (e) {
            next(e);
        }
        return [2 /*return*/];
    });
}); });
router.get('/usacek', function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
    var data, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db2_1.select()];
            case 1:
                data = _a.sent();
                //console.log(data);
                if (!data)
                    return [2 /*return*/, res.send({ "data": "no records" })];
                res.send(data);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                next(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/usacek/:id', function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
    var data, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db2_1.selectByID(req.params.id)];
            case 1:
                data = _a.sent();
                console.log(data);
                if (!data)
                    return [2 /*return*/, res.send({ "data": "no records" })];
                res.send(data);
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                next(e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.put('/usacek/:id', jsonParser, function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
    var data, ret, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                // nacti data z requestu
                if (!req.body)
                    return [2 /*return*/, res.status(400)];
                // if (req.params.id != req.body.id) return res.status(400).send({"error":"nesedí id v body a parametru"});
                console.log(req.body.kdo + ',' + req.body.pozn1 + ',' + req.body.pozn2 + ',' + req.params.id);
                data = req.body;
                return [4 /*yield*/, db2_1.update(req.params.id, req.body.kdo, req.body.pozn1, req.body.pozn2)];
            case 1:
                ret = _a.sent();
                console.log(ret);
                if (!ret)
                    return [2 /*return*/, res.send({ "error": "ID neexistuje" })];
                // TODO nevraci nic
                //OTDO pridat selectby id
                console.log(ret);
                res.send(ret);
                return [3 /*break*/, 3];
            case 2:
                e_3 = _a.sent();
                next(e_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// router.post('/login',jsonParser, async (req: Request, res: Response, next: NextFunction) => {
//    try {
//   // nacti data z requestu
//     if (!req.body) return res.status(400);
//    // if (req.params.id != req.body.id) return res.status(400).send({"error":"nesedí id v body a parametru"});
//  //  console.log(req.body.jmeno+','+req.body.heslo);
//    let jmeno = req.body.jmeno;
//    let heslo = req.body.heslo;
//    //console.log(jmeno+heslo);
//    if (jmeno=='usacek' && heslo=='Lego1234'){
//       // res.render('index.html', {title: 'res vs app render'}, function(err, html) {
//       //    console.log(html);
//           res.send('{"done":"ok"}');
//       next();
//       // /res.end('{"success":"OK","status":200}');
//    }
//    else
//    {
//    res.send("Nevalidní login").status(401);
//    }
//  //next();
// } catch (e) {
// next(e)
// }
// });
// router.get('/:name', (req: Request, res: Response) => {
//     // Extract the name from the request parameters
//     let { name } = req.params;
//     // Greet the given name
//     res.send(`Hello, ${name}`);
// });
// router.use((req: Request, res: Response, next: NextFunction) => {
// res.status(404).send({"error":"nesedí URL"});
// });
// Export the express.Router() instance to be used by server.ts
exports.Controller = router;
