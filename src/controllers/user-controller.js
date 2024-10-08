import User from '../models/user-model.js';
import jwtService from '../services/jwt-service.js';

export const signup = async (req, res) => {
  try {
    if (!req.body.name || !req.body.birthday_date || !req.body.email || !req.body.password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const user = await User.create({
      name: req.body.name,
      birthday_date: req.body.birthday_date,
      email: req.body.email,
      password: req.body.password,
      permission_type: req.body.permission_type || "USER",
      phones: req.body.phones,
      address: req.body.address,
      house_number: req.body.house_number,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await user.isValidPassword(req.body.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwtService.generateAccessToken({ id: user._id, permission_type: user.permission_type });

    res.json({
      token,
      user: {
        name: user.name,
        permission_type: user.permission_type,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
