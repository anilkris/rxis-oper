import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //selectedTheme = 'deeppurple-amber';

  selectedTheme = 'purple-green';
/*
deeppurple-amber.css
indigo-pink.css
pink-bluegrey.css
purple-green.css
*/
  onFirstTheme() {
    this.selectedTheme = 'deeppurple-amber';

    console.log(this.selectedTheme);
  }
  onSecondTheme() {
    this.selectedTheme = 'indigo-pink';

    console.log(this.selectedTheme);
  }
  onThirdTheme() {
    this.selectedTheme = 'pink-bluegrey';

    console.log(this.selectedTheme);
  }
  onFourthTheme() {
    this.selectedTheme = 'purple-green';

    console.log(this.selectedTheme);
  }







}
