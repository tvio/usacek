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


async function select():Promise<string> {
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

export default select;
  