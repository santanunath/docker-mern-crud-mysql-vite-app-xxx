// importing the mysql2/promise 
// for using 'async' 'await' in conenction function and in querys
// --------------
const mysql = require("mysql2/promise");

//const mysql = require('mysql2');


// --------------------
// the 'async' 'await' function 
// which connects to the database 
// using the credentials in the .env files
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


// *****************
// Add MYSQL DATABASE CONNECTION
// *****************
// below values should be same as 
// environment variables for 'backend'
// defined in file 'docker-compose.yml'
// ****************
const pool = await mysql.createPool(
  {
    host:     process.env.MYSQL_HOST,  // your MySQL host
    user:     process.env.MYSQL_USER, // your MySQL username
    password: process.env.MYSQL_PASSWORD, // your MySQL password
    database: process.env.MYSQL_DATABASE  // the database you want to connect
 })
  

  // --------------
  // returning pool to further add querys 
  // in the database we did till now
  // -------------
  return pool;
};


// ----------------
// exporting the function
// ----------------
module.exports = ConnectDB;
