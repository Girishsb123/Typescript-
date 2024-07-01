var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bank = /** @class */ (function () {
    function Bank() {
        this.rateofIntreset = 0;
    }
    Bank.prototype.roi = function () {
        this.rateofIntreset;
    };
    return Bank;
}());
var Hdfc = /** @class */ (function (_super) {
    __extends(Hdfc, _super);
    function Hdfc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hdfc.prototype.roi = function () {
        return 10;
    };
    return Hdfc;
}(Bank));
var ICICI = /** @class */ (function (_super) {
    __extends(ICICI, _super);
    function ICICI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ICICI.prototype.roi = function () {
        return 12.5;
    };
    return ICICI;
}(Bank));
var h = new Hdfc();
console.log(h.roi());
var i = new ICICI();
console.log(i.roi());
