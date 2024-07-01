var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.sum = function () {
        return (this.a + this.b);
    };
    C.prototype.sub = function () {
        return (this.x - this.y);
    };
    return C;
}());
var c = new C();
c.a = 100;
c.b = 200;
c.x = 400;
c.y = 300;
console.log(c.sum());
console.log(c.sub());
