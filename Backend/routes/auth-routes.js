import express from 'express';
import models from '../models/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwtTokens } from '../utils/jwt-helpers.js';

const router = express.Router();
// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await models.User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "Email is incorrect" });
    }

    // Compare passwords
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: "Password is incorrect" });
    }

    // Generate JWT token
    let tokens = jwtTokens(user);
    res.cookie('refresh_token', tokens.refreshToken, { httpOnly: true });
    res.json(tokens);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});
// Refresh token route
router.get('/refresh_token', (req, res) => {
  try {
    const refreshToken = req.cookies.refresh_token;
    if (!refreshToken) return res.status(401).json({ error: 'Null refresh token' });

    jwt.verify(refreshToken, process.env.Refresh_Token_Secret, (error, user) => {
      if (error) return res.status(403).json({ error: error.message });
      let tokens = jwtTokens(user);
      res.cookie('refresh_token', tokens.refreshToken, { httpOnly: true });
      res.json(tokens);
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});
// Delete refresh token route
router.delete('/refresh_token', (req, res) => {
  try {
    res.clearCookie('refresh_token');
    return res.status(200).json({ message: 'Refresh Token deleted' });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});
export default router;
