import { Component } from '@angular/core';
import { TestService } from '../shared/test.service';
import { Test } from '../shared/test';

@Component({
  selector: 'app-root',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {  
  private _testService: TestService;
  public test: Test;

  constructor(testService: TestService) {
    this._testService = testService;
    this.test = new Test();
  }

  public showTest(testId: string): void {
    this.test = this._testService.GetTestById(Number.parseInt(testId));
  }
}