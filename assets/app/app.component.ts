import { Component } from '@angular/core';
import {QuizService} from './quiz/quiz.service';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers : [QuizService]
})
export class AppComponent {
  isQuizActive : boolean = false;

  constructor(private quizService : QuizService){}

  startQuiz(){
    this.isQuizActive = true;
    this.quizService.quizActive = true;
  }
}
