import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { StudyGroupService } from './study-group.service';

@Injectable({
  providedIn: 'root'
})
export class SweetALertService {

  constructor(
    private groupService: StudyGroupService
  ) {

  }

  private swalBasic(icon: any, title: any, text: any, footer: any = '<a href="/">Voltar a página principal?</a>'): void {
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
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirma'
    }).then((result) => {
      if (result.isConfirmed) {
          runnable();
      }
    })
  }

  validateFalied(){
    this.swalBasic('error','Validação','Por verifica se os campos foram bem preenchidos!')
  }

  loginFalied(){
    this.swalBasic('error','Validação','Crendências inválidas!')
  }

  passwordFalied(){
    this.swalBasic('warning','Validação','As senhas introduzidas são diferentes!')
  }

  createAccountFalied(){
    this.swalBasic('warning','Validação','Erro ao criar aconta!')
  }

  copyFalied(){
    this.swalBasic('warning','Validação','Erro no processo de copiar o texto!')
  }

  copyForInputFalied(){
    this.swalBasic('warning','Validação','Erro no processo de copiar o texto para o input!')
  }

  operationSuccess(){
    this.swalBasic('success','Validação','Operação realizada com successo!')
  }

  operationFalied(){
    this.swalBasic('error','Validação','Não possível a realização da operação!')
  }

  confirmDelete(runnable: () => void){
    this.swalConfirm(runnable,'Tens certeza?',"confirma acção de elimanação");
  }

}
