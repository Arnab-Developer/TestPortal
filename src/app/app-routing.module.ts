import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllTestsComponent } from './all-tests/all-tests.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'all-test-component', component: AllTestsComponent },
  { path: 'test-component', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }