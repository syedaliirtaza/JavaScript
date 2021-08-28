Object Oriented Programming 

Classes 

class is a blueprint
think of class is like a mad-lib: you craft something ahead of time and leave gaps and blanks 
later when you go to use it you just fill those blanks with real data 

gen idea of class:
class: person
name: --------
age: ---------
greet: -------

Instances

if class if a blue print think or instance is like a constructed building
with out mad-lib analogy an instance is a final hilarious story after your have filled the blanks
The process of creating a new instance from a class is called instantiation

instance: jane

name: janeDoe
age: 21
greet: "hello jane"

to create a new instance from a classuse new keyword as 

let p1 = new Person ('jane',29);
let p2 = new Person ("john",21);
console.log(p1.name);
p1.sayHello()
p2.sayHello()

this is an idea of instantiation from classes in JavaScript 

Object Literals 

an object literal is named because we're literally creating it inline in our code 
it is set off by curly braces and contains property/value pairs separated by commas 
the exp object is stored in a variable named such as Person ans has any properties and methods assosiated to it 
and we can access those properties and method using a dot syntax

exp 

let Person = {
    name: {
        first: "irtaza",
        last: "irtaza"
    },
    age: 21,
    greet: function(){
        console.log(`hello ${this.name.first}`);
    }
};
console.log(person.name.first);
console.log(person.age);
person.greet();

now suppose we need to write code for other people too so we need to write this over and over again 
to avoid this issue here comes the pesudo class 

Pseudo class 

js don't have traditions classes like other pl
intead it mimics its behaviour using pesudo class 
pseudo class rely on these tow js concepts 
- functions
- prototype

general idea of a pseudo class 

function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function(){
    console.log(`hello ${this.name} i'm ${this.age} years old`);
}

using pseudo class 

let p1 = new Person("jane", 29);
p1.sayHello();

let's dive into this pseudo class 

In Option, a constructor is a function that runs when a new instance if created from a class 
In js, constructor is a function that has same name as the pseudo class( in our case Person)
we named it with a capital letter nothing else special about it 

constructor 

function Person(name,age){ 

    set property name using this.propName
    this.name = name;
    this.age = age;
}

in the constructor we use this to set the property name
the property names are the names that we choose "this.name = name"
it means create a property called name on this object and its name is whatever the user passed in name parameter

you can also change the property names it doesn't matter such as

this.name = a;
this.age = b;

now lets discuss the other part of this pseudo calss which is
prototype method

every object in js has a prototype
a prototype is itself an object that contains methods pof an object
This is why when you see js documentation in MDN you would see things like

- string.prtotype.toUpperCase

the simplistic way to think of it is as the string prototype is what makes a string behaves like a string
and anytime you create a string you're creating a new instance to that prototype which has all the methods andbehaviors attached to it 

now let's discuss the method on the prototype

if we're using functions to mimic a class and we want to define the behavior of a Person
we need to define the prototype method

 Person.prototype.sayHello = function(){
     console.log(`hello ${this.name}`);
 }

 now we can see that it is saying put a method called SayHello on the Person Prototype 
now each instance of person will have access to this method

Life Saving ES6 

es6 introduced a new way of creating classes that is concise and look similar to traditional classes
exp 

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`hello ${this.name}`);
    }
}
let p1 = new Person("jane",21);
console.log(p1);
p1.sayHello();

Inheretance
in es6 inheretance is simple
we simply use the keyword extends to inhert
and to call the constructor of parent class use keywod super()

exp of inheretance

class Person {
    constructor(){

    }
    something(){

    }
}
class Child extends Person {
    constructor(){
        super();
    }
    somethingElse(){

    }
}

by take a parent class person inheret a class student and teacher as well 

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`hello ${this.name}`);
    }
}

class Teacher extends Person{
    constructor(name,age,designation){
        super(name,age);
        this.designation = designation;
    }
    greet(){
        console.log(`hello ${this.name} from ${this.designation}`);
    }
}
class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    sleep(){
        console.log(`hello ${this.name} from major ${this.major}`);
    }
}

creating a new instance from person class 

let p1 = new Person("jane",21);
console.log(p1);
p1.sayHello();

creating a new instance from teacher class 

let p2 = new Teacher("irtaza",21,"eng depart");
console.log(p2);
p2.greet();

creating a new instance from student class 

let p3 = new Student("murtaza",21,"bio");
console.log(p3);
p3.sleep();

Static method

the static keyword defines a method on a class
static method are called without instantiating a class and it is not available on the instance of the class 
they're called on a class itself
static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

exp of static method

class Circle{
    static diameter(circle){
        return circle.width *2;
    }
    constructor(){

    }
    method(){

    }
}

const myCircle = new Circle(5)
console.log(Circle.diameter(myCircle));