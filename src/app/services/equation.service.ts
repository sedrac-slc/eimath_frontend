import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MathResponse } from '../model/math.model';
import { environment } from 'src/environments/environment';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class EquationService extends ConfigService{

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    })
  };

  constructor(private httpClient : HttpClient) {
    super();
   }

  public solve(params: any) : Observable<MathResponse>{
    return this.httpClient.post<MathResponse>(environment.API_URL+"/equation",params,this.httpOptions);
  }

}
