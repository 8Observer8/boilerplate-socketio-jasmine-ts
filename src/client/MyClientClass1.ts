
export class MyClientClass1
{
    private myNumber: number;

    public constructor()
    {
        this.myNumber = 5;
    }

    public get MyNumber(): number
    {
        return this.myNumber;
    }
}