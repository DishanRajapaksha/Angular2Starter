import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>

      <!-- #myInput is a Reference to the input element -->
      <input #myInput type='text'>
    
      <!-- Creates a (click) event and assigns a method created in the class -->
      <button (click)="onClick(myInput.value)">Click Me!</button>
    
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  onClick(value) {
    // console.log('Clicked!!!');
    console.log(value);
  }

  ngOnInit() {
  }

}
