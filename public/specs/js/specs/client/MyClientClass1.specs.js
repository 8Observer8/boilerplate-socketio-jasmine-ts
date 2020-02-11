define(["require", "exports", "../../src/client/MyClientClass1"], function (require, exports, MyClientClass1_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe("MyClientClass1Tests", function () {
        it("Constructor_PropertyMyNumberMustBeSetFive", function () {
            var myInstance = new MyClientClass1_1.MyClientClass1();
            var actualResult = myInstance.MyNumber;
            expect(actualResult).toEqual(5);
        });
    });
});
//# sourceMappingURL=MyClientClass1.specs.js.map