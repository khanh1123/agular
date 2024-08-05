import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallnewsComponent } from './smallnews.component';

describe('SmallnewsComponent', () => {
  let component: SmallnewsComponent;
  let fixture: ComponentFixture<SmallnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallnewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
