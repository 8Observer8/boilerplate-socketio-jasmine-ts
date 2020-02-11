
import { MyClientClass2 } from "../../src/client/MyClientClass2";

describe("MyClientClass2Tests", () =>
{
    it("Constructor_PropertyMyStringMustBeHelloWorld", () =>
    {
        let myInstance = new MyClientClass2();
        
        let actualResult = myInstance.MyString;

        expect(actualResult).toEqual("Hello, World");
    });
});
