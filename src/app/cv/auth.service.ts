import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<User | null>;
  user$: Observable<User | null>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    const storedUser = isPlatformBrowser(this.platformId) ? localStorage.getItem('currentUser') : null;
    this.userSubject = new BehaviorSubject<User | null>(storedUser ? JSON.parse(storedUser) : null);
    this.user$ = this.userSubject.asObservable();
  }

  private getStoredUser(): User | null {
    try {
      if (isPlatformBrowser(this.platformId)) {
        const storedUser = localStorage.getItem('currentUser');
        return storedUser ? JSON.parse(storedUser) : null;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error retrieving user from localStorage:', error);
      return null;
    }
  }

  loadUserState(): void {
    const storedUser = this.getStoredUser();
    this.userSubject.next(storedUser);
  }

  login(user: User): void {
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.userSubject.next(user);
      } catch (error) {
        console.error('Error saving user to localStorage:', error);
      }
    }
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.removeItem('currentUser');
        this.userSubject.next(null);
      } catch (error) {
        console.error('Error removing user from localStorage:', error);
      }
    }
  }

  isLoggedIn(): boolean {
    return !!this.userSubject.value;
  }
}

export interface User {
  id: number;
  email: string;
}

export class Users implements User {
  id!: number;
  email!: string;
}
