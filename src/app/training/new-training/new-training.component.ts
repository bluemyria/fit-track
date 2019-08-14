import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

import * as fromRoot from '../../app.reducer';
import * as fromTraining from '../training.reducer';
import * as UI from '../../shared/ui.actions';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  isLoading$: Observable<boolean>;
  exercises$: Observable<Exercise[]>;

  constructor(
    private trainingService: TrainingService,
    private store: Store<{ ui: fromTraining.State }>) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    // this.exercises = this.trainingService.getAvailableExercises();
    this.exercises$ = this.store.select(fromTraining.getAvailableExercises);
    this.fetchExercises();
  }

  fetchExercises() {
    this.trainingService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise_dropdown);
  }
}
