import { ComponentFixture, TestBed } from '@angular/core/testing';
import { APIProductPagePage } from './apiproduct-page.page';

describe('APIProductPagePage', () => {
  let component: APIProductPagePage;
  let fixture: ComponentFixture<APIProductPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(APIProductPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
