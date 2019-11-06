import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
    Title: String = "Welcome to homepage"
    EmpModel = {
        Id: 0,
        Salary: 3000,
        Name: "John",
        Bonus: 300,
        LastName: "Doe"
    }
    EmpList = [];
    saveData = function(){
        var _emp = {
            Id: this.EmpList.length + 1,
            Salary: this.EmpModel.Salary,
            Name: this.EmpModel.Name,
            Bonus: this.EmpModel.Bonus,
            LastName: this.EmpModel.LastName,
        }
        this.EmpList.push(_emp);
    }
    showCurrentData = function (Emp) {
        this.EmpModel.Id = Emp.Id;
        this.EmpModel.Name = Emp.Name;
        this.EmpModel.Salary = Emp.Salary;
        this.EmpModel.Bonus = Emp.Bonus;
    }
    DeleteData = function (Emp) {
        var _index = this.EmpList.indexOf(Emp);
        this.EmpList.splice(_index,1);
    }
    updateData = function () {
        const inputElement: HTMLInputElement = document.getElementById('Id') as HTMLInputElement
        const inputValue: string = inputElement.value
        var value = -1; // y: number
        console.log(this.EmpList[value]);
        this.EmpList[value].Id = this.EmpModel.Id;
        this.EmpList[value].Name = this.EmpModel.Name;
        this.EmpList[value].Bonus = this.EmpModel.Bonus;
        
        //console.log(id);
    }
    constructor() { }

    // For dependency Injections
    ngOnInit() { }
}
