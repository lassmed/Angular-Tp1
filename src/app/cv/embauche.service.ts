import { Injectable } from '@angular/core';
import {Person} from "../Models/Person";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  personnes :Person[];
  constructor(private toastr: ToastrService) {
    this.personnes=[];
  }
  getEmbauches():Person[]{
    return this.personnes;
  }
  embaucher(personne:Person):void{
    const index = this.personnes.indexOf(personne);
    if(index<0){
      this.personnes.push(personne);
      this.toastr.success(`${personne.name} has been hired successfully!`, 'Success', {
        closeButton: true,
        timeOut: 5000, // milliseconds
      });
    } else{
      this.toastr.warning(`${personne.name} is already selected`, 'Warning', {
        closeButton: true,
        timeOut: 5000, // milliseconds
      });    }

  }

  debaucher(personne:Person):void{
    const index = this.personnes.indexOf(personne);
    if (index>=0){
      this.personnes.splice(index,1);
    }
  }
}
