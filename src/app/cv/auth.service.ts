import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private subject: BehaviorSubject<User | null>;
  user$: Observable<User | null>;

  constructor() {
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

  login(user: User): void {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.subject.next(user);
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
