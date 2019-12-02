import { Component } from '@angular/core';
import { FetchClassService } from './fetch-class.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Challenge2';

  constructor(public fetchclassService: FetchClassService){

  }

  OnInit() {
    this.fetchclassService.fetchClasses();
  }
}
