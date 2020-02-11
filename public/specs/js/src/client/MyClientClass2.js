define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MyClientClass2 = /** @class */ (function () {
        function MyClientClass2() {
            this.myString = "Hello, World";
        }
        Object.defineProperty(MyClientClass2.prototype, "MyString", {
            get: function () {
                return this.myString;
            },
            enumerable: true,
            configurable: true
        });
        return MyClientClass2;
    }());
    exports.MyClientClass2 = MyClientClass2;
});
//# sourceMappingURL=MyClientClass2.js.map