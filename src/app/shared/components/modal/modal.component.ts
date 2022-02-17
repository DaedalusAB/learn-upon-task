import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lu-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() isShown: boolean = false;
  @Output() isShownChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() title: string | undefined;
  @Input() primaryButtonText: string | undefined;
  @Output() primaryAction: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public emitPrimaryAction(): void {
    this.primaryAction.emit();
  }

  public close(): void {
    this.isShownChange.emit(false);
  }
}
