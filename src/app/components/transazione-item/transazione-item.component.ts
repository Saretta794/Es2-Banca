import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transazione } from '../../modules/transazione';

@Component({
  selector: 'app-transazione-item',
  templateUrl: './transazione-item.component.html',
  styleUrl: './transazione-item.component.css'
})
export class TransazioneItemComponent {

  @Input()//grazie al decoratore input rendo la proprietà "transazione" (subito sotto) trasferibile sul dom, ovvero la rendo un attributo del tag del componente (transazione-item) grazie al quale il componente genitore (transazioni-lista) che ha il dato passa al figlio il dato stesso sotto forma di valore dell'attributo (in questo caso la proprietà [transazione] diventando attributo fungerà da canale per il dato) --> questo passaggio avviene nell'html del tag genitore
  transazione?:Transazione;

  
  @Output()
  onRichiestaEliminazione = new EventEmitter<Transazione>(); //creo la "campanella che precede l'evento" tramite l'eventEmitter e indico il tipo di "dato" che dovrò passare al metodo emit, che poi sarà il tipo di dato che dovrà inviare il genitore il risposta

  richiediEliminazione(){ //funzione lanciata quando clicco sul bottone (metto (click) sul bottone creato appositamente) --> "faccio suonare la campanella"

    //console.log("elinimazione richiesta della transazione", this.transazione?.account) //prova 
    
    this.onRichiestaEliminazione.emit(this.transazione);

  }

}
