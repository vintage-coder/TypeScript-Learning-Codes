

export let empSalary:number=100000;


export class Employee{
    empID:number;
    empName:string;

    constructor(ID:number,name:string)
    {
        this.empID=ID;
        this.empName=name;
    }
    getEmpInfo()
    {
        console.log("Employee Name: "+`${this.empName}`+"Employee ID: "+`${this.empID}`);

    }
}

let empDesignation:string="Technical Assistant";  // this annotated variable is not exported so, it is not accessible in other modules.

