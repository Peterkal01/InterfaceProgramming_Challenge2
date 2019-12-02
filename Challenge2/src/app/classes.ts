import { GroupedObservable } from 'rxjs';

export class ClassesResponse {
    classes: AClass[];
}

export class AClass {
    classId: number;
    day: string;
    startTime: string;
    endTime: string;
    name: string;


    constructor(classId: number, day: string, startTime: string, endTime: string, name: string){
    this.classId = classId;
    this.day = day;
    this.startTime = startTime;
    this.endTime = endTime;
    this.name = name;
    

    }
}