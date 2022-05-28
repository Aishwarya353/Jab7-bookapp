import { Component } from '@angular/core';
import { Book } from './common/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
constructor() {}
  
  ngOnInit() {}
  
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  // openModalup() {
  //   this.displayStyle = "block";
  // }
  // closeModalup() {
  //   this.displayStyle = "none";
  // }


   

}
