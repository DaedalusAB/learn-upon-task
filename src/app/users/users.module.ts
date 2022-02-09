import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { Route, RouterModule } from '@angular/router';

//  TODO add routing wildcards etc
const routes: Route[] = [
  {
    path: '',
    component: UsersComponent,
  }
];

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UsersModule { }
