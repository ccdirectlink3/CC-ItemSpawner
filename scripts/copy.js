const fs = require('fs-extra');

fs.mkdirpSync('dist');

console.log('Copying JS...');
fs.copySync('js', 'dist/js');

// HTML
console.log('Copying HTML...');
fs.copySync('index.html', 'dist/index.html');

// CSS
console.log('Copying CSS...');
fs.copySync('css', 'dist/css');

// Images
console.log('Copying image...');
fs.copySync('img', 'dist/img');

// CCLoader package
console.log('Copying ccmod.json...');
fs.copySync('ccmod.json', 'dist/ccmod.json');
fs.copySync('poststart.js', 'dist/poststart.js');

console.log('Done copying files!');
