import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { AppStorage } from './app-storage';

@Component({
  selector: 'app-zip-view',
  templateUrl: './hl7-zip.component.html',
  styleUrls: ['./hl7-zip.component.css']
})
export class ZipViewComponent {

  private zipData: String[] = new AppStorage().zips;

  

}
