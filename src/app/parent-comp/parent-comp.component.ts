import { Component} from "@angular/core";

@Component({
  selector: 'app-parent-comp',
  template: `
  <app-child-comp
      [messageForChild]="parentMessage"
      (messageEvent)="receiveMessageFromChild($event)"
      >
  </app-child-comp>
  Response from son: {{message}}`,
  styleUrls: ['./parent-comp.component.scss']
})
export class ParentCompComponent {

  parentMessage = "Tidy your room, young man!";

  constructor() {}

  message: string;

  receiveMessageFromChild($event) {

    this.message = $event;
    console.log (this.message)
    
  }

}  

