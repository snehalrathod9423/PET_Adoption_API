import fs from 'fs';

export function readJSON(filename) {
  if (!fs.existsSync(filename)) fs.writeFileSync(filename, '[]');
  return JSON.parse(fs.readFileSync(filename));
}

export function writeJSON(filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
}

export default { readJSON, writeJSON };