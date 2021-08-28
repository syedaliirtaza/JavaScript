Es5 Array Methods

.every() method
it is the method that will return true or false depending upon weatheer its true that 
every element in the array is passing some kind of ccondition or is true

checking if every value in array is even ? 

let set1 = [2,4,6,8,10,12,14];
let num = set1.every((value) => {
    return value%2 === 0; 
});
console.log(num);

or checking if num in array is greater than 21? 

let number = set1.every((numb) => {
    return numb > 21;
});
console.log(number);

it can require arguments like (val,array,index)

now if we want to check if everyone in the array paid by card or not? 

let order = [{
    total: 21.21,
    method: "card"
},
{
    total: 31.21,
    method: "cash"
},
{
    total: 41.21,
    method: "card"
},
{
    total: 51.21,
    method: "card"
}];

let checkMethod = order.every((val) => {
    val.method === "card";
});
console.log(checkMethod);


.filter() method
it is used to create a new array that contains only those element that passes a certain TextDecoderStream(condition )

create a new array of students that score more then 50 in exams ? 

let examScore = [{
    name: "irtaza",
    score: 92
},
{
    name: "baga",
    score: 42
},
{
    name: "mutu",
    score: 99
},
{
    name: "eman",
    score: 94
},
{
    name: "maha",
    score: 95
},
{
    name: "muhambi",
    score: 44
}];

let checkScore = examScore.filter((val)=>{
    return val.score > 55;
});
console.log(checkScore);

forEach() method 
before for each method if you wanted to access all the elements in the array 
you would run a loop thorugh an array 
but now that can easily be done by using for Each method 

we will take examScore as our array here from above

examScore.forEach((val)=>{
    console.log(val);
});

so now it will go thru each element in array and console log it 

indexOf() method

it is a method that is used to find particular item in an array and it will 
return the first found instance of what it find in the array 
and if the item is not present in an array it willl return -1 

let num = [1,2,3,4,5,6,7,6,9];
let result = num.indexOf(6);
console.log(result);

let names = ['Irt',"murt","kirt"];
let resultName = names.indexOf("murt");
let notfoundName = names.indexOf("irtaza");
console.log(resultName);
console.log(notfoundName);

lastIndexOf() method

this method is same a indexof methodas it is also use to serach for particular item but only diff is that 
it is used to find th very last instance of the perticaular itemthat is find in an array 

let num = [1,2,3,4,5,4,6,4,7];
let result = num.lastIndexOf(4);
console.log(result);

Map() method
what ever we return from an array map ended up in a new array always 

craete a double of every item in an array and make a new array of it ? 

let num = [2,4,6,8,10];
let double = num.map((val)=> {
    return val*2;
});
console.log(double);

Reduce() method
the reduce method is available in all the arrays and very useful method

the purpose of reduce method is to "reduce" an aray into single output value
it does this by executing reducer function for each item in an array 
and allows you to keep the accumulator that serves as the final reduced value 

let set1 = [2,4,6,8,10];

if we don't define accumalator the first value in an array will serve as accumalator 

let result = set1.reduce((acc,val)=>{
    return acc + val;
});

console.log(result);

we can also define accumulator as 
let result = set1.reduce((acc,val)=>{
    return acc + val;
}, 0);
console.log(result);

0 will be the accumulator

find out the avg of set 4

let set4 = [10,10,20,20,30,30];

let result = set4.reduce((acc,val,index,array)=>{
    
    computer sum of all values
    acc += val;
    
    check if we made upto the last index of the array 

    if(index < array.length -1){

        // ifnot then return acc 

        return acc;
    }
    else 
    {

        if we made it to the end of the index of array compute avg 

        return acc/array.length;
    }
    
});

console.log(result);


reduceRight() method 

exactly work same like reduce method the only diff is that is work in the reverse order
so in reduced roght method acc will be the very last item of array if don't defined and flow will be the reverse order

Some() method

this method is used to see weather atleast some items in an array pass the certain condition 

let set = [2,4,7,13];

let ans = set.some((val)=>{
    if(val%2 === 0){
        return true;
    }
    else
    {
        return false;
    }
});

console.log(ans)

easy way of doing this exp is 

let ans = set.some((val)=>{
    return val % 2 === 0;
});
console.log(ans);