// importing the mysql2/promise 
// for using 'async' 'await' in conenction function and in queries 
// --------------
const mysql = require("mysql2/promise");



// *****************
// MYSQL DATABASE CONNECTION
// *****************
// the 'async' 'await' function 
// which connects to the database 
// using  environment variables for 'backend'
// defined in the (.env files) 'docker-compose.yml' file
//---------------------
const ConnectDB = async () => {


/*

  const pool = await mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    
    waitForConnections: process.env.DB_WAITFORCONNECTIONS,
    connectionLimit: process.env.DB_CONNECTIONLIMIT,
    queueLimit: process.env.DB_QUEUELIMIT
  });
  
*/                                     



  const pool = await mysql.createPool(
  {
    host:     process.env.MARIADB_HOST,  // your MARIADB host
    user:     process.env.MARIADB_USER, // your MARIADB username
    password: process.env.MARIADB_PASSWORD, // your MARIADB password
    database: process.env.MARIADB_DATABASE  // the database you want to connect
 })
  

  // --------------
  // returning pool for further queries in the database
  // -------------
  return pool;
  
};


// ----------------
// exporting the function
// ----------------
module.exports = ConnectDB;
