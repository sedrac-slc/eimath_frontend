import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Exemple } from 'src/app/classes/exemple.class';

@Component({
  selector: 'app-radical-exemple',
  templateUrl: './radical-exemple.component.html',
  styleUrls: ['./radical-exemple.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RadicalExempleComponent {
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
      "5c2^1/2+8c2^1/2-9c2^1/2+2c5^1/3+7c5^1/3",
      `    <div class="fraction-arithmetic">
      <div class="fraction-radical">
        <div class="fraction">
          <div class="numerator">5</div>
        </div>
        <div class="radical-group">
          <div class="">
            <span>&radic;</span>
          </div>
          <div class="sig-radical">2</div>
        </div>
      </div>
      <div class="fraction-radical">
        <div class="signal">+</div>
        <div class="fraction">
          <div class="numerator">8</div>
        </div>
        <div class="radical-group">
          <div class="">
            <span>&radic;</span>
          </div>
          <div class="sig-radical">2</div>
        </div>
      </div>
      <div class="fraction-radical">
        <div class="signal">-</div>
        <div class="fraction">
          <div class="numerator">9</div>
        </div>
        <div class="radical-group">
          <div class="">
            <span>&radic;</span>
          </div>
          <div class="sig-radical">2</div>
        </div>
      </div>
      <div class="fraction-radical">
        <div class="signal">+</div>
        <div class="fraction">
          <div class="numerator">2</div>
        </div>
        <div class="radical-group">
          <div class="">
            <sup class="expoent-rad">3</sup>
            <span>&radic;</span>
          </div>
          <div class="sig-radical">5</div>
        </div>
      </div>
      <div class="fraction-radical">
        <div class="signal">+</div>
        <div class="fraction">
          <div class="numerator">7</div>
        </div>
        <div class="radical-group">
          <div class="">
            <sup class="expoent-rad">3</sup>
            <span>&radic;</span>
          </div>
          <div class="sig-radical">5</div>
        </div>
      </div>
    </div>`,
      "Operação de soma e subtração de radical"
    ),
  ];

}
