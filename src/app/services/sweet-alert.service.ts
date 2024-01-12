import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class SweetALertService {

  constructor(private language: LanguageService) {
  }

  private swalBasic(icon: any, title: any, text: any, footer: any = ''): void {
    if(footer == '') footer = `<a href="/">${this.language.message().sweet_back_home}?</a>`
    Swal.fire({ icon: icon, title: title, text: text, footer: footer });
  }

  private swalConfirm(runnable: () => void,title: any,text: any ,icon:any='warning'){
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: this.language.message().cancel,
      confirmButtonText: this.language.message().confirm
    }).then((result) => {
      if (result.isConfirmed) {
          runnable();
      }
    })
  }

  validateFalied(){
    this.swalBasic('error',this.language.message().sweet_valid,`${this.language.message().sweet_verify_fields}!`)
  }

  loginFalied(){
    this.swalBasic('error',this.language.message().sweet_valid,`${this.language.message().sweet_crend_invalid}!`)
  }

  passwordFalied(){
    this.swalBasic('warning',this.language.message().sweet_valid,`${this.language.message().sweet_pass_dif}!`)
  }

  createAccountFalied(){
    this.swalBasic('warning',this.language.message().sweet_valid,`${this.language.message().sweet_error_create_account}!`)
  }

  copyFalied(){
    this.swalBasic('warning',this.language.message().sweet_valid,`${this.language.message().sweet_error_copy}!`)
  }

  copyForInputFalied(){
    this.swalBasic('warning',this.language.message().sweet_valid,`${this.language.message().sweet_error_copy_boxtext}!`)
  }

  operationSuccess(){
    this.swalBasic('success',this.language.message().sweet_valid,`${this.language.message().sweet_operation_success}!`)
  }

  operationFalied(){
    this.swalBasic('error',this.language.message().sweet_valid,`${this.language.message().sweet_operation_failed}!`)
  }

  confirmDelete(runnable: () => void){
    this.swalConfirm(runnable,this.language.message().sweet_confirm_dialog+"?",this.language.message().sweet_confirm_delete);
  }

  confirmConvit(runnable: () => void){
    this.swalConfirm(runnable,this.language.message().sweet_confirm_dialog+"?",this.language.message().sweet_confirm_invit);
  }

}
