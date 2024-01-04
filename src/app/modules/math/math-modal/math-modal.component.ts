import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-math-modal',
  templateUrl: './math-modal.component.html',
  styleUrls: ['./math-modal.component.css']
})
export class MathModalComponent {
  @Input() formGroup!: FormGroup;

  fractionSumOrSub = [
    { value: "random", desc: "Aliatório", selected: true },
    { value: "mmc", desc: "Minímo multiplo comum", selected: false },
    { value: "crossSystem", desc: "Sistema cruzado", selected: false }
  ];

  arithSumOrSub = [
    { value: "random", desc: "Aliatório", selected: true },
    { value: "minMultipliCommon", desc: "Minímo multiplo comum", selected: false },
    { value: "sequencial", desc: "Sequencial", selected: false }
  ];

  arithSumOrSubFull = [
    { value: "random", desc: "Aliatório", selected: true },
    { value: "grouping", desc: "Agrupamento", selected: false },
    { value: "minMultipliCommon", desc: "Minímo multiplo comum", selected: false },
    { value: "sequencial", desc: "Sequencial", selected: false }
  ];




}
