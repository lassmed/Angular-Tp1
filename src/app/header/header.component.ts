import {Component, OnInit} from '@angular/core';
import {AuthService} from "../cv/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  showModal = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {

    this.authService.loadUserState();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  logout(): void {
    this.authService.logout();
    this.closeModal();
  }
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }


}
