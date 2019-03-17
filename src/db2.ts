import { ENGINE_METHOD_NONE, EACCES } from "constants";

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
  const client = new Client(config);
client.connect();
   try {
      
      const resp = await client.query('SELECT * FROM test.usacek');
      return JSON.stringify(resp.rows)
      //console.log(JSON.stringify(resp.rows));
      
    } catch (err) {
      console.log('Database ' + err);
      return err
    }
  // client.end();
  }
//console.log(select());

export async function update(id: number,kdo: number, pozn1: String, pozn2: String):Promise<string> {
  const client = new Client(config);
client.connect();
   try {
      
      const resp = await client.query(`update test.usacek set kdo=${kdo},pozn1='${pozn1}',pozn2='${pozn2}' where id = ${id}`);
      //TODO pridat select by id
      console.log('db vrac'+resp)      
      return JSON.stringify(resp)
      
    } catch (err) {
      console.log('Database ' + err);
      return err
    }
  // client.end();
  }
//console.log(select());


//update(1,2, "x","x2");