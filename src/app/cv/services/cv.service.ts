import { Injectable } from '@angular/core';
import {Person} from "../../Models/Person";
import {catchError, Observable, of, tap, throwError} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private apiUrl = 'https://apilb.tridevs.net/api/personnes';



  constructor(private http: HttpClient,private toastr : ToastrService) {
  }
  personnes : Person[]=[];

  getPersonnes(filter?: any): Observable<Person[]> {

    let params = new HttpParams();
    if (filter) {
      params = params.set('filter', JSON.stringify(filter));
    }
    return this.http.get<Person[]>(this.apiUrl,{ params }).pipe(
      tap(data => this.personnes = data),
      catchError(error => {
        console.error('Error fetching data from the API:', error);
        this.toastr.error('Cannot retrieve data from the API. Using fake data instead.', 'Error', {
          closeButton: true,
          timeOut: 5000,
        });

        return of(this.getFakePersonnes());
      })
    );
  }
  getFakePersonnes(){
    return [
      new Person(1,'oumayma','ouerfeli',22,'ouma.jpeg',1234,'Software Engineer'),
      new Person(2,'mohamed','lasswed',22,'lass.jpg',1111, 'Technician'),
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
        this.toastr.success('Person deleted successfully', 'Success', {
          closeButton: true,
          timeOut: 3000,
        });
      }),
      catchError(error => {
        console.error('Error deleting data from the API:', error);
        this.toastr.error('Failed to delete the person. Please try again.', 'Error', {
          closeButton: true,
          timeOut: 5000, // milliseconds
        });
        return of(error);
      })
    );
  }

  findByName(name:string) : Observable<Person[]>{
    const filter = `{"where":{"name":{"like":"%${name}%"}}}`;
    const params=new HttpParams().set('filter',filter);
    return this.http.get<Person[]>(this.apiUrl,{params});
  }

  addPersonne(personne: Person): Observable<Person> {

    return this.http.post<Person>(this.apiUrl, personne).pipe(
      tap(newPerson => {
        this.personnes.push(newPerson);
        this.toastr.success('Person added successfully', 'Success', {
          closeButton: true,
          timeOut: 3000,
        });
      }),
      catchError(error => {
        console.error('Error adding data to the API:', error);
        this.toastr.error('Failed to add the person. Please try again.', 'Error', {
          closeButton: true,
          timeOut: 5000,
        });
        return throwError(error);
      })
    );
  }

  updatePersonne(p: Person) {
    return this.http.patch(this.apiUrl, p);
  }
}
