import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lu-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string | undefined;
  @Input() isShown: boolean = false;
  @Output() isShownChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public close(): void {
    this.isShownChange.emit(false);
  }
}
