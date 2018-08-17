/* app/controllers/welcome.controller.ts */

// Import only what we need from express
import { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import {insert,select,update} from "./db";
// Assign router to the express.Router() instance
const router: Router = Router();

//bodyparser
const jsonParser = bodyParser.json();


// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
// rpidej body parser

router.post('/usacek',jsonParser, (req: Request, res: Response) => {
    //nacti data z requestu
    if (!req.body) return res.status(400);
     let data = req.body;
    console.log(data);
    // pridat do db pomoci funkce a vypsat zpet na obr.
    data = res.send(insert(data));
   
    
});


router.get('/usacek', (req: Request, res: Response) => {
     //if (data) return res.send({"data":"no records"});
     console.log(select());
    res.send(select());
});

// router.get('/:name', (req: Request, res: Response) => {
//     // Extract the name from the request parameters
//     let { name } = req.params;

//     // Greet the given name
//     res.send(`Hello, ${name}`);
// });




// Export the express.Router() instance to be used by server.ts
export const Controller: Router = router;