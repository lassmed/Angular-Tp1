import {Component, OnInit} from '@angular/core';
import {Person} from "../../Models/Person";
import {CvService} from "../cv.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit{
  chaine :string='';

  searchResult: Person[]=[];

  constructor( private cvService: CvService,
               private router: Router) {
  }

  ngOnInit(): void {
    this.searchResult=[];
  }


  search(){
    const name=this.chaine.trim();
    if(name.length){
      this.cvService.findByName(name).subscribe(
        (personnes)=> {
          this.searchResult=personnes;
        }
      );

    } else {
      this.searchResult=[];
    }
  }

  selectPersonne(personne: Person) {
    const link =['cv',personne.id];
    this.router.navigate(link);
    this.searchResult=[];
    this.chaine="";

  }
}
