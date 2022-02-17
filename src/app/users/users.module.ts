import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsersResolver } from './resolvers/users.resolver';
import { UserRowComponent } from './components/user-row/user-row.component';
import { SharedModule } from '../shared/shared.module';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

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
    UsersComponent,
    UserRowComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule,
  ]
})
export class UsersModule { }
