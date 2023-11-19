import { Injectable } from '@angular/core';
import {Person} from "../Models/Person";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  personnes :Person[];
  constructor() {
    this.personnes=[];
  }
  getEmbauches():Person[]{
    return this.personnes;
  }
  embaucher(personne:Person):void{
    const index = this.personnes.indexOf(personne);
    if(index<0){
      this.personnes.push(personne);
    } else{
      alert(`${personne.name} is already selected`);
    }

  }

  debaucher(personne:Person):void{
    const index = this.personnes.indexOf(personne);
    if (index>=0){
      this.personnes.splice(index,1);
    }
  }
}
