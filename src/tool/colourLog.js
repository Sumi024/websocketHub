"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors = require('colors');
// 自定义color
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: '#38BC9D',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});
exports.default = colors;
