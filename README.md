### Tested: OK (in my Rpi3b+)

## Build and Dockerize a FullStack React app with Nodejs, MySQL and Nginx (proxy server)


Frontend: reacts     
Backend: nodejs + expressjs    
Database: MySQL    
Proxy Server: Nginx      
    
for backend, index.js is the main file. (port:4000 defined here)   
for frontend, /src/App.js is the main file (port:3000)   
     
## Step1:
> Clone this repo in your PC/laptop/vps.   
$ git clone repo_url

## Step2:
> inside the 'frontend' directory    
Run   
$ `npm install`   
It installs packages mentioned under the heading 'dependencies' in file package.json

## Step3:
> inside the 'backend' directory.  
Run   
$ `npm install`   
It installs packages mentioned under the heading 'dependencies' in file package.json

## Step4: How to run the application using Docker
      

       
inside the main project directory  
Run   
$ `docker-compose up -d`   

$ docker images     
      
> Docker image size (after extracting the images)   
MySQL (877mb) MariaDb (356mb)    
Adminer (117mb)     
Node (163mb)     
Backend (170mb)   
Frontend (504mb)     
     

## Step5:

WARNING!!    
> you must wait for 5 minutes for setup MySQL properly.   
> u can check if MySQL is ready for connection.   
> $ sudo docker logs db   

Access the ADMINER using route    `http://host-ip:8000/`    
to login ADMINER, use    
server: db   
username: root   
password: example    
(or)    
server: db   
username: ronit   
password: gablu    
      
setup.sql is executed automatically to create the db-table.      
        
      
## Step6:
> To start interacting with the application, open in a browser     
`http://192.168.0.102:80/`    
Note: Nginx server is running @port80.


        
http://192.168.0.102:8080 (Adminer)   
      
http://192.168.0.102 (Nginx revProxy)   
       
http://192.168.0.102:4000 (backend API)    
      
http://192.168.0.102:5000 (frontend)     
       

    
Check out the step by step explained guide [here](https://www.webscale.com/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/)


https://www.webscale.com/engineering-education/build-and-dockerize-a-full-stack-react-app-with-node-js-mysql-and-nginx/

Source code in GitHub:

https://github.com/mosesreigns/Build-and-Dockerize-a-Full-stack-React-app-with-Node.js-MySQL-and-Nginx-for-reverse-proxy






## Tested: OK (in my Rpi3b+)

<h1>MySQL CRUD - Nodejs, Reactjs</h1>


https://github.com/mushfiqurniazzz/Mysql-CRUD-Operations-With-Nodejs-And-Reactjs/assets/148959859/c0adf4d1-336c-4ee1-b28b-c5528eb481d0


<p>This app allows users to save users with 'name' and 'email' with specific 'id' for everyone, featuring CRUD functionalities like 'create', 'read', 'update', 'delete'. 
  It uses MySQL as the database to store users, 
  Express.js for handling server-side logic, 
  React.js for building the user interface, and 
  Node.js for server-side runtime environment. 
  The app provides a seamless experience for users to save users and time.</p>
<h3>Running the Project Locally</h3>
  <p>To run this project on your local machine, follow these steps:

1. <b>Clone the Repository</b>:    
   Clone this repository to your local machine..   

   $ git clone <repository_url>


2. <b>Install Dependencies</b>:     
   Navigate to the directory 'server' and 'frontend' and    
   Install the necessary dependencies using npm or yarn     
       
   $ npm install ✓     
   (or)     
   $ yarn     

3. <b>Setup Environment Variables</b>:     
   Create a `.env` file in the root of your project directory and add the variables given in `.env.sample`    

4. <b>Start the BACKEND</b>:     
   Run the following command to start the Backend server    
   $ cd backend    
   $ npm run start

5. <b>Start the FRONTEND</b>:     
   Run the following command to start the Frontend server    
   $ cd frontend    
   $ npm run dev      
      
> Note: vite.config.js file defines the default port number (eg.5000) for frontend 
   
   Frontend control flow...   
index.html -> src/main.jsx -> App.jsx -> components/Table jsx   
       

6. <b>Access the App</b>:    
    Open your web browser and navigate to `http://192.168.0.102:3000` for frontend, and `http://192.168.0.102:5000` for backend. You can now use the app locally on your machine, connected to your MySQL database using the variables specified in the `.env` file.    
     
http://192.168.0.102:8080 (Adminer)    
     
http://192.168.0.102:4000 (backend API) vite   

http://192.168.0.102:5000 (frontend) vite    
      
7. <b>Note</b>: The project may not work if you do not install dependencies in both frontend and backend. The backend must be started first.
</p>
