import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstsbComponent } from './firstsb.component';

describe('FirstsbComponent', () => {
  let component: FirstsbComponent;
  let fixture: ComponentFixture<FirstsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstsbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
