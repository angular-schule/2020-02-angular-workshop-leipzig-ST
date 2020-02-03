"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./bar"));
var Customer = /** @class */ (function () {
    function Customer(id) {
        this.id = id;
    }
    Customer.prototype.fooBar = function () {
        var _this = this;
        setTimeout(function () {
            console.log('Die ID ist', _this.id);
        }, 2000);
    };
    return Customer;
}());
exports.Customer = Customer;
exports.foo = 5;
//# sourceMappingURL=customer.js.map