
# Insta-Snap

Insta-Snap is a full-stack application that connects a React frontend with an Express backend. This README provides a detailed guide on setting up, developing, and deploying the application.

## Table of Contents

- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Connecting Frontend and Backend](#connecting-frontend-and-backend)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Clone the Repository

```bash
git clone https://github.com/jacobkap1/Insta-Snap.git
cd Insta-Snap
```

## Backend Setup

1. **Navigate to the backend directory**:

    ```bash
    cd Backend
    ```

2. **Install backend dependencies**:

    ```bash
    npm install
    ```

3. **Create and configure `server.js`**:

    Ensure you have a `server.js` file with the following content:

    ```javascript
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');

    const app = express();
    const port = 5000;

    app.use(cors());
    app.use(bodyParser.json());

    // Define the /api/data endpoint
    app.get('/api/data', (req, res) => {
      res.json({ message: 'Hello from the backend!' });
    });

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
    ```

4. **Start the backend server**:

    ```bash
    npm start
    ```

## Frontend Setup

1. **Navigate to the frontend directory**:

    ```bash
    cd FrontEnd
    ```

2. **Install frontend dependencies**:

    ```bash
    npm install
    ```

3. **Update `App.js` to fetch data from the backend**:

    Ensure your `src/App.js` contains the following:

    ```javascript
    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    function App() {
      const [data, setData] = useState(null);
      const [error, setError] = useState(null);

      useEffect(() => {
        axios.get('http://localhost:5000/api/data')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            setError('There was an error fetching data!');
            console.error(error);
          });
      }, []);

      return (
        <div className="App">
          <header className="App-header">
            <h1>React Frontend Connected to Backend</h1>
            {error ? (
              <p>{error}</p>
            ) : data ? (
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

4. **Configure `package.json` with `browserslist`**:

    Ensure your `FRONTEND/package.json` contains the following `browserslist` configuration:

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
      "proxy": "http://localhost:5000",
      "browserslist": {
        "production": [
          ">0.2%",
          "not dead",
          "not op_mini all"
        ],
        "development": [
          "last 1 chrome version",
          "last 1 firefox version",
          "last 1 safari version"
        ]
      }
    }
    ```

## Connecting Frontend and Backend

- Ensure the backend server is running on `http://localhost:5000`.
- The React frontend will fetch data from the backend using the endpoint `http://localhost:5000/api/data`.

## Running the Application

### Start Backend Server

```bash
cd Insta-Snap
npm start
```

### Start Frontend Development Server

```bash
cd FRONTEND
npm start
```

### Verify Connection

- Open your browser and navigate to `http://localhost:3000`.
- The React application should display data fetched from the backend.

## Project Structure

```
Insta-Snap/
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
    │   ├── App.js
    │   ├── index.js
    │   └── ... (other components and files)
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md
```

## Dependencies

### Backend

- axios
- body-parser
- cors
- express

### Frontend

- react
- react-dom
- react-scripts
- axios

