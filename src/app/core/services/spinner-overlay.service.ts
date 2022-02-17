import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerOverlayService {
  public isShown$ = new Subject<boolean>();

  constructor() { }

  public show(): void {
    this.isShown$.next(true);
  }

  public hide(): void {
    this.isShown$.next(false);
  }
}
