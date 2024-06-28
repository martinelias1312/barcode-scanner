import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaceDetectionPage } from './face-detection.page';

describe('FaceDetectionPage', () => {
  let component: FaceDetectionPage;
  let fixture: ComponentFixture<FaceDetectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FaceDetectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
