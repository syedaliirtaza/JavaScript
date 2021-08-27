modules allows us to import and export code from one file to another 
use Import, Export and defualt keywords

exporting at declaration

export let add = (a,b) => {
    console.log(`summ is ${a+b}`);
}
we can simply put export keyword infornt of which variable/function/piece of code we want outside this file 

exporting later

let add = (a,b) => {
    console.log(`summ is ${a+b}`);
}
let cityCOde = "LHE"
const MAX = 20;

export { add, max};

here add and max can now be assesible outside the file but not cityCode 
if we have main piece of code that we want to be exported
then we can use defualt keyword
as 

export defualt function sayHello(name){
    alert(name);
}

and then some other variables that you want to export as well 
for them put export
export let max = 80;


Bad practice
export default let cityCode = "lhr";

good practice
let cityCOde = "lhr";
export default cityCOde;

Import
for importing just use import keyword as
your need to specify the path as well 

import { sayHello } from './context.js';

now we can simply use sayHello function in this file 

for importing all the exports from a file 
 
import * as helpers from './context.js';

it will import all the named exports and giving them the name helpers as an object in this case 
now we can simply reff to any eported code using th ename helper as

helpers.sayHello("jane");

import a defualt export

to import a default export, you simply specify a name in which to store that default export without the use of curly braces
import {greet} means "import the named export greet into the module"
and import greet (without curlybraces ) means import the defualt export greet into the module and reff it to as greet 

export default function sayHello(name) {
    console.log(name);
}
export cityCode = "mhh";

// now in the other file we would use

import greet from './context.js';
greet("jane")

this means only import that code which has defult keyword init and reff it to as greet 