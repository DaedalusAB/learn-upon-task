import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { User, UserType } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'lu-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  @Output() userCreated: EventEmitter<User> = new EventEmitter<User>();

  //  Usefuly map UserType enum into options, so maintenence will be easy
  private _userTypeOptions = Object.keys(UserType).map((key, index) => {
    return { label: key, value: Object.values(UserType)[index] };
  });

  public form = new FormGroup({});
  public model: User = {} as User;
  //  In absence of validation requrements, I'll stick with some minimum stuff
  public fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        required: true,
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/     //  This pattern isn't the best; but it does the job for the demo
      },
      validation: {
        messages: {
          pattern: (error: any, field: FormlyFieldConfig) => `"${field.formControl?.value}" is not a valid Email Address`,
        },
      },
    },
    {
      key: 'first_name',
      type: 'input',
      templateOptions: {
        label: 'First Name',
        required: true,
      }
    },
    {
      key: 'last_name',
      type: 'input',
      templateOptions: {
        label: 'Last Name',
        required: true,
      }
    },
    {
      key: 'user_type',
      type: 'select',
      templateOptions: {
        label: 'User Type',
        required: true,
        options: this._userTypeOptions,
      }
    }
  ];

  constructor(
    private userService: UsersService,
  ) {
  }

  public onSubmit(model: User): void {
    if (this.form.valid) {
      this.userService.createUser(this.model).subscribe((createdUser: User) => this.userCreated.emit(createdUser));
    }
  }
}
