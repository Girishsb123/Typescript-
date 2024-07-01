"use strict";
//variable
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 'Welcome';
//Simple function
function myFunction() {
    console.log("This is my function");
}
//Class
var myclass = /** @class */ (function () {
    function myclass(a, b) {
        var _this = this;
        this.add = function () {
            return (_this.a + _this.b);
        };
        this.a = a;
        this.b = b;
    }
    return myclass;
}());
