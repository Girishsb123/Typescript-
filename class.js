var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
{
    this.eid = eid;
    this.ename = ename;
    this.deptno = deptno;
}
// display():void
// {
// console.log(this.eid);
// console.log(this.ename);
// console.log(this.deptno);
// }
var emp = new Employee(); // object creation
// emp.eid=101;
// emp.ename='John';
// emp.deptno=10;
// emp.display();
emp.setData(101, 'john', 10);
