import { Component } from '@angular/core';
import {CvService} from "../cv.service";
import {CommonModule} from "@angular/common";
import {Person} from "../../Models/Person";


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']

})
export class CvComponent {
  selectedPersonne = new Person();
  personnes: Person[] = [];
  constructor(
    private cvService:CvService
  ) {
  }
  ngOnInit(){
    this.personnes= this.cvService.getPersonnes();
  }

  selectPersonne($event:Person) {
    console.log($event);
    this.selectedPersonne =$event ;
  }
}
