import {Injectable} from "@angular/core";
import {Person} from "../Models/Person";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {CvService} from "../cv/services/cv.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CvResolver implements Resolve<Person[]>{

  constructor(private cvService: CvService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person[]> {
    console.log('Resolving Cv data...');
    return this.cvService.getPersonnes()
  }

}
