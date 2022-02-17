import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User, UserType } from '../../models/user.model';

@Component({
  selector: 'lu-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRowComponent {
  @Input() user: User | undefined;
  public UserType = UserType;

  constructor() { }
}
