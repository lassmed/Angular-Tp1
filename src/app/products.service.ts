import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://dummyjson.com/products';
  private pageSize = 12;

  constructor(private http: HttpClient) {}

  getProducts(page: number): Observable<any> {
    const limit = this.pageSize;
    const skip = (page - 1) * this.pageSize;
    const url = `${this.apiUrl}?limit=${limit}&skip=${skip}`;
    return this.http.get<any>(url).pipe(
      tap(response => console.log('API Response:', response))
    );
  }
}
