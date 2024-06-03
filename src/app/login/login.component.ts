import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { AuthKeycloakService } from '@core/auth/services/AuthKeycloakLocal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPage implements OnInit {
  formAuth: FormGroup;

  constructor(
    private router: Router,
    private buiilder: FormBuilder,
    private authServices: AuthKeycloakService,
    private keyCloakService: KeycloakService
  ) {}

  ngOnInit() {
    this.formAuth = this.buiilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    // this.authServices.login('invitado', '1234').subscribe(() => {
    //   console.log('Logged in', this.authServices.user);
    // });
    this.formAuth.markAllAsTouched();
    if (this.formAuth.invalid) return;

    this.authServices
      .login(
        this.formAuth.get('username').value,
        this.formAuth.get('password').value
      )
      .subscribe(() => {
        console.log('KEYCLOAK Logged in');
        this.continue();
      });

    // this.http.post(environment.apiUrl + '/auth/login', {username: 'mario', password: 'mario'})
    // .subscribe(() => {
    //   console.log('Logged in');
    //   this.continue();
    // });
  }

  register() {}

  continue() {
    this.router.navigate(['/card-games/votacion']);
  }
}
