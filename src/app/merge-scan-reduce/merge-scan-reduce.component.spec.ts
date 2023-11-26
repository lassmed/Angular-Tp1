import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeScanReduceComponent } from './merge-scan-reduce.component';

describe('MergeScanReduceComponent', () => {
  let component: MergeScanReduceComponent;
  let fixture: ComponentFixture<MergeScanReduceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MergeScanReduceComponent]
    });
    fixture = TestBed.createComponent(MergeScanReduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
