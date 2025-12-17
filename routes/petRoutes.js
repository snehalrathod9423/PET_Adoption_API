const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

// CREATE a new pet
router.post('/', async (req, res) => {
  try {
    const pet = new Pet(req.body);
    await pet.save();
    res.status(201).json(pet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL pets with optional search & filters
// Example: GET /api/pets?name=Buddy&breed=Labrador&minAge=1&maxAge=5&adopted=false
router.get('/', async (req, res) => {
  try {
    const { name, breed, minAge, maxAge, adopted } = req.query;
    const filter = {};

    if (name) filter.name = { $regex: name, $options: 'i' }; // partial match
    if (breed) filter.breed = { $regex: breed, $options: 'i' };
    if (minAge) filter.age = { ...filter.age, $gte: Number(minAge) };
    if (maxAge) filter.age = { ...filter.age, $lte: Number(maxAge) };
    if (adopted !== undefined) filter.adopted = adopted === 'true';

    const pets = await Pet.find(filter);
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ONE pet by ID
router.get('/:id', async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ message: 'Pet not found' });
    res.json(pet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE a pet by ID
router.put('/:id', async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pet) return res.status(404).json({ message: 'Pet not found' });
    res.json(pet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a pet by ID
router.delete('/:id', async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    if (!pet) return res.status(404).json({ message: 'Pet not found' });
    res.json({ message: 'Pet deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
