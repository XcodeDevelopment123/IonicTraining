import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindExercisePage } from './find-exercise.page';

describe('FindExercisePage', () => {
  let component: FindExercisePage;
  let fixture: ComponentFixture<FindExercisePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FindExercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
