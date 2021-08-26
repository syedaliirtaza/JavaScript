// Template literals ES6 

// you don't have to concatinate now you can use template literals

// function sayHello(name) {
//     console.log(`name is ${name}`);
// }
// sayHello("irtaza");

// default params 

// function greet(name) {
//     console.log(`name is ${name}`);
// }
// greet("irtaza");
// greet();
//  to solve this issue what we used to do is

// function greet(name) {
//     if(name === undefined){
//         name = "irtaza";
//     }
//     console.log(`name is ${name }`)
// }
// greet("jacob");
// greet();

// now in es6 we can just use assignment operator to define the value and it will only occur when the aurgument is not passed

// function greet(name = 'jacob') {
//     console.log(`name is ${name}`);
// }
// greet("irtaza");
// greet();

// it works as we expected it to do 
// now with numbers it is poor practice to pass the default parament at first
function mult(a=1, b) {
    console.log(`multiple is ${a*b}`);
}
mult(1,2);
mult(2);
// now this gives NAN which is when you multiply a num with undefined it will give Nan error
// so always give default parameter at the end of parameters

function multiply(a,b=2) {
    console.log(a*b);
}
multiply(2,2);
multiply(1);