import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthsbComponent } from './fourthsb.component';

describe('FourthsbComponent', () => {
  let component: FourthsbComponent;
  let fixture: ComponentFixture<FourthsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourthsbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FourthsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
