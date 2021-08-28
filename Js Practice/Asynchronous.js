asynchoronous code can execute in an unexpected order 

Js is not concurrent

concurrent programming lang refers to the ability to run multipe statment simultaneously
js doesn't have that ability it only run one statement at a time

so if js is running one statment at a time how can the code go async and get out ot its order when they are running

A select Few

There are certain built in functions in js that are asynchronous in nature
perhaps they deal with the file system on a computer
these built in funtions are special because of their async behaviour 
and it could take any ammount of time for it to acces a certain file from a systemor server to respond
and using these functions in your code is the only way to write an async code

exp

setTimeout(() => {
    
}, timeout);

console.log("hello world");
setTimeout(() => {
   console.log('irtaza'); 
}, 3000);
console.log("hello");

now in this exp we uses settimeout function that accepts a function to run as first argument and then wait for some time period in this case 3s
and then run the code that is inside the function
so hello world and then hello and wait for 3 sec and print irtaza 
this will be its flow

Call backs

take this pervious exp as explanation here 

a call back is a function passed into an async function as an argument
you're saying hey async function,you go ahaed and do your thing however long it takes and when you're done
i want u to run this function i'm giving you 

in this exp call back is the first argument passed to settimeout function
settimeout will invoke your callback after the time you decide have passed

setTimeout(() => {

    i'm a call back
    console.log('irtaza'); 
 }, 3000);

 BigInt.addEventListener('click', function(){

    i'm a call back
 })

Promises

A promise is a built in JS object that represents the eventual completion ot failure of the pice of async code
promise has an interanl spacce hat is always one of the following
-pending
-resolved
-rejected

think of it as : a promise is a js objecct wrap around apiece of async code
we don't worry about async code we just have to worry about the promise

Subscribing to notification 

think of a promise as a black box which we can't see 
there are only three outcomes weeather the promise is resolve
weather it is pending or it is rejected

we can subscribe to a notification for when the promise is resolved or rejected
this can be accomplished by attaching callbacks to the promsie by using a function named "then"

.then()

every promise has a built in function named "then"
that accepts two arguments
the first is single paramter call back function that will be called if the promise resolved
and second is single parameter callback that will be called if it is rejected
in this exp getWord is a function that returns a promise

just of understanding

getWord().then(function(word){
    console.log(word);
},
function(error){
    console.log(error);
});

and if you only want to yse the eror handler you can use "catch" to attach only an error handler

let myPromise = getword();

myPromise.catch(function(error){

    i'm error call back
    console.log(error);
});