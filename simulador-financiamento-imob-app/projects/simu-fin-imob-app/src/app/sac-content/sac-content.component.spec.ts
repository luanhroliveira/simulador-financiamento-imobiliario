import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacContentComponent } from './sac-content.component';

describe('SacComponent', () => {
  let component: SacContentComponent;
  let fixture: ComponentFixture<SacContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
