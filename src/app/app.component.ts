import { HL7Part } from './hl7-view/hl7-part';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  indexSet: any;
  title = 'HL7 Component Demo';

  constructor(public element: ElementRef) {
  }

  handleTextClicked(part:HL7Part) {
    let tab = this.element.nativeElement.children.textAreaBox;
    tab.blur();
    tab.focus();
    // if (tab.selectionStart) {
    tab.setSelectionRange(part.textStart, part.textEnd);
    // }
  }

  textareavalue: string =
    'MSH|^~\\&|MCIR|MDCH||1255-60-20|20170919092927-0400||ACK^V04^ACK|20170919092927-0400.0|T|2.5.1|\r\n'
  + 'SFT|MCIR|0|MDCH|2|\r\n'
  + 'MSA|AA|3WzJ-A.01.01.2aF|Message accepted. Confirmation: 03A9CB49EC0F3611810F44A1E1D71B0E-2771|\r\n';


}
