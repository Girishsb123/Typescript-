// function greet(greeting:string,name:string):string
// {
//     return greeting+"  "+name;
// }

//console.log(greet("Welcome","John"));
//console.log(greet("Welocme")); Expected 2 arguments, but got 1.
//console.log(greet("Welocme","John","Smith")); Expected 2 arguments, but got 3.

//Optional parameter
function dog(name:string,breed?:string,price?:number):any
{
    return name+" "+breed+" "+price;
}

console.log(dog("Browny","Mudhol",25000));
console.log(dog("blacky"));

//Default param

// function greet(name:string,greeting:string="hello"):string
// {
//     return greeting+"  "+name;
// }

// console.log(greet('John'));
// console.log(greet('John','Welcome'));
// console.log(greet('smith'));






