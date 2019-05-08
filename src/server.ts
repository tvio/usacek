/* app/server.ts */
let port=process.env.PORT || 3000;
// Import everything from express and assign it to the express variable
import express from 'express';
import cors from "cors"; 

// Import WelcomeController from controllers entry point
import {Controller} from './controller';
import { NextFunction } from 'connect';

// Create a new express application instance
const app: express.Application = express();
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
app.use('/', Controller);
//pubic folder



const path = require ('path');
 const publicPath = path.join(__dirname,'../public/');
 console.log(__dirname);
 app.use(express.static(publicPath));
 console.log(publicPath);
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
   
});

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log('Appka běží');
});
