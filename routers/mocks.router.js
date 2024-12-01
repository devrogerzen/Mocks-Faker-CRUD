import express from 'express';
import { generateUsers, generatePets } from '../controllers/mockingController.js';
import User from '../models/userModel.js';
import Pet from '../models/petModel.js';

const router = express.Router();

router.get('/mockingusers', async (req, res) => {
  try {
    const users = await generateUsers(50);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/generateData', async (req, res) => {
  try {
    const { users, pets } = req.body;
    const generatedUsers = await generateUsers(users);
    const generatedPets = await generatePets(pets);
    res.json({ users: generatedUsers, pets: generatedPets });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/mockingpets', async (req, res) => {
  try {
    const pets = await generatePets(50);
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get('/pets', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;