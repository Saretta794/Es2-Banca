import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransazioniListaComponent } from './components/transazioni-lista/transazioni-lista.component';
import { TransazioneItemComponent } from './components/transazione-item/transazione-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TransazioniListaComponent,
    TransazioneItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
