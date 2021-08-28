let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    console.log("hello");
})

this is like normal way of representing function 
now let's see es6 style arrow function 

basically in arraow function you don't need to put keyword "function"
and also put arrow in between body and parameter as shown bellow 

btn.addEventListener("click", () => {
    console.log("bye");
});

let a = 5;
let b = 6;

let add = (a,b) => {
    console.log(a+b);
}
add(a,b)

shorthand single parameter 
if you have only one argument as parameter you can simple discard/omit the prenthesis as 

let greet = name => {
    console.log(`name is ${name}`);
}
greet("irtaza")

this is eqvalent to as saying 
let greet = (name) => {
    console.log(`name is ${name}`);
}
greet("irtaza")

short hand; concise body 
when a function simply returns a value and easily execuatable you don't need to put curly brakets to function body 
you would instead use concise body shorthand which is as follows

let add = (a,b) => console.log(`sum is ${a+b}`);
add(4,5);

this is eqvalent to as saying 

let add = (a,b) => {
    console.log(`sum is ${a+b}`);
}
 add(4,5);

when using concise body shorthand your must surround a object with prenthesis 
as shown bellow 

let getStat = (a,b) => ({
    sum: a+b,
    diff: a-b,
    mult: a*b
});
getStat(4,5);
console.log(getStat(4,5));

most verbose exp 

let p1 = {
    firstName: "irtaza",
    lastName: "murtaza",
    age: 21
};
console.log(typeof(p1));

Now most clear we can write is 

let getFullName = (person) => {
    return `first name is ${person.firstName}, and last name is ${person.lastName}`;
};
let result = getFullName(p1);
console.log(result);

single parameter shorthand  

let getFullName = person => {
    return `first name is ${person.firstName}, and last name is ${person.lastName}`;
};
let result = getFullName(p1);
console.log(result);

shorthand and concise body together 

let getFullName = person => `first name is ${person.firstName}, and last name is ${person.lastName}`;
let result = getFullName(p1);
console.log(result);

personally we don't use shorthand but its good to know how to use them 

