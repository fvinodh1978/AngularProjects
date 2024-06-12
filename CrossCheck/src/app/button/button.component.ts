import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string = "Click Me";
  @Input() isDisabled: boolean = false;
  @Input() showTextarea: boolean = false;
  @Output() onClick = new EventEmitter<any>();

  onClickButton(event: MouseEvent): void {
    this.onClick.emit(event);
  }

  loadTextarea() {
    // Set showTextarea to true
    this.showTextarea = true;
  }
}
