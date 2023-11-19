import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from "../../Models/Person";

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent {
  @Input() personnes : Person[] = [];
  @Output() selectedPersonne = new EventEmitter();

  selectPersonne($event: any) {
    console.log($event);
    this.selectedPersonne.emit(
      $event
    );

  }
}
