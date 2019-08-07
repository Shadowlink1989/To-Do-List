import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import all components used so I can navigate to their respective pages
import { DisplayTasksComponent } from '../app/modules/tasks/display-tasks/display-tasks.component';

//this angular routing will be used to navigate the application
const routes: Routes = [
  { //display the tasks list
    path:'displayTask',
    component: DisplayTasksComponent
  },
  { //add a default route path to display
    path: '',
    redirectTo: '/displayTask',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
