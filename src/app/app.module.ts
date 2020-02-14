import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentInfoComponent } from './components/student-info/student-info.component';
import { SubjectInfoComponent } from './components/subject-info/subject-info.component';
import { SubjectItemComponent } from './components/subject-item/subject-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentInfoComponent,
    SubjectInfoComponent,
    SubjectItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
