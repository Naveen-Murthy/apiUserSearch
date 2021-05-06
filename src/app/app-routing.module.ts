import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserDataComponent} from './user-data/user-data.component';
import {UserIndividualDataComponent} from './user-individual-data/user-individual-data.component';

const routes: Routes = [
  {path:'home',component: UserDataComponent},
  {path:'user', component: UserIndividualDataComponent},
  {path:"user/:userId",component:UserIndividualDataComponent},
  {path:'**',component:UserDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
