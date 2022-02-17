import { Component, OnInit } from '@angular/core';
import { SpinnerOverlayService } from '../../services/spinner-overlay.service';

@Component({
  selector: 'lu-spinner-overlay',
  templateUrl: './spinner-overlay.component.html',
  styleUrls: ['./spinner-overlay.component.scss']
})
export class SpinnerOverlayComponent implements OnInit {
  public isShown: boolean = false;

  constructor(
    private spinnerOverlayService: SpinnerOverlayService,
  ) { }

  ngOnInit(): void {
    this.spinnerOverlayService.isShown$.subscribe((isShown: boolean) => this.isShown = isShown);
  }
}
