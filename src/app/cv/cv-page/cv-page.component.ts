import {Component, OnInit} from '@angular/core';
import {Person} from "../../Models/Person";
import {ActivatedRoute, Router} from "@angular/router";
import {CvService} from "../cv.service";

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.css']
})
export class CvPageComponent implements OnInit{
  personne!:Person;
  constructor(private activatedRoute: ActivatedRoute, private cvService: CvService ,private router:Router) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.personne = data['personne'];
    });

  }
  deletePersonne() {
    if (this.personne) {
      this.cvService.deletePersonne(this.personne.id).subscribe(
        () => {
          //this.router.navigate(['/cv']);
        },
        error => {
          console.error('Error deleting CV:', error);
        }
      );
    }
  }


}
