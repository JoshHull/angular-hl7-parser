import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Hl7Reference } from './hl7-reference';

import { PopoverModule } from 'ngx-bootstrap/popover';
import 'rxjs/add/observable/merge';
import { Hl7ViewComponent } from './hl7-view/hl7-view.component';

@NgModule({
  declarations: [
    AppComponent,
    Hl7ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PopoverModule.forRoot()
  ],
  providers: [Hl7Reference],
  bootstrap: [AppComponent]
})

export class AppModule { }
