define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MyClientClass1 = /** @class */ (function () {
        function MyClientClass1() {
            this.myNumber = 5;
        }
        Object.defineProperty(MyClientClass1.prototype, "MyNumber", {
            get: function () {
                return this.myNumber;
            },
            enumerable: true,
            configurable: true
        });
        return MyClientClass1;
    }());
    exports.MyClientClass1 = MyClientClass1;
});
//# sourceMappingURL=MyClientClass1.js.map