// function greet(greeting:string,name:string):string
// {
//     return greeting+"  "+name;
// }
//console.log(greet("Welcome","John"));
//console.log(greet("Welocme")); Expected 2 arguments, but got 1.
//console.log(greet("Welocme","John","Smith")); Expected 2 arguments, but got 3.
//Optional parameter
function dog(name, breed, price) {
    return name + " " + breed + " " + price;
}
console.log(dog("Browny", "Mudhol", 25000));
console.log(dog("blacky"));
//Default param
function greet(name, greeting) {
    if (greeting === void 0) { greeting = "hello"; }
    return greeting + "  " + name;
}
console.log(greet('John'));
console.log(greet('John', 'Welcome'));
console.log(greet('smith'));
