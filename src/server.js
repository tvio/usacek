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
var express_session_1 = __importDefault(require("express-session"));
// Create a new express application instance
var app = express_1.default();
var path = require('path');
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
//atuh  
// let a: number = 0; 
// export let auth = function (req: any,res: any, next :any, ) {
//     try {
//         console.log(a);
//         if (a==0) {res.end("Není provedena autentizace");}
//         else{
//             next();
//         };
//               } catch (e) {
//        next(e)
//     }
// };
//  app.use(cors(options));
// Mount the WelcomeController at the / route
app.use(express_session_1.default({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    // cookie: { maxAge: 600000 },
    unset: 'destroy'
    //  saveUninitialized: false,
}));
app.use(function (req, res, next) {
    if (req.session.user == null && req.path.indexOf('/prehled.html') === 0) {
        res.redirect('/');
    }
    next();
});
app.use('/', controller_1.Controller);
app.use(express_1.default.urlencoded());
var auth = function (req, res, next) {
    if (req.session && (req.body.jmeno == "usacek" || req.session.user == "usacek"))
        return next();
    else
        return res.send("nee");
};
var keep = function (req, res, next) {
    if (req.session.user == "usacek")
        return res.redirect('prehled.html');
    else
        return next();
};
// app.use(session({
//     genid: (req) => {
//       console.log('Inside the session middleware');
//       console.log(req.sessionID);
//       return uuid();// use UUIDs for session IDs
//     },
//     secret: 'usacek',
//     resave: false,
//     saveUninitialized: true
//   }))
app.get('/', keep, function (req, res) {
    console.log(req.session);
    console.log(req.sessionID);
    res.sendFile(path.join(__dirname, '../login.html'));
    //console.log(req.sessionID);
});
var publicPath = path.join(__dirname, '..//public');
console.log(publicPath);
app.use(express_1.default.static(publicPath));
app.post('/login', auth, function (req, res) {
    //console.log(req.body.jmeno);
    if (req.body.jmeno == 'usacek' && req.body.heslo == 'Lego1234') {
        // a=1;
        req.session.user = 'usacek';
        // console.log(__dirname);
        // console.log(publicPath);
        res.send('prehled.html');
        //  res.sendFile(path.join(__dirname, '../prehled.html'))
        console.log(req.session);
        console.log(req.sessionID);
        // res.send('prehled.html');
    }
    else {
        res.send("nee");
        console.log(req.session);
        console.log(req.sessionID);
    }
});
// app.get('/prehled.html', auth ,(req, res,next) => {
//     console.log(req.session);
//     console.log(req.sessionID);
// });
app.get('/logout', function (req, res, next) {
    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            }
            else {
                req.session = null;
                res.end();
                console.log('sezeni', req.session);
                return res.redirect('/');
            }
        });
        console.log(req.session);
        console.log(req.sessionID);
    }
});
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log('Appka běží');
});
