import {Component, OnInit} from '@angular/core';
import {CvService} from "../cv.service";
import {CommonModule} from "@angular/common";
import {Person} from "../../Models/Person";
import {map, Observable, of} from "rxjs";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']

})
export class CvComponent implements OnInit{
  constructor(private route: ActivatedRoute) {}

  personnes$: Observable<Person[]>=of([]);
  selectedPersonne!: Person;

  ngOnInit(){
    this.personnes$= this.route.data.pipe(
      map(data => data['personnes'])
    );  }

  selectPersonne(personne:Person){
    this.selectedPersonne=personne;
  }
}
