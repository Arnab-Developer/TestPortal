import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllTestsComponent } from './all-tests/all-tests.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AllTestsComponent, TestComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }