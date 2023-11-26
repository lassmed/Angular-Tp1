import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ValidationErrors,
  Validators,
  ɵElement
} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../cv/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}
  onSubmit() {

    const authenticationEndpoint = 'https://apilb.tridevs.net/api/Users/login';
    this.http.post(authenticationEndpoint, this.user).subscribe(
      (response: any) => {

        console.log('Authentication successful!', response);


        this.authService.login({
          id: response.userId,
          email: this.user.email,
        });

        this.router.navigate(['']);

      },
      (error) => {
        console.error('Authentication failed!', error);
      }
    );

  }
}
