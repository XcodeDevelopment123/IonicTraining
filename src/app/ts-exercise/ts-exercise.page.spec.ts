import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TsExercisePage } from './ts-exercise.page';

describe('TsExercisePage', () => {
  let component: TsExercisePage;
  let fixture: ComponentFixture<TsExercisePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TsExercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
