import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-combination',
  templateUrl: './combination.component.html',
  styleUrls: ['./combination.component.scss']
})
export class CombinationComponent implements OnInit {

  selectedTheme = 'purple-green';
  subscription: Subscription;
  constructor(private dataService: DataService) {

    this.subscription = this.dataService.missionAnnounced$.subscribe(
      theme => {
        this.selectedTheme = theme;
    });
  }

  ngOnInit(): void {
  }

}
