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
