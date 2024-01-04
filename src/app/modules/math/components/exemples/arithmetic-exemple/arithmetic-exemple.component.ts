import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Exemple } from 'src/app/classes/exemple.class';

@Component({
  selector: 'app-arithmetic-exemple',
  templateUrl: './arithmetic-exemple.component.html',
  styleUrls: ['./arithmetic-exemple.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArithmeticExempleComponent {
  @Input() value: string = "";

  @Output() onCopy: EventEmitter<Exemple>;
  @Output() onCopyForInput: EventEmitter<Exemple>;

  constructor(
  ) {
    this.onCopy = new EventEmitter();
    this.onCopyForInput = new EventEmitter();
  }


  exemplos: Array<Exemple> = [
    new Exemple("(2+3/6):0.5+(2-10/20):0.5",`<div class="d-flex gap-2 align-items-center">
    <div class="d-flex flex-column align-items-center">
        <div class="d-flex gap-1 align-items-center border-bottom">
            <div>2</div>
            <div>+</div>
            <div class="d-flex flex-column">
                <div class="border-bottom">3</div>
                <div>6</div>
            </div>
        </div>
        <div>0.5</div>
    </div>
    <div class="ml-one">+</div>
    <div class="d-flex flex-column align-items-center">
        <div class="d-flex gap-1 align-items-center border-bottom">
            <div>2</div>
            <div>-</div>
            <div class="d-flex flex-column">
                <div class="border-bottom">10</div>
                <div>20</div>
            </div>
        </div>
        <div>0.5</div>
    </div>
</div>`
    ),
    new Exemple("(0.5+4/6):6-(12+0.5):12+(0.6-0.5):4",`<div class="d-flex gap-2 align-items-center">
      <div class="d-flex flex-column align-items-center">
          <div class="d-flex gap-1 align-items-center border-bottom">
              <div>0.5</div>
              <div>+</div>
              <div class="d-flex flex-column">
                  <div class="border-bottom">4</div>
                  <div>6</div>
              </div>
          </div>
          <div>6</div>
      </div>
      <div class="ml-one">-</div>
      <div class="d-flex flex-column align-items-center ml-one">
          <div class="d-flex gap-1 align-items-center border-bottom">
              <div>12</div>
              <div>+</div>
              <div>0.5</div>
          </div>
          <div>12</div>
      </div>
      <div class="ml-one">+</div>
      <div class="d-flex flex-column align-items-center ml-one">
          <div class="d-flex gap-1 align-items-center border-bottom">
              <div>0.6</div>
              <div>-</div>
              <div>0.5</div>
          </div>
          <div>4</div>
      </div>
  </div>`
    ),
    new Exemple("(1+5/8-4/12):0.5-(2-4/8+6/8):0.6",`<div class="d-flex gap-2 align-items-center">
      <div class="d-flex flex-column align-items-center">
          <div class="d-flex gap-1 align-items-center border-bottom">
              <div>1</div>
              <div>+</div>
              <div class="d-flex flex-column">
                  <div class="border-bottom">5</div>
                  <div>8</div>
              </div>
              <div>-</div>
              <div class="d-flex flex-column">
                  <div class="border-bottom">4</div>
                  <div>12</div>
              </div>
          </div>
          <div>0.5</div>
      </div>
      <div class="ml-one">-</div>
      <div class="d-flex flex-column align-items-center">
          <div class="d-flex gap-1 align-items-center border-bottom">
              <div>2</div>
              <div>-</div>
              <div class="d-flex flex-column">
                  <div class="border-bottom">4</div>
                  <div>8</div>
              </div>
              <div>+</div>
              <div class="d-flex flex-column">
                  <div class="border-bottom">6</div>
                  <div>8</div>
              </div>
          </div>
          <div>0.6</div>
      </div>
  </div>`
    ),
    new Exemple("5/6-(1/5+15/10:5/8)+14*(1+6/5+12/10):3-1",`<div class="d-flex gap-2 align-items-center">
      <div class="d-flex flex-column gap-1 align-items-center ml-one">
          <div class="border-bottom">5</div>
          <div>6</div>
      </div>
      <div class="ml-one">-</div>
      <div class="d-parenteses d-flex gap-1 align-items-center">
          <div class="d-flex flex-column gap-1 align-items-center">
              <div class="border-bottom">1</div>
              <div>5</div>
          </div>
          <div>+</div>
          <div class="d-flex flex-column align-items-center">
              <div class="d-flex flex-column border-bottom">
                  <div class="border-bottom">15</div>
                  <div>10</div>
              </div>
              <div class="d-flex flex-column">
                  <div class="border-bottom">5</div>
                  <div>8</div>
              </div>
          </div>
      </div>
      <div class="ml-one">+</div>
      <div class="d-flex flex-column gap-1 align-items-center">
          <div class="d-flex gap-1 align-items-center border-bottom pb-1">
              <div class="d-flex flex-column gap-1 align-items-center">
                  <div class="border-bottom">14</div>
                  <div>2</div>
              </div>
              <div class="d-parenteses d-flex gap-1 align-items-center">
                  <div>1</div>
                  <div>+</div>
                  <div class="d-flex flex-column">
                      <div class="border-bottom">6</div>
                      <div>5</div>
                  </div>
                  <div>+</div>
                  <div class="d-flex flex-column">
                      <div class="border-bottom">12</div>
                      <div>10</div>
                  </div>
              </div>
          </div>
          <div>3</div>
      </div>
      <div class="ml-one">-</div>
      <div class="ml-one">1</div>
  </div>`
    ),
    new Exemple("((7/9-47/72):1.25+(6/7-17/28):0.25)*1.6-19/25",`<div class="d-flex gap-2 align-items-center">
      <div class="d-flex gap-1 align-items-center">
          <div class="d-parenteses d-flex gap-1 align-items-center">
              <div class="d-flex gap-1 align-items-center">
                  <div class="d-parenteses d-flex gap-1 align-items-center">
                      <div class="d-flex flex-column border-bottom">
                          <div class="border-bottom">7</div>
                          <div>9</div>
                      </div>
                      <div>-</div>
                      <div class="d-flex flex-column">
                          <div class="border-bottom">47</div>
                          <div>72</div>
                      </div>
                  </div>
                  <div>:</div>
                  <div>1.25</div>
              </div>
              <div>+</div>
              <div class="d-flex gap-1 align-items-center">
                  <div class="d-parenteses d-flex gap-1 align-items-center">
                      <div class="d-flex flex-column border-bottom">
                          <div class="border-bottom">6</div>
                          <div>7</div>
                      </div>
                      <div>-</div>
                      <div class="d-flex flex-column">
                          <div class="border-bottom">17</div>
                          <div>28</div>
                      </div>
                  </div>
                  <div>:</div>
                  <div>0.25</div>
              </div>
          </div>
          <div>1.6</div>
      </div>
      <div>-</div>
      <div class="d-flex flex-column gap-1 align-items-center">
          <div class="border-bottom">19</div>
          <div>25</div>
      </div>
  </div>`)
  ];


}
