function add(a, b) {
    return a + b;
}
console.log(add(100, 200));
console.log(add("Welcome", "john"));
//**Function overloading with different number of parameters and types 
// with same name is not supported
function display(a, b) {
    console.log(a + b);
}
function display(a, b) {
    console.log(a + b);
}
