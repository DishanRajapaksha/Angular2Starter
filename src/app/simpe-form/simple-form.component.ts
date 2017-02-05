import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>

      <!-- #myInput is a Reference to the input element -->
      <!-- ngModel's () represents and event, [] represents inputs, Two way binding -->
      <input #myInput type='text' [(ngModel)]="message">
    
      <!-- Creates a (click) event and assigns a method created in the class -->
      <!-- Button click event is taken from the $event, event can be click, mouseover or anything -->
      <button (click)="update.emit({text:message})">Click Me!</button>
    
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  @Input() message;

  @Output() update = new EventEmitter();

  ngOnInit() {
  }

}
