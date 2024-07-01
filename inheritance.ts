class Person
{
    name:string;

    constructor(name:string)
    {
        this.name=name;
    }
}

class Employee extends Person
{
    empno:number;
    constructor(empno:number,name:string)
    {
        super(name);
    this.empno=empno;
    }

    displayData():void
    {
        console.log(this.empno);
        console.log(this.name);
    }

    var emp = new Employee(101,'Peter');
    emp.displayData();
    
    
}