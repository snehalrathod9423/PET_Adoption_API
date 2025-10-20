
import { readJSON, writeJSON } from '../utils/fileUtils.js';

const petsFile = './data/pets.json';

export function getPets(req, res) {
  const pets = readJSON(petsFile);
  res.json(pets);
}

export function addPet(req, res) {
  const pets = readJSON(petsFile);
  const pet = { id: Date.now(), ...req.body, owner: req.user.id };
  pets.push(pet);
  writeJSON(petsFile, pets);
  res.status(201).json(pet);
}

export function updatePet(req, res) {
  const pets = readJSON(petsFile);
  const index = pets.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Pet not found' });

  pets[index] = { ...pets[index], ...req.body };
  writeJSON(petsFile, pets);
  res.json(pets[index]);
}

export function deletePet(req, res) {
  const pets = readJSON(petsFile).filter(p => p.id !== parseInt(req.params.id));
  writeJSON(petsFile, pets);
  res.json({ message: 'Pet deleted' });
}
