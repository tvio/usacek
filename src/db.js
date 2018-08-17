"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_js_1 = require("./data.js");
//vracim string pro web server, pripadne prepsat na objekt pro potreby db
function insert(data) {
    data_js_1.dny.push(data);
    return JSON.stringify(data_js_1.dny);
}
exports.insert = insert;
;
console.log(insert({
    id: 2,
    kdo: 2,
    datum: new Date(),
    pozn1: 'xx',
    pozn2: 'xx2'
}));
function select() {
    return JSON.stringify(data_js_1.dny);
}
exports.select = select;
;
function update() { }
exports.update = update;
;
