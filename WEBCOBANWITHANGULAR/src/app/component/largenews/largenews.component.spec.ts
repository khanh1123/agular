import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargenewsComponent } from './largenews.component';

describe('LargenewsComponent', () => {
  let component: LargenewsComponent;
  let fixture: ComponentFixture<LargenewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargenewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LargenewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
