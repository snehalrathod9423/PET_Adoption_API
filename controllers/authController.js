import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { readJSON, writeJSON } from '../utils/fileUtils.js';

const usersFile = './data/users.json';

export function register(req, res) {
  const { name, email, password } = req.body;
  const users = readJSON(usersFile);
  if (users.find(u => u.email === email)) return res.status(400).json({ message: 'User exists' });

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = { id: Date.now(), name, email, password: hashedPassword };
  users.push(newUser);
  writeJSON(usersFile, users);

  const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(201).json({ token });
}

export function login(req, res) {
  const { email, password } = req.body;
  const users = readJSON(usersFile);
  const user = users.find(u => u.email === email);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
}
