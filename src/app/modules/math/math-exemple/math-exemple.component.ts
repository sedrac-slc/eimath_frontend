import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Exemple } from 'src/app/classes/exemple.class';
import { SweetALertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-math-exemple',
  templateUrl: './math-exemple.component.html',
  styleUrls: ['./math-exemple.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MathExempleComponent {
  @Input() exemplos: Array<Exemple> = [];
  @Output() onCopy: EventEmitter<Exemple>;
  @Output() onCopyForInput: EventEmitter<Exemple>;

  constructor(
    protected sweetAlert : SweetALertService
  ) {
    this.onCopy = new EventEmitter();
    this.onCopyForInput = new EventEmitter();
  }

  onCopyEmitter(text: string) {
    try {
      let n = this.exemplos.findIndex(it => it.text == text);
      this.onCopy.emit(this.exemplos[n]);
      navigator.clipboard.writeText(text);
    } catch (_) {
      this.sweetAlert.copyFalied();
    }
  }

  onCopyForInputEmitter(text: string) {
    try {
      let n = this.exemplos.findIndex(it => it.text == text);
      this.onCopyForInput.emit(this.exemplos[n]);
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    } catch (_) {
      this.sweetAlert.copyForInputFalied();
    }
  }

}
