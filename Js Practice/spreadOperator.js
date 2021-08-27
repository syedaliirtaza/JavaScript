Spread Operator

if you have an array of values, you can use the spread operator to send the values into the function as arguments 
basically the spread operator is taking a list of values and breaking thm into a comma separated list

as shown bellow 

let values = [1,2,3,4,5];
let add = (a,b,c,d,e) => {
    console.log(`the sum of all the values is ${a+b+c+d+e}`);
}
now we have to give the function all the arguments it required
and if not atleat the default argument at the end to avoid any erros
now this is very time taking so we put all the value into the array cales values
and then we pass this array into function as argument using spread operator
this operator take the array and break it into a comma spearated list as follows

add(...values);

see easy we don't have to put all the values one by one amazing!
 this is same as saying

add(1,2,3,4,5);

you can also use the spread operator to spread values of array into another array 
as

let low = [1,2,3];
let hight = [8,9,10];

we can make another array to spread the values into this new array 

let n = [...low,4,5,6,...hight];
console.log(n);

and what we can also do is we can spread string into an array as well 
 let str = "irtaza";
 let data = [...str];
 console.log(data);
 console.log(typeof(data));