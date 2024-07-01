import express from 'express';
import models from '../models/index.js';
import bcrypt from 'bcrypt';
import { authenticateToken } from '../middleware/authorization.js';

const router = express.Router();

// Endpoint to get all users
router.get('/', authenticateToken, async (req, res) => {
  try {
    const users = await models.User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to create a new user
router.post('/', async (req, res) => {
  console.log('Incoming request body:', req.body);

  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await models.User.create({
      username: name,
      email,
      password: hashedPassword
    });

    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
