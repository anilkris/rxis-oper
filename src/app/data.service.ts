import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  selectedTheme ="";
  constructor() { }
  private themeAnnounced = new Subject<string>();
  themeAnnounced$ = this.themeAnnounced.asObservable();

  announcedTheme(theme: string) {
    this.themeAnnounced.next(theme);
  }

  getSelectedTheme() : Observable<string>{
    return of(this.selectedTheme);
  }
  setSelectedTheme(theme: string) {
    this.selectedTheme = theme;
  }
}
