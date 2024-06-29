import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import authRouter from './routes/auth-routes.js';
import usersRouter from './routes/users-routes.js';
import models from './models/index.js'; // Import Sequelize models

dotenv.config(); // Load environment variables from .env file

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const PORT = process.env.PORT || 5000;

const corsOptions = { credentials: true, origin: process.env.URL || '*' };

app.use(cors(corsOptions));
app.use(json()); // Ensure JSON parsing middleware is applied
app.use(cookieParser());

app.use('/', express.static(join(__dirname, 'public')));
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter); // Corrected the path and method

// Endpoint to test database connection
app.get('/users', async (req, res) => {
  try {
    const users = await models.User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

process.on('SIGINT', async () => {
  try {
    await models.sequelize.close();
    console.log('Sequelize has been closed successfully');
    process.exit(0);
  } catch (err) {
    console.error('Error closing Sequelize', err.stack);
    process.exit(1);
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
