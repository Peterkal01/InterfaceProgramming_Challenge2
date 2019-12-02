export class AttendanceResponse{
    attendance: AAttendance[];
  
}

export class AAttendance {
    id: number;
    firstname: string;
    lastname: string;
    studentId: number;
    status: string;
    timeSignedIn: string;
    dateSignedIn: string;

    constructor( id: number, firstname: string,lastname: string, studentId: number, status: string, timeSignedIn: string, dateSignedIn: string){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.studentId = studentId;
        this.status = status;
        this.timeSignedIn = timeSignedIn;
        this.dateSignedIn = dateSignedIn;
    }

}