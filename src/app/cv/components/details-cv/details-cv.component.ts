import {Component, Input} from '@angular/core';
import {EmbaucheService} from "../../services/embauche.service";
import {Person} from "../../../Models/Person";
import { Router } from '@angular/router';
@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css']
})
export class DetailsCvComponent {
  @Input() person = new Person();

  constructor(private embaucheService:EmbaucheService,private router: Router) {
  }

  embaucher() {
    this.embaucheService.embaucher(this.person);
  }
}
