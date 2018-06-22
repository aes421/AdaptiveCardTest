const babel = require("@babel/core");
const plugin = require("./lib/index");
const fs = require('fs');

const acx = require("./test/test.js");

//const card = 
const code = fs.readFileSync('./card.acx', 'utf8');

const output = babel.transform(code, {
    plugins: [plugin, '@babel/plugin-syntax-jsx'],
    presets: ['@babel/preset-env']
  }).code;

console.log(output);