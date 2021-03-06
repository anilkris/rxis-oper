import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  selectedTheme ='purple-green';
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  subscription: Subscription;


  constructor(fb: FormBuilder,private dataService: DataService) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });

    this.subscription = this.dataService.missionAnnounced$.subscribe(
      theme => {
        this.selectedTheme = theme;
    });
  }
  ngOnInit(): void {
  }

}
