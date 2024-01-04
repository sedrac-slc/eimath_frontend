import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Group } from '../model/grupo.model';

@Injectable({
  providedIn: 'root'
})
export class SweetALertService {

  constructor() {

  }

  private basic(icon: any, title: any, text: any, footer: any = '<a href="/">Voltar a página principal?</a>'): void {
    Swal.fire({ icon: icon, title: title, text: text, footer: footer });
  }

  validateFalied(){
    this.basic('error','Validação','Por verifica se os campos foram bem preenchidos!')
  }

  loginFalied(){
    this.basic('error','Validação','Crendências inválidas!')
  }

  passwordFalied(){
    this.basic('warning','Validação','As senhas introduzidas são diferentes!')
  }

  createAccountFalied(){
    this.basic('warning','Validação','Erro ao criar aconta!')
  }

  copyFalied(){
    this.basic('warning','Validação','Erro no processo de copiar o texto!')
  }

  copyForInputFalied(){
    this.basic('warning','Validação','Erro no processo de copiar o texto para o input!')
  }

  operationSuccess(){
    this.basic('success','Validação','Operação realizada com successo!')
  }

  operationFalied(){
    this.basic('error','Validação','Não possível a realização da operação!')
  }

  confirmDeleteGroup(group: Group){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.operationSuccess()
      }
    })
  }

}
