import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {UserLogin} from "../../Models/user-login.model";
@Injectable({
  providedIn: 'root',
})
export class AuthService {
 authenticationEndpoint = 'https://apilb.tridevs.net/api/Users/login';
  private subject: BehaviorSubject<User | null>;
  user$: Observable<User | null>;

  constructor(
    private http: HttpClient,
  ) {
    const storedUser = localStorage.getItem('currentUser');
    this.subject = new BehaviorSubject<User | null>(storedUser ? JSON.parse(storedUser) : null);
    this.user$ = this.subject.asObservable();
  }



  private getStoredUser(): User | null {
    const storedUser = localStorage.getItem('currentUser');
    return JSON.parse(storedUser ?? 'null');
  }


  loadUserState(): void {
    const storedUser = this.getStoredUser();
    this.subject.next(storedUser);
  }

  login(user: User) {

       localStorage.setItem('currentUser', JSON.stringify(user));
        this.subject.next(user);

     return this.http.post(this.authenticationEndpoint,user);
  }

  logout(): void {
        localStorage.removeItem('currentUser');
        this.subject.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.subject.value;
  }
}

export interface User {
  id: number;
  email: string;
}
