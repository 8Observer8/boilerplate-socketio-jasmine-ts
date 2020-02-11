
import { MyClientClass1 } from "../../src/client/MyClientClass1";

describe("MyClientClass1Tests", () =>
{
    it("Constructor_PropertyMyNumberMustBeSetFive", () =>
    {
        let myInstance = new MyClientClass1();
        
        let actualResult = myInstance.MyNumber;

        expect(actualResult).toEqual(5);
    });
});
