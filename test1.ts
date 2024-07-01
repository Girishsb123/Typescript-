//variable

export var x:string='Welcome';

//Simple function
export function myFunction():void{
    console.log("This is my function");
    
}

//Class
export class myclass{
    a:number;
    b:number;

    constructor(a:number,b:number){
        this.a=a;
        this.b=b;
    }

    add=()=>{

        return(this.a+this.b);

    }
}