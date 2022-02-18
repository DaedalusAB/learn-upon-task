import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'lu-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string | undefined;
  @Input() isShown: boolean = false;
  @Output() isShownChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  //  This setter will focus the modal every time it opens, for A11Y compliance 
  @ViewChild('modalBox') set modalBoxSetter(modalBox: ElementRef) {    
    if(modalBox) {
      setTimeout(() => modalBox.nativeElement.focus());
    }
  }

  constructor() { }

  public close(): void {
    this.isShownChange.emit(false);
  }
}
