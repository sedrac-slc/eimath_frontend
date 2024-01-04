import { Injectable } from '@angular/core';
import { MathResponse } from '../model/math.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RadicalService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    })
  };

  constructor(private httpClient : HttpClient) { }

  public solve(params: any) : Observable<MathResponse>{
    return this.httpClient.post<MathResponse>(environment.API_URL+"/radical",params,this.httpOptions);
  }

}
