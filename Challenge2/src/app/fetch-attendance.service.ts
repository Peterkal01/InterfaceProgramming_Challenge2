import { Injectable } from '@angular/core';
import { AAttendance, AttendanceResponse} from './attendance';
import {HttpClient} from '@angular/common/http';
import { ConnectableObservable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchAttendanceService {
  attendance: AAttendance[] = [];
  secret: string = " ";
  constructor(private http: HttpClient) { }

  fetchAttendance (id: string) {
    this.http.get<AttendanceResponse>('http://45.77.238.164/attendance/' + id + '?secret=' + this.secret)
    .subscribe((data: AttendanceResponse) => {
      this.attendance = data.attendance;
    });

  }
}
