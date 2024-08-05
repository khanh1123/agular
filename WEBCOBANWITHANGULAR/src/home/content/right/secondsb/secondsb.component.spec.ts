import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondsbComponent } from './secondsb.component';

describe('SecondsbComponent', () => {
  let component: SecondsbComponent;
  let fixture: ComponentFixture<SecondsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondsbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
