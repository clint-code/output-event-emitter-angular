import { Component} from "@angular/core";

@Component({
  selector: 'app-parent-comp',
  template: `
  <app-child-comp
      (messageEvent)="receiveMessageFromChild($event)">
  </app-child-comp>`,
  styleUrls: ['./parent-comp.component.scss']
})
export class ParentCompComponent {

  constructor() {}

  message: string;

  receiveMessageFromChild($event) {

    this.message = $event;
    console.log (this.message)
    
  }

}  

