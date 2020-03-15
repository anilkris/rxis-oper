import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //selectedTheme = 'deeppurple-amber';

  selectedTheme = 'purple-green';
  constructor(private dataService: DataService) {
    dataService.setSelectedTheme(this.selectedTheme);
    this.dataService.announcedTheme(this.selectedTheme);
  }
/*
deeppurple-amber.css
indigo-pink.css
pink-bluegrey.css
purple-green.css
*/
  onFirstTheme() {
    this.selectedTheme = 'deeppurple-amber';

    this.dataService.setSelectedTheme(this.selectedTheme);
    console.log(this.selectedTheme);
    this.dataService.announcedTheme(this.selectedTheme);

  }
  onSecondTheme() {
    this.selectedTheme = 'indigo-pink';

    this.dataService.setSelectedTheme(this.selectedTheme);
    console.log(this.selectedTheme);

    this.dataService.announcedTheme(this.selectedTheme);
  }
  onThirdTheme() {
    this.selectedTheme = 'pink-bluegrey';

    this.dataService.setSelectedTheme(this.selectedTheme);
    console.log(this.selectedTheme);

    this.dataService.announcedTheme(this.selectedTheme);
  }
  onFourthTheme() {
    this.selectedTheme = 'purple-green';

    this.dataService.setSelectedTheme(this.selectedTheme);
    console.log(this.selectedTheme);

    this.dataService.announcedTheme(this.selectedTheme);
  }







}
