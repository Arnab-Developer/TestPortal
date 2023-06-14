import { Component } from '@angular/core';
import { TestService } from '../shared/test.service';
import { Test } from '../shared/test';

@Component({
  selector: 'app-root',
  templateUrl: './all-tests.component.html',
  styleUrls: ['./all-tests.component.css']
})
export class AllTestsComponent {
  private _testService: TestService;
  public tests: Test[];

  constructor(testService: TestService) {
    this._testService = testService;
    this.tests = [new Test()];
  }

  public showAllTests(): void {
    this.tests = this._testService.GetAllTests();
  }
}