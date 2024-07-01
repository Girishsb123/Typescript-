var x = 10;
var y = 20;
// ************ Arithmatic operator / + - * / % ** ++ --
console.log(x + y);
console.log(y - x);
console.log(x * y);
console.log(y / x);
console.log(x % y);
console.log(Math.pow(5, 2));
// x=x+1
x++; //post increment - 11
//++x; //pre increment - 11
console.log(x);
// y=y-1
y--; //post decrement 
//--y; //pre decrement 
console.log(y); //19
//Assignment Operator
x = 100;
y = 50;
console.log(x += y); // 150
console.log(x -= y);
console.log(x *= y);
console.log(x %= y);
//********* Relational/Comparison operator : retuns boolean value true or false
// > < <= >= != == 
x = 10;
y = 20;
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x != y);
//ternary operator
console.log(x < y ? x : y); //10
console.log(x > y ? x : y); //20
//Logical operator
var a = true;
var b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a);
console.log(!b);
