function greet(greetmsg) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    return greetmsg + "  " + name.join(", ");
}
console.log(greet("Welcome", "John"));
console.log(greet("Hello"));
console.log(greet("Welcome", "john", "smith"));
