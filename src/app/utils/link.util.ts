import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LinkUtil {

  public: string ='';
  chat: string ='chat';
  math: string = 'math';
  convits: string ='convits';
  study_group: string ='study-group';

  public_login: string ='login';
  public_register: string ='register';

  study_group_maneger: string ='maneger';
  study_group_participation: string = 'participation';

  study_group_members: string = 'membres';
  study_group_members_parm: string = this.study_group_members+'/:id/:group_type';

  study_group_chat: string = 'chat';
  study_group_chat_parm: string = this.study_group_chat+'/:id/:group_type';

  math_arithmetic: string ='arithmetic';
  math_equation: string = 'equation';
  math_radical: string ='radical';

  api_users: string = environment.API_URL + '/users';
  api_users_password_update: string =  this.api_users + '/password-update';

  api_register: string = environment.API_URL + '/authorization/register';
  api_login: string = environment.API_URL + '/authorization/login';

  api_math_arithmetic: string = environment.API_URL + '/arithmetic';
  api_math_radical: string = environment.API_URL + '/radical';
  api_math_equation: string = environment.API_URL + '/equation';

  api_study_group_find_all: string = environment.API_URL + '/groups/page';
  api_study_group: string = environment.API_URL + '/groups';

  api_members: string = environment.API_URL + '/members';
  api_members_by_group: string = this.api_members+'/by-group';

  api_messages: string = environment.API_URL + '/messages';
  api_messages_by_group: string = this.api_messages+'/by-group';

  api_convits: string = environment.API_URL + '/convits';

}
