"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var CharacterCollection_1 = require("./CharacterCollection");
var numberCollection = new NumberCollection_1.NumbersCollection([-3, 0, 5, 2, 0]);
var charCollection = new CharacterCollection_1.CharacterCollection('Xaayb');
console.log(charCollection.sort());
console.log(charCollection);
// const linkCollection = new LinkedList();
// linkCollection.add(10);
// linkCollection.add(1);
// linkCollection.add(40);
// const linkSorter = new Sorter(linkCollection);
// linkSorter.sort();
// linkCollection.print();
