import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantUtil {
  site_name: string = 'Eimath';
  topic_arithmetic: string = 'auth';
  topic_equation: string = 'equation';
  topic_radical: string = 'radical';

  group_maneger: string = 'maneger';
  group_participation: string = 'participation';
}
