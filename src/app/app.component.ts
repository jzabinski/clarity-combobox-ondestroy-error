import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  letterCombos = ['ab', 'ac', 'ad'];
  currentCombo: string;
  display: string;
  get selected(): string {
    return this.currentCombo;
  }
  set selected(combo: string) {
    console.log(combo);
    if (combo === null) {
      this.display = 'emitted null!';
    }
    else {
      this.display = combo;
    }
    this.currentCombo = combo;
  }
}
