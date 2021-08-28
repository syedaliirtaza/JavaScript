// RestParamter 
// it is visually same but functionally diff then spread parameter

// it can be included into the parameter list of function decalaration 
// the goal is to collect the rest of the remaining arguments 

// It must be the last named parameter in the list

// let otherName = ['irtaza','murtaza','maha']
// let sayHello = (city,name) => {
//     console.log(`hello ${name} from ${city}`);
// }

// watch out here we use Rest Parameter for our function agument
// let greet = (city, ...otherName) => {
//     for (let i=0;i<otherName.length;i++){
//         sayHello(city, otherName[i]);
//     }
// }

// here we use spread parameter 
// greet("barmingham", ...otherName);

// same as saying

// greet("barmingham", "irtaza","murtaza","maha");

// let's see another example we just rest Parameter

// let sayHello = (schoolName,age) =>{
//     console.log(`you're from ${schoolName} and your age is ${age}`);
// }
// let greet = (school, ...yourAges) => {
//     for(let i=0;i<yourAges.length;i++){
//         sayHello(school, yourAges[i]);
//     }
// }
// greet("st. marry", 21,22,23);

// and now here if we even don't wana write ages one by one 
// what we can do is we can simply making it array of ages and pass it by using spread operator as

// let yourAges = [21,22,23]
// greet("st. marry", ...yourAges);
// but remember to declare it befor using the function on it revise the hoisting section 


