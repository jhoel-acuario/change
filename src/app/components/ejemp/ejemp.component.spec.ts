import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjempComponent } from './ejemp.component';

describe('EjempComponent', () => {
  let component: EjempComponent;
  let fixture: ComponentFixture<EjempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
