"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var Client = require('pg').Client;
var config;
if (process.env.DATABASE_URL) {
    config = {
        connectionString: process.env.DATABASE_URL,
        ssl: true,
    };
}
else {
    config = {
        user: 'test',
        database: 'test',
        password: 'test',
        host: 'localhost',
        port: 5432,
        max: 10,
        idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
    };
}
;
//export async function selectById
function select() {
    return __awaiter(this, void 0, void 0, function () {
        var client, resp, i, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client = new Client(config);
                    client.connect(function (err) {
                        if (err) {
                            console.error('connection error', err.stack);
                        }
                        else {
                            console.log('connected');
                        }
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.query('SELECT * FROM test.usacek')];
                case 2:
                    resp = _a.sent();
                    for (i in resp.rows) {
                        resp.rows[i].datum = moment_1.default(resp.rows[i].datum).format('DD.MM.YYYY');
                        //console.log(resp.rows[i].datum);
                    }
                    console.log(moment_1.default(resp.rows[0].datum).format('DD.MM.YYYY'));
                    //console.log(JSON.stringify(resp.rows));
                    client.end();
                    return [2 /*return*/, JSON.stringify(resp.rows)];
                case 3:
                    err_1 = _a.sent();
                    console.log('Database ' + err_1);
                    client.end();
                    return [2 /*return*/, err_1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.select = select;
//console.log(select());
function selectByID(id) {
    return __awaiter(this, void 0, void 0, function () {
        var client, resp, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client = new Client(config);
                    client.connect();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.query("SELECT * FROM test.usacek where id=" + id)];
                case 2:
                    resp = _a.sent();
                    return [2 /*return*/, JSON.stringify(resp.rows)
                        //console.log(JSON.stringify(resp.rows));
                    ];
                case 3:
                    err_2 = _a.sent();
                    console.log('Database ' + err_2);
                    client.end();
                    return [2 /*return*/, err_2];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.selectByID = selectByID;
//console.log(select());
function update(id, kdo, pozn1, pozn2) {
    return __awaiter(this, void 0, void 0, function () {
        var client, resp, resp2, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client = new Client(config);
                    //let d = moment().format("2019-01-01");
                    //console.log(d);
                    client.connect();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, client.query("update test.usacek set kdo='" + kdo + "',pozn1='" + pozn1 + "',pozn2='" + pozn2 + "' where id = " + id)];
                case 2:
                    resp = _a.sent();
                    return [4 /*yield*/, selectByID(id)];
                case 3:
                    resp2 = _a.sent();
                    console.log('db vrac' + resp2);
                    client.end();
                    return [2 /*return*/, resp2];
                case 4:
                    err_3 = _a.sent();
                    console.log('Database ' + err_3);
                    client.end();
                    return [2 /*return*/, err_3];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.update = update;
//console.log(select());
//update(1,2, "x","x2");
