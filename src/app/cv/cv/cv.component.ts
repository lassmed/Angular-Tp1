import {Component, OnInit} from '@angular/core';
import {CvService} from "../cv.service";
import {CommonModule} from "@angular/common";
import {Person} from "../../Models/Person";
import {Observable, of} from "rxjs";


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']

})
export class CvComponent implements OnInit{


  constructor(private cvService:CvService) {}
  personnes: Observable<Person[]>=of([]);
  selectedPersonne!: Person;
  ngOnInit(){

    this.personnes=this.cvService.getPersonnes()  }

  selectPersonne(personne:Person){
    this.selectedPersonne=personne;
  }
}
