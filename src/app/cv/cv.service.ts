import { Injectable } from '@angular/core';
import {Person} from "../Models/Person";
import {catchError, Observable, of, tap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private apiUrl = 'https://apilb.tridevs.net/api/personnes';



  constructor(private http: HttpClient) {
  }
  personnes : Person[]=[];
  getPersonnes(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl).pipe(
      tap(data => this.personnes = data),
      catchError(error => {
        console.error('Error fetching data from the API:', error);
        return of(this.getFakePersonnes());
      })
    );
  }
  getFakePersonnes(){
    return [
      new Person(1,'oumayma','ouerfeli',22,'assets/images/ouma.jpeg',1234,'Software Engineer'),
      new Person(2,'mohamed','lasswed',22,'assets/images/lasss.jpeg',1111, 'Technician'),
      new Person(3,'ahmed','wesleti',22,'',1099, 'Web Developer')
    ];
  }

  getPersonneById(id: number): Observable<Person | undefined> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Person>(url);
  }
  deletePersonne(cvId: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${cvId}`;
    return this.http.delete<void>(deleteUrl).pipe(
      tap(() => {
        //this.personnes = this.personnes.filter(person => person.id !== cvId);
      }),
      catchError(error => {
        console.error('Error deleting data from the API:', error);
        return of(error);
      })
    );
  }
}
