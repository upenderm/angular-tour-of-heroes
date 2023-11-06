import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDefaultComponent } from './angular-default.component';

describe('AngularDefaultComponent', () => {
  let component: AngularDefaultComponent;
  let fixture: ComponentFixture<AngularDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
