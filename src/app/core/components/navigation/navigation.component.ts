import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'lu-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public expanded = false;

  private _activeButton: string = 'home';

  constructor(
    private router: Router,
  ) { }

  public toggleExpand(): void {
    this.expanded = !this.expanded;
  }

  public getBurgerAriaLabel(): string {
    return this.expanded 
      ? 'Shrink the navigation menu'
      : 'Extend the navigation menu';
  }

  public isActive(buttonName: string): boolean {
    return buttonName === this._activeButton;
  }

  public navigateTo(buttonName: string): void {
    this._activeButton = buttonName;
    this.router.navigate([buttonName]);
  }
}
