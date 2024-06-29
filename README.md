
# Combined Backend

This is a Node.js backend project combining authentication, user management, and PostgreSQL database integration using Sequelize.

## Features

- JWT Authentication
- User Management (CRUD operations)
- PostgreSQL database integration using Sequelize ORM
- Environment configuration with dotenv

## Prerequisites

- Node.js (version 20.15.0 or higher)
- PostgreSQL database
- npm (version 7 or higher)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd combined-backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a .env file in the root directory and configure the following environment variables:

   ```env
   NODE_ENV=development
   PORT=5000
   DATABASE_URL=postgres://<username>:<password>@<host>:<port>/<database>
   Access_Token_Secret=your_jwt_secret_key
   ```

4. Set up your PostgreSQL database and configure the connection in config/config.json:

   ```json
   {
     "development": {
       "username": "your_db_username",
       "password": "your_db_password",
       "database": "your_db_name",
       "host": "127.0.0.1",
       "dialect": "postgres"
     },
     "test": {
       "username": "your_db_username",
       "password": "your_db_password",
       "database": "database_test",
       "host": "127.0.0.1",
       "dialect": "postgres"
     },
     "production": {
       "username": "your_db_username",
       "password": "your_db_password",
       "database": "database_production",
       "host": "127.0.0.1",
       "dialect": "postgres"
     }
   }
   ```

## Running the Server

To start the server in development mode:

```bash
npm run dev
```

To start the server in production mode:

```bash
npm start
```

## Project Structure

```plaintext
Backend/
├── config/
│   └── config.json
├── middleware/
│   └── authorization.js
├── migrations/
│   └── 20240629102755-create-user.js
├── models/
│   ├── index.js
│   └── user.js
├── public/
├── routes/
│   ├── auth-routes.js
│   ├── auth.js
│   └── users-routes.js
├── utils/
│   ├── db.js
│   └── index.js
├── .env
├── package.json
├── package-lock.json
└── server.js
```

- config/config.json: Database configuration for different environments.
- middleware/authorization.js: Middleware for JWT authentication.
- migrations/: Contains Sequelize migrations.
- models/: Contains Sequelize models and database configuration.
- routes/: Contains route handlers for authentication and user management.
- utils/: Utility files, such as database connection.
- public/: Static files.
- server.js: Entry point of the application.

## Making Changes

### Adding New Routes

1. Create a new file in the routes directory.
2. Define your route handlers.
3. Import and use the new routes in server.js:

   ```javascript
   import newRouter from './routes/new-routes.js';
   app.use('/api/new', newRouter);
   ```

### Modifying Models

1. Update the corresponding model file in the models directory.
2. Ensure the database schema is updated by running Sequelize migrations.

### Changing Middleware

1. Update or add new middleware in the middleware directory.
2. Use the middleware in your routes as needed:

   ```javascript
   import newMiddleware from '../middleware/new-middleware.js';
   router.get('/new-route', newMiddleware, async (req, res) => {
     // Your route handler code
   });
   ```

## JWT Token Management

### Configuration

The JWT secret key is stored in the .env file:

```env
Access_Token_Secret=your_jwt_secret_key
```

The middleware that uses this token is located in middleware/authorization.js:

```javascript
import jwt from 'jsonwebtoken';

export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.status(401).json({ error: "Null token" });

    jwt.verify(token, process.env.Access_Token_Secret, (error, user) => {
        if (error) return res.status(403).json({ error: error.message });
        req.user = user;
        next();
    });
}
```

The token is used in the routes, for example, in routes/users-routes.js:

```javascript
import { authenticateToken } from '../middleware/authorization.js';

router.get('/', authenticateToken, async (req, res) => {
  try {
    const users = await models.User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

## Database Configuration and Management

### Configuration

Database configuration is handled in config/config.json.

Models are defined in the models directory, for example, models/user.js:

```javascript
export default (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return User;
};
```

Sequelize migrations are stored in the migrations directory. You can create new migrations using the Sequelize CLI:

```bash
npx sequelize-cli migration:generate --name migration-name
```

### Running Migrations

Run the following command to apply all migrations:

```bash
npx sequelize-cli db:migrate
```

## Testing

### Curl Commands

To test your endpoints, you can use curl commands from the terminal or a tool like Postman. Here are some curl commands to test the main functionalities of your application.

#### Create a New User

```sh
curl -X POST http://localhost:5000/api/users -H "Content-Type: application/json" -d '{
    "name": "Bob",
    "email": "bob1@email.com",
    "password": "KissUBab"
}'
```

#### Login

```sh
curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d '{
    "email": "bob1@email.com",
    "password": "KissUBab"
}'
```

#### Get All Users (Protected Route)

Assuming you have received the access token from the login command, replace `<ACCESS_TOKEN>` with the actual token.

```sh
curl -X GET http://localhost:5000/api/users -H "Authorization: Bearer <ACCESS_TOKEN>"
```

#### Refresh Token

If you have a refresh token set as an HTTP-only cookie, you can use the following command to refresh the access token.

```sh
curl -X GET http://localhost:5000/api/auth/refresh_token --cookie "refresh_token=<REFRESH_TOKEN>"
```

#### Delete Refresh Token

To delete the refresh token cookie.

```sh
curl -X DELETE http://localhost:5000/api/auth/refresh_token
```

### Example Workflow

1. Create a new user:

   ```sh
   curl -X POST http://localhost:5000/api/users -H "Content-Type: application/json" -d '{
       "name": "Alice",
       "email": "alice@email.com",
       "password": "alicepassword"
   }'
   ```

2. Login to get the tokens:

   ```sh
   curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d '{
       "email": "alice@email.com",
       "password": "alicepassword"
   }'
   ```

   Response example:

   ```json
   {
       "accessToken": "your_access_token",
       "refreshToken": "your_refresh_token"
   }
   ```

3. Use the access token to access protected routes:

   ```sh
   curl -X GET http://localhost:5000/api/users -H "Authorization: Bearer your_access_token"
   ```

4. Refresh the access token:

   ```sh
   curl -X GET http://localhost:5000/api/auth/refresh_token --cookie "refresh_token=your_refresh_token"
   ```

5. Delete the refresh token:

   ```sh
   curl -X DELETE http://localhost:5000/api/auth/refresh_token
   ```


