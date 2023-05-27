import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-resize-right-div-and-left-div',
  templateUrl: './resize-right-div-and-left-div.component.html',
  styleUrls: ['./resize-right-div-and-left-div.component.css']
})
export class ResizeRightDivAndLeftDivComponent implements AfterViewInit{

  // bodyFlexDiv! : HTMLDivElement;
  leftDiv! : HTMLDivElement;
  rightDiv! : HTMLDivElement;
  divider! : any;

  date : Date = new Date();

  listDataMap = {
    eight: [
      { type: 'warning', content: 'This is warning event. This is warning event.' },
      { type: 'success', content: 'This is usual event. This is warning event.' }
    ],
    ten: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' },
      { type: 'error', content: 'This is error event.' }
    ],
    eleven: [
      { type: 'warning', content: 'This is warning event' },
      { type: 'success', content: 'This is very long usual event........' },
      { type: 'error', content: 'This is error event 1.' },
      { type: 'error', content: 'This is error event 2.' },
      { type: 'error', content: 'This is error event 3.' },
      { type: 'error', content: 'This is error event 4.' }
    ]
  };

  constructor(private elementRef: ElementRef){
  }

  ngAfterViewInit(): void {

    this.divider = this.elementRef.nativeElement.querySelector('.custom-divider') as any;
    this.leftDiv = this.elementRef.nativeElement.querySelector('.leftDiv') as HTMLDivElement;
    this.rightDiv = this.elementRef.nativeElement.querySelector('.rightDiv') as HTMLDivElement;
    
    console.log(this.leftDiv);
    console.log(this.rightDiv);
    console.log(this.divider);

    this.divider.addEventListener('mousedown', this.startDrag);
    document.addEventListener('mousemove', this.dragHandler);
    document.addEventListener('mouseup', this.stopDrag)
    //document.addEventListener('mouseleave', this.stopDrag)


  }

  isStartDrag = false;
  isFirstEnterDrag = false;
  startX = 0;
  rect : any = null;

  startDrag = (event: MouseEvent): void =>{ 
    this.isStartDrag = true;
    this.isFirstEnterDrag = true;
    console.log('start drag', this.isStartDrag);
    //console.log('offsetX=>', event.offsetX);
    //console.log('pageX=>', event.pageX);
    this.startX = event.pageX;
    this.rect = this.divider.getBoundingClientRect();
  }

  count = 0;

  dragHandler = (event : MouseEvent) : void => {
    event.preventDefault();

    if(this.isStartDrag) {
      const browserMaxWidthNoscrollbars = document.documentElement.clientWidth;
      let dividerRect = this.divider.getBoundingClientRect();

      console.log('this.start=>', this.startX);
      console.log('event.page=>', event.pageX);
      console.log('befor this.divider.rectLeft=>', dividerRect.left);
      
      let distanceMoved = this.startX - event.pageX;
      this.startX = event.pageX;

      distanceMoved = dividerRect.left <= 30 ? -1 : dividerRect.left >= browserMaxWidthNoscrollbars - 40 ? 1 : distanceMoved;

      // 調整左邊div的寬度
      let leftDivRect = this.leftDiv.getBoundingClientRect();
      console.log('B rect 左邊div的寬度=>', leftDivRect.width);
      this.leftDiv.style.width = (leftDivRect.width - distanceMoved) + 'px';
      leftDivRect = this.leftDiv.getBoundingClientRect();
      console.log('A rect 左邊div的寬度=>', leftDivRect.width);

      dividerRect = this.divider.getBoundingClientRect();
      console.log('after this.divider.rectLeft=>', dividerRect.left);

      console.log('browserMaxWidth=>', browserMaxWidthNoscrollbars);
      console.log('draging');
      console.log('');


    }
  };

  stopDrag = (event : Event) : void => {
    if(this.isStartDrag){
      this.isStartDrag = false;
        console.log('stop drag');
    }
  }

  getWidthNum(widthStr : string){
    const matches = widthStr.match(/\d+/);
    const widthNumber = matches ? parseInt(matches[0], 10) : 0;
    return widthNumber;
  }

}
