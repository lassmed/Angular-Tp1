import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from "../../Models/Person";

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent {
  @Input() Personne!:Person;
  @Output() selectedPersonne =new EventEmitter();
  

  selectPersonne() {
    this.selectedPersonne.emit(
      this.Personne
    );
  }
}
