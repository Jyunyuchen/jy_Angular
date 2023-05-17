import { AfterViewInit, Component } from '@angular/core';
import { map, Subject } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})

export class ObservableComponent implements AfterViewInit{

  result = 0;
  myObservable: Subject<number> 

  constructor(){
    this.myObservable = new Subject<number>().pipe(map(val => val * 2)) as Subject<number>;
    this.myObservable.subscribe(value => this.result = value); 
  }
  
  ngAfterViewInit(): void {
   
  }

  set inputValue(value: number){
    this.myObservable.next(value);
  }

}
