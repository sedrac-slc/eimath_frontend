import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Exemple } from 'src/app/classes/exemple.class';

@Component({
  selector: 'app-equation-exemple',
  templateUrl: './equation-exemple.component.html',
  styleUrls: ['./equation-exemple.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EquationExempleComponent {
  @Input() value: string = "";

  @Output() onCopy: EventEmitter<Exemple>;
  @Output() onCopyForInput: EventEmitter<Exemple>;

  constructor(
  ) {
    this.onCopy = new EventEmitter();
    this.onCopyForInput = new EventEmitter();
  }

  exemplos: Array<Exemple> = [
    new Exemple(
      "3x^2+5x+x^2-2x",
      `<div>3x<sup>2</sup>+5x+x<sup>2</sup>-2x</div>`,
      "Redução de uma equação"
    ),
    new Exemple(
      "f(2)=3x^2+5x+x^2-2x",
      `<div>f(2)=3x<sup>2</sup>+5x+x<sup>2</sup>-2x</div>`,
      "Calculando o valor de uma incognita"
    ),
    new Exemple(
      "0=x^2-5x+6",
      `<div>0=x<sup>2</sup>-5x+6x</div>`,
      "Calculando as raizes de uma função"
    ),
  ];

}
