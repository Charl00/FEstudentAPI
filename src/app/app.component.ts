import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular-fe';
  constructor() {
    
  }
  changeStudentContact (studentNumber:number, studentContact:string):void{
    // get student information
    // change contact details
  }
}
