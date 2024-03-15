import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransazioniListaComponent } from './transazioni-lista.component';

describe('TransazioniListaComponent', () => {
  let component: TransazioniListaComponent;
  let fixture: ComponentFixture<TransazioniListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransazioniListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransazioniListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
