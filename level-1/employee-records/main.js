/*

You are to create a collection of employee's information for your company. 
Each employee has the following attributes:
    Name
    Job title
    Salary
    Status


*/


var employees = [];


function Employee (name, jobTitle, salary) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
    printEmployeeForm(this)
}

function printEmployeeForm(Employee) {
    console.log("Name: " + Employee.name)
    console.log("Job Title: " + Employee.jobTitle)
    console.log("Salary: " + Employee.salary)
    console.log("Status: " + Employee.status)
    console.log("===================")
}

var Ed = new Employee ("Ed", "Carpenter", "5 Jawbreakers")
var Edd = new Employee ("Edd", "Plumber", "10 Jelly Beans")
var Eddy = new Employee ("Eddy", "Cook", "a fistful of Bacon")

Ed.status = "Part Time"
printEmployeeForm(Ed)

employees.push(Ed)
employees.push(Edd)
employees.push(Eddy)

console.log("Employees: " +  employees.length)