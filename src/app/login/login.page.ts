import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingInterceptor } from '../core/loader/interceptor/loading.interceptor';
import { LoaderService } from '../core/loader/services/loader.service';
import { environment } from 'src/environments/environment';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HttpClientModule, FormsModule],
})
export class LoginPage implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  login() {
    this.http.post(environment.apiUrl + '/auth/login', {username: 'mario', password: 'mario'})
    .subscribe(() => {
      console.log('Logged in');
      this.continue();
    });
  }

  register() {}

  continue(){
    this.router.navigate(['/home/datos']);
  }
}
