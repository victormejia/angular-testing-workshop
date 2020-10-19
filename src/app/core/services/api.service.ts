import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hacker } from '../hacker.model';

@Injectable()
export class ApiService {

  baseUrl = '/api';

  constructor(public http: HttpClient) { }

  getHackers(search: string = '') {
    return this.http.get<Hacker[]>(`${this.baseUrl}/hackers?q=${search}`)
      .toPromise();
  }

  getHackerDetails(id: string) {
    return this.http.get<Hacker>(`${this.baseUrl}/hackers/${id}`)
      .toPromise();
  }
}
