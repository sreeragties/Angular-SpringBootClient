import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  constructor(private employeeService: EmployeeService,
    private router: Router) { 
    this.employees=[];
  }

  ngOnInit(): void {
    
    this.getEmployees();
  }

  employeeDetails(id?: number) {
    this.router.navigate(['employee-details', id]);
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    })
  }

  updateEmployee(id?: number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number = 0) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      this.getEmployees();
    })
  }
}
