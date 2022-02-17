import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UserType } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: User[] = [];
  public usersCount: number = 0;
  public showCreateUserModal: boolean = false;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.users = data.users;
      this.usersCount = this.users.length;
    });
  }

  public openCreateUserModal(): void {
    this.showCreateUserModal = true;
  }

  public userCreated(user: User): void {
    this.users.unshift(user);  // Mock - Just for fun :)
    this.showCreateUserModal = false;
  }
}
