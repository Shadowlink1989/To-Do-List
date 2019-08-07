import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import the tasks module so i can have access to its components
import { TasksModule } from '../app/modules/tasks/tasks.module';

@NgModule({
  declarations: [AppComponent],
  //import the TasksModule that holds all components
  imports: [BrowserModule, AppRoutingModule, TasksModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
