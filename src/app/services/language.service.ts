import { Injectable } from '@angular/core';

import Portuguese from '../i18n/pt';
import English from '../i18n/en';
import Frances from '../i18n/fr';
import Italian from '../i18n/it';
import Spanish from '../i18n/es';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

   pt: string = "pt";
   en: string = "en";
   es: string = "es";
   fr: string = "fr";
   it: string = "it";

  lang: string = this.en;

  LOCAL_STORAGE_LANG: string = "lang";

  constructor() { }

  public chooseLanguage(lang: string = "pt") {
    this.lang = lang;
    switch (this.lang) {
      case this.pt:
        return Portuguese;
      case this.es:
        return Spanish;
      case this.fr:
        return Frances;
      case this.it:
         return Italian;
      default:
        this.lang = this.en;
        return English;
    }
  }

  public isChoosedLanguage(lang: string): boolean{
    return localStorage.getItem(this.LOCAL_STORAGE_LANG) == lang;
  }

  public changeLanguageLocalStorage(lang: any){
    localStorage.setItem(this.LOCAL_STORAGE_LANG, lang);
  }

  public message() {
    let langChoose: string = localStorage.getItem(this.LOCAL_STORAGE_LANG) ?? this.lang;
    return this.chooseLanguage(langChoose);
  }



}
