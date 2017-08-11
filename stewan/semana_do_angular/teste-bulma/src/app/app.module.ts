import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PessoasService } from './pessoas.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PessoasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
