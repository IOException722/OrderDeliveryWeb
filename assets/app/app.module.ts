import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpModule} from "@angular/http";
import { AppComponent } from "./app.component";
import {QuizListComponent} from './quiz/quiz-list.component';
import {FilterPipe} from './quiz/quiz-list.component'
import {QuizComponent} from './quiz/quiz.component';
import {ResultComponent} from './quiz/result.component';
import { ChartsModule } from 'ng2-charts';
import {TimerComponent} from './timer.component';
@NgModule({
    declarations: [
        AppComponent,
        QuizListComponent,
        FilterPipe,
        QuizComponent,
        ResultComponent,
        TimerComponent
    ],
    imports: [BrowserModule, FormsModule,ReactiveFormsModule,HttpModule,ChartsModule],
    bootstrap: [AppComponent],
})
export class AppModule {

}
