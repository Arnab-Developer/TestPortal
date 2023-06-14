import { Injectable } from '@angular/core';
import { Test } from './test';
import { Question } from './question';

@Injectable({ providedIn: 'root' })
export class TestService {
  private _tests: Test[];

  constructor() {
    var question1 = new Question();
    var question2 = new Question();
    var question3 = new Question();
    var question4 = new Question();

    question1.Id = 1;
    question1.QuestionText = "1 + 2";
    question1.AnswerOptions = ["4", "3", "7"];
    question1.CorrectAnswer = "3";

    question2.Id = 2;
    question2.QuestionText = "5 - 4";
    question2.AnswerOptions = ["77", "4", "1"];
    question2.CorrectAnswer = "1";

    question3.Id = 3;
    question3.QuestionText = "3 * 2";
    question3.AnswerOptions = ["6", "2", "7"];
    question3.CorrectAnswer = "6";

    question4.Id = 4;
    question4.QuestionText = "4 / 2";
    question4.AnswerOptions = ["34", "12", "2"];
    question4.CorrectAnswer = "2";

    var test1 = new Test();

    test1.Id = 1;
    test1.Name = "Math Test";
    test1.PassMark = 50;

    test1.Questions[0] = question1;
    test1.Questions[1] = question2;
    test1.Questions[2] = question3;
    test1.Questions[3] = question4;

    var question5 = new Question();
    var question6 = new Question();
    var question7 = new Question();
    var question8 = new Question();

    question5.Id = 1;
    question5.QuestionText = "Gen question 1";
    question5.AnswerOptions = ["op 1", "op 2", "op 3"];
    question5.CorrectAnswer = "op 2";

    question6.Id = 2;
    question6.QuestionText = "Gen question 2";
    question6.AnswerOptions = ["op 1", "op 2", "op 3"];
    question6.CorrectAnswer = "op 1";

    question7.Id = 3;
    question7.QuestionText = "Gen question 3";
    question7.AnswerOptions = ["op 1", "op 2", "op 3"];
    question7.CorrectAnswer = "op 3";

    question8.Id = 4;
    question8.QuestionText = "Gen question 4";
    question8.AnswerOptions = ["op 1", "op 2", "op 3"];
    question8.CorrectAnswer = "op 2";

    var test2 = new Test();

    test2.Id = 2;
    test2.Name = "General Test";
    test2.PassMark = 30;

    test2.Questions[0] = question5;
    test2.Questions[1] = question6;
    test2.Questions[2] = question7;
    test2.Questions[3] = question8;

    this._tests = [test1, test2];
  }

  public GetAllTests(): Test[] {
    return this._tests;
  }

  public GetTestById(testId: number): Test {
    var foundTest = new Test();

    this._tests.forEach(test => {
      if (test.Id == testId) {
        foundTest = test;
      }
    });

    return foundTest;
  }
}