import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecsComponent } from './tecs.component';

describe('TecsComponent', () => {
  let component: TecsComponent;
  let fixture: ComponentFixture<TecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
