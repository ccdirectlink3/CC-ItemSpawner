const fs = require('fs-extra');

console.log('Cleaning dist...');
fs.removeSync('dist');
console.log('Done cleaning files!');

