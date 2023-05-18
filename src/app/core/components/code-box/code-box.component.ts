import { Component, Input } from '@angular/core';

@Component({
  selector: 'code-box',
  templateUrl  : './code-box.component.html',
  styleUrls: ['./code-box.component.scss']
})
export class CodeBoxComponent {
  @Input() code!: string ;
  @Input()titre!: string;
  @Input()description!: string;
  textButton = "Copy";

  codeClass = '';

  copyToClipboard() {
    const el = document.createElement('textarea');
    el.value = this.code;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.textButton ="Copied ! "
  }
}
