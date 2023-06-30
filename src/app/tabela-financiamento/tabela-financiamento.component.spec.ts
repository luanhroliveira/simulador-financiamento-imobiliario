import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaFinanciamentoComponent } from './tabela-financiamento.component';

describe('TabelaFinanciamentoComponent', () => {
  let component: TabelaFinanciamentoComponent;
  let fixture: ComponentFixture<TabelaFinanciamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaFinanciamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaFinanciamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
