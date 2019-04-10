/* app/controllers/welcome.controller.ts */

// Import only what we need from express
import { Router, Request, Response } from 'express';
import * as BodyParser from 'body-parser';
import {select, update, selectByID} from "./db2";
import {dny} from "./data";
import { NextFunction } from 'express-serve-static-core';
// Assign router to the express.Router() instance
const router: Router = Router();

//bodyparser
const jsonParser = BodyParser.json();


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


router.get('/usacek',   async (req: Request, res: Response, next: NextFunction) => {
     
     //console.log(select());
        try {
        const data =  await select();
        //console.log(data);
        if (!data) return res.send({"data":"no records"});
        res.send(data);
       //next();
     } catch (e) {
        next(e)
     }
      

});

router.get('/usacek/:id',  async (req: Request, res: Response, next: NextFunction) => {
     
   //console.log(select());
      try {
      const data =  await selectByID(req.params.id);
      console.log(data);
      if (!data) return res.send({"data":"no records"});
      res.send(data);
     //next();
   } catch (e) {
      next(e)
   }
    

});

router.put('/usacek/:id',jsonParser, async (req: Request, res: Response, next: NextFunction) => {
     
         try {
        // nacti data z requestu
          if (!req.body) return res.status(400);
         // if (req.params.id != req.body.id) return res.status(400).send({"error":"nesedí id v body a parametru"});
         let data = req.body;
    
         console.log(req.body.kdo+','+req.body.datum+','+req.params.id)    
        const ret  = await update(req.params.id,req.body.datum,req.body.kdo, req.body.pozn1,req.body.pozn2);
        
        console.log(ret);
       
      if (!ret) return res.send({"error" : "ID neexistuje"});

      // TODO nevraci nic
      //OTDO pridat selectby id
      console.log(ret); 
       res.send(ret);
     //next();
   } catch (e) {
      next(e)
   }
    

});
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
export const Controller: Router = router;