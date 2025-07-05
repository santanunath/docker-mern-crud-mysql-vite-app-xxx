// importing express, environmental variables, 
// bodyparser, router, database connection function 
// and declaring them in a varibale to be using it in our index.js file
// ----------------
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");

const ConnectDB = require('./db/ConnectDB');     // user defined 
const router = require('./routes/DBOperRoutes'); // user defined 

dotenv.config();


// middleware to parse incoming request in 'bodies'
// ------------
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// initialize the database connection 'pool'
// -------------
let pool;

(async () => {
    
    pool = await ConnectDB(); // connect to database 

    // pass the 'pool' to the routes
    // -----------
    app.use((req, res, next) => {
        req.pool = pool;
        next();
    });
    

    // use the 'router'
    // -----------;;
    app.use("/", router);

    
    // start the server
    // using the port in environmental variable or 5000
    // -----------
    // const PORT = process.env.PORT || 4000;
    const PORT = 4000;
    app.listen(PORT, () => {
        console.log(`Backend app listening on port:${PORT}`);
    });
    
})();
