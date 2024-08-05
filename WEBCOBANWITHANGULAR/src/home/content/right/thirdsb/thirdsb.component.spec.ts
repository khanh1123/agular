import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdsbComponent } from './thirdsb.component';

describe('ThirdsbComponent', () => {
  let component: ThirdsbComponent;
  let fixture: ComponentFixture<ThirdsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdsbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
