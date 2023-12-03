import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvLayoutComponent } from './cv-layout.component';

describe('CvLayoutComponent', () => {
  let component: CvLayoutComponent;
  let fixture: ComponentFixture<CvLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvLayoutComponent]
    });
    fixture = TestBed.createComponent(CvLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
