import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValiedService {

  form!: FormGroup;

  constructor() {
  }

  public setFormGroup(form: FormGroup): void{
    this.form = form;
  }

  isValid(name: string): boolean{
    const view = this.form.get(name);
    return view?.valid ?? false;
  }

}
