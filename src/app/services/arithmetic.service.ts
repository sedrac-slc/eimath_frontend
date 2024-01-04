import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MathResponse } from '../model/math.model';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    })
  };

  constructor(private httpClient : HttpClient) { }

  public solve(params: any) : Observable<MathResponse>{
    return this.httpClient.post<MathResponse>(environment.API_URL+"/arithmetic",params,this.httpOptions);
  }

}
