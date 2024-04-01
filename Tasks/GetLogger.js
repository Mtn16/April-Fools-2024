const fs = require("fs")
const chalk = require("chalk");

const info = (message) => {
    fs.appendFileSync("Logs/latest.log", `[${new Date().toISOString()}]: [INFO]: ${message}\n`);
    console.log(`[`+chalk.blueBright("INFO")+`]: ${message}`)
    // Zde můžete provést další operace na základě parametrů
};

const warn = (message) => {
    fs.appendFileSync("Logs/latest.log", `[${new Date().toISOString()}]: [WARN]: ${message}\n`);
    console.log(`[`+chalk.yellow("WARN")+`]: ${message}`)
};

const error = (message) => {
    fs.appendFileSync("Logs/latest.log", `[${new Date().toISOString()}]: [ERROR]: ${message}\n`);
    console.log(`[`+chalk.redBright("ERROR")+`]: ${message}`)
};

const audit = (message) => {
    console.log(`[`+chalk.greenBright("AUDIT")+`]: ${message}`)
};

// Exportování funkce pro použití v jiných souborech
module.exports = {
    info,
    warn,
    error,
    audit,
};