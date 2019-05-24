import nodemailer from "nodemailer";
import fs from 'fs';
import path from'path';
import util from 'util';
let content : Object;

const readFile = util.promisify(fs.readFile);

let getFile = async ()=>{ 
return await readFile(path.join(__dirname,'email.html'),"UTF-8")};

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'tvio.app.xyz@gmail.com',
           pass: '123456Heslo'
       }
   });

   const mailOptions = {
    from: 'tvio.app.xyz@gmail.com',
    to: 'tvio@centrum.cz' , // list of receivers
    subject: 'test', // Subject line
    html: 'x'
  };

export async function email(pozn:any, datum:any,kdo:any){

 getFile().then(function(data){
     console.log('pozn',pozn,);
     console.log('datum',datum,);
    data = data.replace('{pozn}',pozn);
    data = data.replace('{datum}',datum);
  
     mailOptions.html=data;
     mailOptions.to=kdo;
    transporter.sendMail(mailOptions, (data)=>{console.log(data) 
      })
    })};


