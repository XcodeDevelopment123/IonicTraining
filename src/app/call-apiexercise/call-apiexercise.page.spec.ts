import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CallAPIExercisePage } from './call-apiexercise.page';

describe('CallAPIExercisePage', () => {
  let component: CallAPIExercisePage;
  let fixture: ComponentFixture<CallAPIExercisePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CallAPIExercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
