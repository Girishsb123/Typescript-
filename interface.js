var emp1 = {
    empName: 'John',
    empID: 101,
    empSal: 5000,
    dispData: function () {
        console.log(this.empName + " " + this.empID + " " + this.empSal);
    }
};
console.log(emp1.empName);
console.log(emp1.empID);
console.log(emp1.empSal);
emp1.dispData();
