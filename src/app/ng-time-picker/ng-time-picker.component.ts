import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-time-picker',
  templateUrl: './ng-time-picker.component.html',
  styleUrls: ['./ng-time-picker.component.css']
})
export class NgTimePickerComponent {

  disabledHours(): number[]{

    if(arguments[0]===10)  return [1, 2, 3];

    return [];
  };


  disabledHoursWithParms(id:number){

    return (): number[] => {
      if(id > 5){
        return [21,22,23];
      }
      return [1,2,3];
    };
  }

  disabledMinutesWithParms(id:number){

    return (hour: number) : number[] => {
        if(id > 5){
          return [57,58,59];
        }

        return [1,2,3];
    };
  }


}
