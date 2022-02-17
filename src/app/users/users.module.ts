import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsersResolver } from './resolvers/users.resolver';

//  TODO add routing wildcards etc
const routes: Route[] = [
  {
    path: '',
    component: UsersComponent,
    resolve: { users: UsersResolver }
  }
];

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ]
})
export class UsersModule { }
