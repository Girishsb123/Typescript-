class Bank
{
    rateofIntreset : number=0;

    roi():any
    {
        this.rateofIntreset;
    }
}

class Hdfc extends Bank
{
    roi():any //overriding
    {
        return 10;
    }

}

class ICICI extends Bank
{
    roi():any //overriding
    {
        return 12.5;
    }

}

var h = new Hdfc();
console.log(h.roi());

var i = new ICICI();
console.log(i.roi());


