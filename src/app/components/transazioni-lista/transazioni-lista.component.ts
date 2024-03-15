import { Component } from '@angular/core';
import { Transazione } from '../../modules/transazione';
import { TRANSAZIONI } from '../../data/transazioni';

@Component({
  selector: 'app-transazioni-lista',
  templateUrl: './transazioni-lista.component.html',
  styleUrl: './transazioni-lista.component.css'
})
export class TransazioniListaComponent {

  transazioni: Transazione[] = TRANSAZIONI; //ho salvato l'array di dati come valore della proprietà transazioni (che deve essere di tipo Transazione!)

  rimuoviTransazione(transazione:Transazione){ //funzione che cerca una transazione all'interno dell'array di dati e la elimina
    let i = this.transazioni.indexOf(transazione);

    if(i> -1){
      this.transazioni.splice(i,1);
    }
  }


}
