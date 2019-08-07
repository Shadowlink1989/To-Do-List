import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import the file from the component so we can export it so its available to the router
import { DisplayTasksComponent } from './display-tasks/display-tasks.component';




@NgModule({
  imports: [CommonModule],
  declarations: [DisplayTasksComponent],
  //export the components so the router can import it
  exports: [DisplayTasksComponent]
})
export class TasksModule { }
