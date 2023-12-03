import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Person} from "../Models/Person";
import {CvService} from "../cv/cv.service";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CvPageResolver implements Resolve<Person| null> {

  constructor(private cvService: CvService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person| null> {
    const id = route.params['id'];
    return this.cvService.getPersonneById(id).pipe(
      map(personne => personne || null)
    );
  }
}
