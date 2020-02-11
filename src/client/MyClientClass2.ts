
export class MyClientClass2
{
    private myString: string;

    public constructor()
    {
        this.myString = "Hello, World";
    }

    public get MyString(): string
    {
        return this.myString;
    }
}