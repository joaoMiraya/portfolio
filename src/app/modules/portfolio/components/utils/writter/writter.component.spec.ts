import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritterComponent } from './writter.component';

describe('WritterComponent', () => {
  let component: WritterComponent;
  let fixture: ComponentFixture<WritterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WritterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WritterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
