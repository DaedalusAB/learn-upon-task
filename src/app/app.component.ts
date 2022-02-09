import { Component } from '@angular/core';
import { TestService } from './core/services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-upon-task';

  constructor(private testService: TestService) {
  }

  public testProxy(): void {
    this.testService.getUsers();
  }
}
