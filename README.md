# Insta-Snap

This project consists of a backend server and a frontend React application. The following changes were made to connect the frontend to the backend.

## Changes Made

### Backend

1. **Install Dependencies**:
   - Navigated to the backend directory `Insta-Snap` and installed necessary dependencies:
     ```bash
     cd Insta-Snap
     npm install
     ```

2. **Start Backend Server**:
   - Ensure the backend server is running on `http://localhost:5000`:
     ```bash
     node server.js
     ```

### Frontend

1. **Install Dependencies**:
   - Navigated to the frontend directory `FRONTEND` and installed necessary dependencies:
     ```bash
     cd FRONTEND
     npm install
     ```

2. **Make API Calls**:
   - Installed `axios` to handle HTTP requests:
     ```bash
     npm install axios
     ```
   - Updated `src/App.js` to fetch data from the backend:
     ```javascript
     // src/App.js

     import React, { useState, useEffect } from 'react';
     import axios from 'axios';

     function App() {
       const [data, setData] = useState(null);

       useEffect(() => {
         axios.get('http://localhost:5000/api/data') // Replace with your backend endpoint
           .then(response => {
             setData(response.data);
           })
           .catch(error => {
             console.error('There was an error fetching data!', error);
           });
       }, []);

       return (
         <div className="App">
           <header className="App-header">
             <h1>React Frontend Connected to Backend</h1>
             {data ? (
               <div>
                 <h2>Data from Backend:</h2>
                 <pre>{JSON.stringify(data, null, 2)}</pre>
               </div>
             ) : (
               <p>Loading...</p>
             )}
           </header>
         </div>
       );
     }

     export default App;
     ```

3. **Set Up Proxy for Development**:
   - Added a proxy to `FRONTEND/package.json` to avoid CORS issues:
     ```json
     {
       "name": "frontend",
       "version": "0.1.0",
       "private": true,
       "dependencies": {
         "react": "^17.0.2",
         "react-dom": "^17.0.2",
         "react-scripts": "4.0.3",
         "axios": "^0.21.1"
       },
       "scripts": {
         "start": "react-scripts start",
         "build": "react-scripts build",
         "test": "react-scripts test",
         "eject": "react-scripts eject"
       },
       "proxy": "http://localhost:5000"
     }
     ```

### Running the Application

1. **Start the Backend Server**:
   - Navigate to the `Insta-Snap` directory and start the backend server:
     ```bash
     cd Insta-Snap
     node server.js
     ```

2. **Start the Frontend Application**:
   - Navigate to the `FRONTEND` directory and start the React development server:
     ```bash
     cd FRONTEND
     npm start
     ```

3. **Verify Connection**:
   - Open your browser and navigate to `http://localhost:3000`.
   - The React app should display data fetched from the backend.

## Project Structure

```Insta-Snap/
│
├── node_modules/
├── package-lock.json
├── package.json
├── README.md
└── server.js
│
└── FRONTEND/
├── node_modules/
├── public/
├── src/
│ ├── App.js
│ ├── index.js
│ └── ... (other components and files)
├── .gitignore
├── package-lock.json
├── package.json
└── README.md```




## Dependencies

- Backend:
  - Node.js
  - Express (or other backend framework)

- Frontend:
  - React
  - Axios



