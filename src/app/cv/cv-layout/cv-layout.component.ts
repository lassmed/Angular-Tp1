import {Component, OnInit} from '@angular/core';
import {Person} from "../../Models/Person";
import {map, Observable, of} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cv-layout',
  templateUrl: './cv-layout.component.html',
  styleUrls: ['./cv-layout.component.css']
})
export class CvLayoutComponent implements OnInit{
  selectedPersonne = new Person();
  personnes$: Observable<Person[]>=of([]);

  constructor(private route: ActivatedRoute,private router: Router) {}

  ngOnInit(){
    console.log('CvLayoutComponent ngOnInit called');
    this.personnes$ = this.route.data.pipe(
      map(data => data['personnes'])
    );
  }

  selectPersonne(personne:Person){
    this.selectedPersonne=personne;
    this.router.navigate(['/list', personne.id]);
  }
}
