//Numbers

var first:number=12;
var second:number=0x37CF;
var third:number=0o366;
var fourth:number=0b111001;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

console.log("----------------");


//String
var empName:string="John";
var empDpt:string="IT";

console.log(empName);
console.log(empDpt);

var stmt:string = empName+ " works in " +empDpt;
console.log(stmt);

//Boolean
var b:boolean=true;
console.log(b);

//Void type
function hello():void
{
    console.log("This is welcome message");
    
}

//Null : Represents a variable whose value is undefined
var num1:number=null;
num1=100;
console.log(num1);

//Undefined : Primitive types denotes all uninitialized variables
var num2:number=undefined;
num2=100;
console.log(num2);

//Any type
var val:any="Hi";
val = 100;
console.log(val);

val = false;
console.log(val);

function myfunction(x:any, y:any){

    console.log(x+y); 

}
myfunction(10,20);
myfunction("Hi","Welcome");
myfunction("Peter",29);











