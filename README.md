
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

Navigate to the backend directory:

```bash
cd Backend
```

Install backend dependencies:

```bash
npm install
```

Create and configure `server.js`:

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

Start the backend server:

```bash
npm start
```

## Frontend Setup

Navigate to the frontend directory:

```bash
cd ../Frontend
```

Install frontend dependencies:

```bash
npm install
```

Run npm audit fix:

```bash
npm audit fix
```

If necessary, you can use --force to address all issues, including breaking changes:

```bash
npm audit fix --force
```

Install axios:

```bash
npm install axios
```

Update `App.js` to fetch data from the backend:

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

## Connecting Frontend and Backend

Ensure the backend server is running on `http://localhost:5000`.
The React frontend will fetch data from the backend using the endpoint `http://localhost:5000/api/data`.

## Running the Application

### Start Backend Server

```bash
cd Backend
npm start
```

### Start Frontend Development Server

```bash
cd ../Frontend
npm start
```

### Verify Connection

Open your browser and navigate to `http://localhost:3000`.
The React application should display data fetched from the backend.

## Project Structure

```
Insta-Snap/
│
├── Backend/
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│
├── Frontend/
│   ├── node_modules/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   ├── robots.txt
│   ├── src/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   ├── setupTests.js
│   ├── package-lock.json
│   ├── package.json
│
├── .gitignore
├── README.md
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
- web-vitals

