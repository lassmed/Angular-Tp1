import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CvService} from "../cv.service";

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit{

  constructor(private cvService:CvService) {}

  addPersonne(formulaire: NgForm) {
    console.log(formulaire);
    this.cvService.addPersonne(formulaire.value).subscribe();;
  }

  ngOnInit(): void {
  }
}
