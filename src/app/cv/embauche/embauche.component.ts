import { Component } from '@angular/core';
import {EmbaucheService} from "../embauche.service";
import {CommonModule} from "@angular/common";
import {Person} from "../../Models/Person";

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {
  personnes:Person[]= [];

  constructor(
    private embaucheService :EmbaucheService
  ) {
  }

  ngOnInit(){
    this.personnes = this.embaucheService.getEmbauches();

  }

}
