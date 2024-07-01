interface IEmployee
{
    empName:string
    empID:number
    empSal:number
    dispData: ()=>void;
}

var emp1 : IEmployee={

    
    empName:'John',
    empID:101,
    empSal:5000,
    dispData():void {
        console.log(this.empName+" "+this.empID+" "+this.empSal);
        
    }
}

console.log(emp1.empName);
console.log(emp1.empID);
console.log(emp1.empSal);

emp1.dispData();


