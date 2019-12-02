import { Component, OnInit } from '@angular/core';
import { FetchAttendanceService } from '../fetch-attendance.service';
import { FetchClassService } from '../fetch-class.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fetchattendanceService: FetchAttendanceService) { }
save(pass: string){
  this.fetchattendanceService.secret = pass;
}
  ngOnInit() {
  }

}
