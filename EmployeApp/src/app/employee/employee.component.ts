import { Component, OnInit } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { EmployeeService } from './shared /employee.service';


declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form)
      form.reset();
      this.employeService.slectedEmployee = {
        _id: null,
        name: "",
        position: "",
        office: ""
      }
    }

  onSubmit(form: NgForm){
    this.employeService.postEmployee(form.value).subscribe((res) => {
      this.resetForm(form);
      M.tost({ html: 'Saved Successfully', classess: 'rounded'});
    });
  }
}
