import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LinkUtil {

  public: string ='';
  math: string = 'math';
  study_group: string ='study-group';

  public_login: string ='login';
  public_register: string ='register';

  study_group_maneger: string ='maneger';
  study_group_participation: string = 'participation';

  math_arithmetic: string ='arithmetic';
  math_equation: string = 'equation';
  math_radical: string ='radical';

  api_register: string = environment.API_URL + '/authorization/register';
  api_login: string = environment.API_URL + '/authorization/login';

  api_math_arithmetic: string = environment.API_URL + '/arithmetic';
  api_math_radical: string = environment.API_URL + '/radical';
  api_math_equation: string = environment.API_URL + '/equation';

  api_study_group_find_all: string = environment.API_URL + '/groups/page';
  api_study_group: string = environment.API_URL + '/groups';

}
