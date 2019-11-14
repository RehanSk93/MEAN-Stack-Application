import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Custom style of date picker control ngx-Bootstrap
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  // List of Technology showing on Browser
  technologies: any[] = ['HTML', 'CSS', 'JavaScript', 'AJAX', 'Bootstrap', 'Node-JS', 'Mongo-DB', 'Express-JS' ];

  // Radio button checked by default using property binding
  gender = 'male';

  // List of position showing on dropdown menu
  positions: any[] = [
    { id: 1, name: 'angular Developer' },
    { id: 2, name: 'React Developer' },
    { id: 3, name: 'angular-JS Developer' },
    { id: 6, name: '.NET Developer' },
    { id: 4, name: 'PHP Developer' },
    { id: 5, name: 'Java Developer' },
    { id: 5, name: 'UI Developer' }
  ];

  // By default select position


  // Checked box checked by default using property binding
  isActive = true;

  // List of Framework showing on Browser
  frameworks: any[] = [
    { framework: 'Angular-JS' },
    { framework: 'React-JS' },
    { framework: 'Angular' },
    { framework: 'CakePHP' },
    { framework: 'Larval' },
    { framework: 'Bootstrap' }
  ];

  // Selected framework you know
  selectedFramework: any[] = [];


  // Configuration of ngx-Bootstrap Date picker control
  datePickerConfig: Partial<BsDatepickerConfig>;

  constructor() { }

  ngOnInit() {
    // Customize Date picker control
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'DD/MM/YYYY',
        showWeekNumbers: false,
        isAnimated: true
      });
  }

  // Select checkbox to store multiple data
  onChange(item: string, isChecked: boolean) {
    if (isChecked) {
      this.selectedFramework.push(item);
    } else {
      // When we will unchecked any item it will remove from the array
      const index = this.selectedFramework.indexOf(item);
      this.selectedFramework.splice(index, 1);
    }
    console.log(this.selectedFramework);
  }

  // submit form details
  onSubmit(form: NgForm) {
    const formValue = {
      userDetails: form.value,
      framework: this.selectedFramework
    };
    console.log(formValue);
  }

}
