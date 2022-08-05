import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmmitterComponent } from './emmitter.component';

describe('EmmitterComponent', () => {
  let component: EmmitterComponent;
  let fixture: ComponentFixture<EmmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmmitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
