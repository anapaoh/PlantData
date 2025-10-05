const fs = require('fs');
const path = require('path');

class Plant {
  constructor() {
    this.dataPath = path.join(__dirname, '../data/plants.json');
    this.plants = JSON.parse(fs.readFileSync(this.dataPath, 'utf-8'));
  }

  getAll() {
    return this.plants;
  }

  getByIndex(index) {
    const i = index % this.plants.length;
    return this.plants[i];
  }
}

module.exports = new Plant();
