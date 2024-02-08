import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsdonutComponent } from './chartjsdonut.component';

describe('ChartjsdonutComponent', () => {
  let component: ChartjsdonutComponent;
  let fixture: ComponentFixture<ChartjsdonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartjsdonutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartjsdonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
