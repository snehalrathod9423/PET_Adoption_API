const fs = require('fs');
const path = require('path');

// ✅ Path to pets.json file
const dataPath = path.join(__dirname, '../data/pets.json');

// ✅ Helper function to read pets from file
const loadPets = () => {
  try {
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading pets.json:', err);
    return [];
  }
};

// ✅ Helper function to save pets to file
const savePets = (pets) => {
  fs.writeFileSync(dataPath, JSON.stringify(pets, null, 2));
};

// ✅ GET all pets
exports.getAllPets = (req, res) => {
  const pets = loadPets();
  res.json(pets);
};

// ✅ GET single pet by ID
exports.getPetById = (req, res) => {
  const pets = loadPets();
  const pet = pets.find(p => p.id === parseInt(req.params.id));
  if (!pet) return res.status(404).json({ message: 'Pet not found' });
  res.json(pet);
};

// ✅ POST — Add new pet
exports.addPet = (req, res) => {
  const pets = loadPets();
  const newPet = { id: pets.length + 1, ...req.body };
  pets.push(newPet);
  savePets(pets);
  res.status(201).json(newPet);
};

// ✅ PUT — Update pet by ID
exports.updatePet = (req, res) => {
  const pets = loadPets();
  const index = pets.findIndex(p => p.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: 'Pet not found' });
  }

  pets[index] = { ...pets[index], ...req.body };
  savePets(pets);
  res.json(pets[index]);
};

// ✅ DELETE — Remove pet by ID
exports.deletePet = (req, res) => {
  const pets = loadPets();
  const filteredPets = pets.filter(p => p.id !== parseInt(req.params.id));

  if (filteredPets.length === pets.length) {
    return res.status(404).json({ message: 'Pet not found' });
  }

  savePets(filteredPets);
  res.json({ message: 'Pet deleted successfully' });
};