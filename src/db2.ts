import { ENGINE_METHOD_NONE, EACCES } from "constants";
import moment  from 'moment';

const {Client} = require ('pg');


const config = {
    user: 'test', // env var: PGUSER
    database: 'test', // env var: PGDATABASE
    password: 'test', // env var: PGPASSWORD
    host: 'localhost', // Server hosting the postgres database
    port: 5432, // env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
  }

//export async function selectById

export async function select():Promise<string> {
  let client = new Client(config);
  client.connect((err: Error) => {
   
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  })

 try{
      const resp = await client.query('SELECT * FROM test.usacek');
      return JSON.stringify(resp.rows)
     // console.log(JSON.stringify(resp.rows));
      
    } catch (err) {
      console.log('Database ' + err);
      return err
    }
  // client.end();
  }
//console.log(select());

export async function selectByID(id: number):Promise<string> {
  const client = new Client(config);
client.connect();
   try {
      
      const resp = await client.query(`SELECT * FROM test.usacek where id=${id}`);
      return JSON.stringify(resp.rows)
      console.log(JSON.stringify(resp.rows));
      
    } catch (err) {
      console.log('Database ' + err);
      return err
    }
  // client.end();
  }
//console.log(select());

export async function update(id: number, kdo: number, pozn1: String, pozn2: String):Promise<string> {
  const client = new Client(config);
  //let d = moment().format("2019-01-01");
  //console.log(d);
client.connect();
   try {
      
      const resp = await client.query(`update test.usacek set kdo='${kdo}',pozn1='${pozn1}',pozn2='${pozn2}' where id = ${id}`);
      const resp2 = await selectByID(id);
      console.log('db vrac'+resp2)      
      return resp2
      
    } catch (err) {
      console.log('Database ' + err);
      return err
    }
  // client.end();
  }
//console.log(select());


//update(1,2, "x","x2");