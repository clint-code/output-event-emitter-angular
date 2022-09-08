import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  template: `
        Father says: {{messageForChild}}
        <br/>
         <button (click)="sendMessage()">Send Message to Son</button>
         <br/>
  `,
  styleUrls: ['./child-comp.component.scss']
})

export class ChildCompComponent {

    @Input()messageForChild: string;

    message: string = "Sir, yes sir!";

    @Output() messageEvent = new EventEmitter<string>();

     constructor() { }

     sendMessage() {
       this.messageEvent.emit(this.message);
    } 
    
}
