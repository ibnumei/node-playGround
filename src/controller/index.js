const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);
const controller = {};

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file));
    const name = file.split('.')[0];
    controller[name] = model;
    console.log('Load Controller...', name);
  });

module.exports = controller;
