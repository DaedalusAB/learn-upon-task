import { Component } from '@angular/core';

@Component({
  selector: 'lu-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public expanded = false;

  constructor() { }

  public toggleExpand(): void {
    this.expanded = !this.expanded;
  }
}
