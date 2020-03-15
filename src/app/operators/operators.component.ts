import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {


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
