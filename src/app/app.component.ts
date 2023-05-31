import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project-1';
  
  userInput = '';
  validNumberOfWords = true;
  evenLengthWords: string[] = [];
  oddLengthWords: string[] = [];

  onReceivedText(text: string) {
    if (text.includes(' ')) {
      alert("You typed more than one word. Only one is allowed.")
      this.validNumberOfWords = false;
    }
    if (text.length % 2 === 0 && this.validNumberOfWords) {
      this.evenLengthWords.push(text)
      console.log(text)
    } else if (this.validNumberOfWords) {
      this.oddLengthWords.push(text)
      console.log(text)
    } else {
      console.log("Not a valid input.")
    }
  }


}
