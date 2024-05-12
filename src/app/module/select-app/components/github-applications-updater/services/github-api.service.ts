import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as githubApi from 'github-api';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  HeadersGithubAPi = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };

  constructor(private http: HttpClient) {}

  getRealeaseApp(repo: string, page: number = 1, per_page: number = 10) {
    let params = new HttpParams();
    params.append('page', page.toString());
    params.append('per_page', per_page.toString());
    return this.http.get<any[]>(`https://api.github.com/${repo}/releases`, {
      headers: this.HeadersGithubAPi,
      params: params,
    });
  }
}
