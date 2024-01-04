import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageUtil {
  private asset: string ='assets/img/';

  teacher_board: string = this.asset+'header-right.png';
  country_brazil: string = this.asset+'brazil.png';
  country_france: string = this.asset+'france.png';
  country_germany: string = this.asset+'germany.png';
  country_italy: string = this.asset+'italy.png';
  country_spain: string = this.asset+'spain.png';
  country_usa: string = this.asset+'united-states.png';

}
