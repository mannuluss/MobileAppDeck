import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CardSprintService {
  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get<any>(
      `${environment.apiAzureRepoSprint}/getConfigSprintVotation`,
      {
        headers: {
          'LOADING-SCREEN': 'NONGET',
        },
      }
    );
  }

  saveVotacion(data: any) {
    return this.http.post<any>(
      `${environment.apiAzureRepoSprint}/votarSprint`,
      data
    );
  }
}
