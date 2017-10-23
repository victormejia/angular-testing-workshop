import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  baseUrl = '/api';

  constructor(public http: Http) { }

  getHackers(search: string = '') {
    return this.http.get(`${this.baseUrl}/hackers?q=${search}`)
      .toPromise()
      .then((res: Response) => res.json());
  }

  getHackerDetails(id: string) {
    return this.http.get(`${this.baseUrl}/hackers/${id}`)
      .toPromise()
      .then((res: Response) => res.json());
  }
}
