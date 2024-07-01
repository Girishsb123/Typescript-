function greet(greetmsg:string,...name:string[]):string
{
    return greetmsg+"  "+name.join(", ");
}

console.log(greet("Welcome","John"));
console.log(greet("Hello"));
console.log(greet("Welcome","john","smith"));


