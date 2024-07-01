interface I1{
    a:number,
    b:number,
    sum():number
}

interface I2 extends I1{
    x:number,
    y:number,
    sub():number
}

class C implements I2{
    a:number;
    b:number;
    x:number;
    y:number;

    sum(): number {
        return(this.a+this.b);
    }

    sub(): number {
        return(this.x-this.y);
    }
}

var c = new C();
c.a=100;
c.b=200;
c.x=400;
c.y=300;

console.log(c.sum());
console.log(c.sub());

