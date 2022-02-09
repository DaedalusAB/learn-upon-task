import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lu-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public expanded = false;

  constructor(
    private router: Router,
  ) { }

  public toggleExpand(): void {
    this.expanded = !this.expanded;
  }

  public navigateTo(destination: string): void {
    this.router.navigate([destination]);
  }
}
