import {Component, Input} from '@angular/core';
import {EmbaucheService} from "../embauche.service";
import {Person} from "../../Models/Person";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css']
})
export class DetailsCvComponent {
  @Input() person = new Person();

  constructor(private embaucheService:EmbaucheService) {
  }

  embaucher() {
    this.embaucheService.embaucher(this.person);
  }
}
