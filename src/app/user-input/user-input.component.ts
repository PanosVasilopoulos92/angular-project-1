import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  @ViewChild(NgForm) form!: NgForm    // !: means it is not null. With this line i have now access in the form and manipulate it.
  userInput: string = '';
  @Output() sendText = new EventEmitter<string>();

  onSubmit() {
    // this.userInput = text;
    this.sendText.emit(this.userInput);
    if (this.userInput) {
      console.log("okComp1");
    } else {
      console.log("Wrong")
    }
    this.form.reset();
  }
}
