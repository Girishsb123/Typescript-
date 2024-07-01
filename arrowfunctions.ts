//** Fat arrow function */

var sum2=(x:number,y:number):number=>
{
     return x+y;
}

console.log(sum2(20,30));

//** Parameterless arrow functions */

var Print = () => console.log("Welcome to Typescript");

Print();

//or

// var Print=()=>
// {
//     console.log("Welcome to Typescript");

// }

//If the function body consists of one stmt then
//no need of curly braces as well as return type

// var sum3=(x:number,y:number):number=>
// {
//      return x+y;
// }

//or

var sum3=(x:number,y:number) =>x+y;
console.log(sum3(30,70));






