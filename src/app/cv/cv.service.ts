import { Injectable } from '@angular/core';
import {Person} from "../Models/Person";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  personnes : Person[];
  constructor() {
    this.personnes=[
      new Person(1,'oumayma','ouerfeli',22,'assets/images/ouma.jpeg',1234,'Software Engineer'),
      new Person(2,'mohamed','lasswed',22,'assets/images/lasss.jpeg',1111, 'Technician'),
      new Person(3,'ahmed','wesleti',22,'',1099, 'Web Developer'),];
  }
  getPersonnes(): Person[]{
    return this.personnes;
  }
}
