import {Component, OnInit} from '@angular/core';
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
import {AuthService, User} from "../cv/auth.service";
import {UserLogin} from "../Models/user-login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user = {
    email: '',
    password: '',
  };
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  login(credentials: User) {
    console.log(credentials);
    this.authService.login(credentials).subscribe(
      (response: any) => {
        if ('id' in response && 'ttl' in response && 'created' in response && 'userId' in response) {
          const userLoginResponse: UserLogin = response as UserLogin;
          console.log(userLoginResponse);

          const token = userLoginResponse.id;
          const link = ['cv'];
          localStorage.setItem('token', token);
          console.log(token);
          this.router.navigate(link);
        } else {
          console.error('Unexpected response format:', response);
        }
      },
      (error) => {
        console.error('Authentication failed!', error);
      }
    );
  }

  /*onSubmit() {

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

  }*/
}
