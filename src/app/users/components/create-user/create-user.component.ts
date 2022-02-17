import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'lu-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  public form = new FormGroup({});

  public model: User = {} as User;

  public fields: FormlyFieldConfig[] = [
    {
      key: 'email', 
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Users email',
        required: true,
      }
    }
  ];

  constructor() { }

  onSubmit(model: any) {
    console.log(model);
  }
}
