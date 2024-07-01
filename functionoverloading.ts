function add(a:number,b:number):number;
function add(a:string,b:string):string;

function add(a:any,b:any)
{
    return a+b;
}

console.log(add(100,200));
console.log(add("Welcome","john"));

//**Function overloading with different number of parameters and types 
// with same name is not supported

function display(a:string,b:string):void
{
    console.log(a+b);
    
}

function display(a:number,b:string):void
{
    console.log(a+b);
    
}


