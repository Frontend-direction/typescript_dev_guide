import {NumbersCollection} from "./NumberCollection";
import {Sorter} from "./Sorter";
import {CharacterCollection} from "./CharacterCollection";
import {LinkedList} from "./LinkedList";


const numberCollection = new NumbersCollection([-3,0,5,2, 0]);

const charCollection = new CharacterCollection('Xaayb');
console.log(charCollection.sort());
console.log(charCollection);
// const linkCollection = new LinkedList();
// linkCollection.add(10);
// linkCollection.add(1);
// linkCollection.add(40);
// const linkSorter = new Sorter(linkCollection);
// linkSorter.sort();
// linkCollection.print();
