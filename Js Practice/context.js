// function context 

// let person = {
//     name: 'john',
//     sayHello: function () {
//         console.log(this.name);
//     }
// };
// console.log(typeof(person));
// person.sayHello();

// function testThis() {
//     console.log(this)
// }
// testThis();

// manually setting the function context 
// by using call 

// let's first see fcuntion context when we're not using call 

// function sayHello(name) {
//     console.log(name);
//     console.log(this);
// }
// sayHello("irtaza");

// now with call 
// function sayHello(name,age) {
//     console.log(name);
//     console.log(age);
//     console.log(this);
// }
// sayHello.call("murtaza", "iratza", 12);

// the first params is always the function context we wanted to set 
// now let see other method - APPLY 

// with apply it is same as call but only difference is you have to put and array as an arguament instead of comma separated list 
// function sayHello(name,age) {
//     console.log(name);
//     console.log(age);
//     console.log(this);
// }

// sayHello.apply("murtaza",["irtaza",21]);

// Now let's see another method - BIND 
// what bindd doees is like it returns a copy of funtion with this(contxt) manipulated and arguamnets already set to it but functn yet to be execute 

// function sayHello(name,age) {
//     console.log(name);
//     console.log(age);
//     console.log(this);
// }

// let greet = sayHello.bind("jacob");
// greet("irtaza",21);

