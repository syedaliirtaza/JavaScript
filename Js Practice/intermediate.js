// same property name in object literal 
// let add = (a,b) => {
//     let sum = a+b;
//     let diff = a-b;
//     return{
//         sum: sum,
//         diff: diff
//     };
// }
// let stat = add(1,2);
// console.log(stat);

// now as we can see the property and value name are same so we can do this as well 

// let add = (a,b) => {
//     let sum = a+b;
//     let diff = a-b;
//     return{
//         sum,
//         diff
//     };
// }
// let stat = add(1,2);
// console.log(stat);

// desturcturing assignment

// this is not the technique you will use frequently but 
// you may seen this in other's code so this is impo

// the values are unpacked from the array and placed it into a variable in the coresponding order

// let [a,b,c] = ['apple','banana', 'orange'];
// console.log(a);
// console.log(b);
// console.log(c);

// apple will be placed in a, banana in b and orange in c so on 

// when you do array destructuring it is based on positioning and when you do ovbject destructuring
// it is based on property name 

// object destructuring

// let p1 = {
//     first: "irtaza",
//     last: "murtaz",
//     age: 21
// };

// let {first} = p1;
// console.log(first);

// can do multiple
// let {first,last,age} = p1;
// console.log(first);
// console.log(last);
// console.log(age);

// we can also give defualt value if the obj doesn't contain the property you're trying to unpack

// let p1 = {
//     first: "irtaza",
//     last: "murtaz",
//     age: 21
// };

// let {first, last, age, gender="F"} = p1;
// console.log(first);
// console.log(last);
// console.log(age);
// console.log(gender);

// and we can also rename the property by using : after unpacking as
// let p1 = {
//     first: "irtaza",
//     last: "murtaz",
//     age: 21
// };

// let {first :myFirst, last :myLast, age :myAge, gender :myGender="F"} = p1;
// console.log(myFirst);
// console.log(myLast);
// console.log(myAge);
// console.log(myGender);

// suppose that the function only need to concern itself to lat and lng so instead
// of putting parameter of address where i can just use address.state or address.lng
//  but there's also  a easy way of doing it
// suppose we only need lat and lng from our address object
// we can simpply desturcture it as 

// let myFunc = ({lat,lng}) => {
//     console.log(`lat is ${lat}`);
//     console.log(`lng is ${lng}`);
// }

// let address = {
//     street: "22 avenue",
//     city: "lahore",
//     state: "punjab",
//     lat: "33",
//     lng: "344"
// };

// myFunc(address);

// see here we unpack the object to only what we really want 