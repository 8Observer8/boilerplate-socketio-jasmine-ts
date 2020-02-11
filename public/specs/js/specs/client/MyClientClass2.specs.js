define(["require", "exports", "../../src/client/MyClientClass2"], function (require, exports, MyClientClass2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe("MyClientClass2Tests", function () {
        it("Constructor_PropertyMyStringMustBeHelloWorld", function () {
            var myInstance = new MyClientClass2_1.MyClientClass2();
            var actualResult = myInstance.MyString;
            expect(actualResult).toEqual("Hello, World");
        });
    });
});
//# sourceMappingURL=MyClientClass2.specs.js.map