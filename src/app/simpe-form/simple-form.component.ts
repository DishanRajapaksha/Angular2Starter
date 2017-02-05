import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  //encapsulation: ViewEncapsulation.Native,
  selector: 'app-simple-form',
  template: `
    <div>

      <!-- #myInput is a Reference to the input element -->
      <!-- ngModel's () represents and event, [] represents inputs, Two way binding -->
      <input #myInput type='text' [(ngModel)]="message" [ngClass]="{mousedown:isMouseDown}"
      (mousedown)="isMouseDown = true" (mouseenter)="isMouseDown = true" (mouseup)="isMouseDown = false" (mouseleave)="isMouseDown = false">
    
      <!-- Creates a (click) event and assigns a method created in the class -->
      <!-- Button click event is taken from the $event, event can be click, mouseover or anything -->
      <button (click)="update.emit({text:message})">Click Me!</button>
    
    </div>
  `,
  styles: [`
    // host represents the selector
    // styles defined inside the component is isolated to that component but global styles get applied to the components
    // that can be stopped using native view encapsulation

    :host{
      display:flex;
      flex-direction:column;
    }

    input:focus{
      font-weight:bold;
      outline:none;
    }

    button{
      border:none;
    }

    .mousedown{
      border:2px solid green;
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  @Input() message;

  @Output() update = new EventEmitter();

  isMouseDown;


  ngOnInit() {
  }

}
