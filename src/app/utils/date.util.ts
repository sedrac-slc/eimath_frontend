import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtil {

  format(date: any): string{
    if(date == undefined) return '';
    if(date.length == 3){
      let formatDate = date[0]+"-"+(date[1] < 10 ? '0'+date[1] : date[1])+"-"+(date[2] < 10 ? '0'+date[2] : date[2]);
      return formatDate;
    }

    if(date.length == 6){
      let formatDate = date[0]+"-"+(date[1] < 10 ? '0'+date[1] : date[1])+"-"+(date[2] < 10 ? '0'+date[2] : date[2]);
      let formatHour = (date[3] < 10 ? '0'+date[3] : date[3])+":"+(date[4] < 10 ? '0'+date[4] : date[4])+":"+(date[5] < 10 ? '0'+date[5] : date[5]);
      let formatTimestamp = formatDate+" "+formatHour;
      return formatTimestamp;
    }

    return date.toLocaleString('default');
  }

  formatHour(date: any): string{
    if(date.length == 6){
      let formatHour = (date[3] < 10 ? '0'+date[3] : date[3])+":"+(date[4] < 10 ? '0'+date[4] : date[4])+":"+(date[5] < 10 ? '0'+date[5] : date[5]);
      return formatHour;
    }
    return date.toLocaleString('default');
  }

}
