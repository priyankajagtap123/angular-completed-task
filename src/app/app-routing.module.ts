import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

import { UserprofileComponent } from './userprofile/userprofile.component';


const routes: Routes = [
  {
    path:"",component:HomepageComponent
  },
  
  {
    path:"userprofile",component:UserprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
