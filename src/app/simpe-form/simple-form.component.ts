import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>

      <!-- Input message -->
      {{message}}

      <!-- #myInput is a Reference to the input element -->
      <input #myInput type='text'>
    
      <!-- Creates a (click) event and assigns a method created in the class -->
      <!-- Button click event is taken from the $event, event can be click, mouseover or anything -->
      <button (click)="onClick($event, myInput.value)">Click Me!</button>
    
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  @Input() message;

  onClick(event, value) {
    console.log(event);
    console.log(value);
  }

  ngOnInit() {
  }

}
