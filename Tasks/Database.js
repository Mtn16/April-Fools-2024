const fs = require('fs'); // Pokud pracujete v prostředí Node.js
const path = require('path'); // Pokud pracujete v prostředí Node.js

// Funkce pro načtení databáze ze souboru
function loadDatabase() {
  const databasePath = path.join(__dirname, "..", 'database.json'); // Cesta k databázovému souboru
  const data = fs.readFileSync(databasePath, 'utf8');
  return JSON.parse(data);
}

// Funkce pro uložení databáze do souboru
function saveDatabase(database) {
  const databasePath = path.join(__dirname, "..", 'database.json'); // Cesta k databázovému souboru
  fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));
}

// Funkce pro přidání skóre do databáze
function addScore(id, score) {
    let database = loadDatabase()
  const index = database.data.findIndex(item => item.id === id);
  
  if (index !== -1) {
    // Pokud id již existuje, přičti skóre
    database.data[index].score += score;
  } else {
    // Pokud id neexistuje, přidej nový záznam
    database.data.push({ id: id, score: score });
  }
  
  saveDatabase(database);
}

module.exports = {
    addScore,
    loadDatabase
}