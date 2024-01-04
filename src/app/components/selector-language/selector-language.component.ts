import { Component, ViewEncapsulation } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { ILanguage } from 'src/app/interfaces/language.interface';
import { ImageUtil } from 'src/app/utils/image.util';


@Component({
  selector: 'app-selector-language',
  templateUrl: './selector-language.component.html',
  styleUrls: ['./selector-language.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SelectorLanguageComponent {

  languages: Array<ILanguage> = [];
  valueSelected: string = "";

  private createLanguage(code: string, message: string, image: string): ILanguage{
    return {code: code, name: message, image: image, selected: this.languageService.isChoosedLanguage(code)};
  }

  private createListLanguage(): void{
    this.languages = [
      this.createLanguage(this.languageService.pt, this.languageService.message().pt, this.image.country_brazil),
      this.createLanguage(this.languageService.en, this.languageService.message().en, this.image.country_usa),
      this.createLanguage(this.languageService.es, this.languageService.message().es, this.image.country_spain),
      this.createLanguage(this.languageService.fr, this.languageService.message().fr, this.image.country_france),
      this.createLanguage(this.languageService.it, this.languageService.message().it, this.image.country_italy),
    ];
  }

  constructor(protected languageService: LanguageService, protected image: ImageUtil){
    this.createListLanguage();
  }

  changeLanguage(option: any){
    this.languageService.changeLanguageLocalStorage(option.value);
    this.createListLanguage();
  }

  imageSelected(): string{
    let n = this.languages.findIndex(it => it.selected);
    if(n > 0) return this.languages[n].image;
    n = this.languages.findIndex(it => it.code == this.languageService.lang);
    return this.languages[n].image;
  }

}
