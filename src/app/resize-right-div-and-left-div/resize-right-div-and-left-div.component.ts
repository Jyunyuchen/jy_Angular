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

  isStartDrag = false;
  startX = 0;

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
    //document.addEventListener('mousemove',this.throttleDragHandler(this.dragHandler));
    document.addEventListener('mousemove', this.dragHandler);
    document.addEventListener('mouseup', this.stopDrag);
    document.addEventListener('mouseleave', this.stopDrag);
  }



  startDrag = (event: MouseEvent): void =>{ 
    this.isStartDrag = true;
    this.startX = event.pageX;
    console.log('start drag', this.isStartDrag);
  }

  count = 0;

  dragHandler = (event : MouseEvent) : void => {
    event.preventDefault();
    // console.log('this==>',this);
    // console.log('event==>',event);

    if(this.isStartDrag) {
      const browserMaxWidthNoscrollbars = document.documentElement.clientWidth;
      let dividerRect = this.divider.getBoundingClientRect();

      console.log('this.start=>', this.startX);
      console.log('event.page=>', event.pageX);
      console.log('befor this.divider.rectLeft=>', dividerRect.left);
      
      let distanceMoved = 0;
      if(dividerRect.left <= 30 && this.startX > event.pageX){
        distanceMoved = 0
      }
      else if(dividerRect.left <= 30 && this.startX < event.pageX){
        distanceMoved = this.startX - event.pageX;
      }
      else if(dividerRect.left >= browserMaxWidthNoscrollbars - 200 && this.startX < event.pageX){
        distanceMoved = 0;
      }
      else if(dividerRect.left >= browserMaxWidthNoscrollbars - 200 && this.startX > event.pageX){
        distanceMoved = this.startX - event.pageX;
      }
      else{
        distanceMoved = this.startX - event.pageX;
      }
      this.startX = event.pageX;



      console.log('拖曳距離=>', distanceMoved)
      // 調整左邊div的寬度
      let leftDivRect = this.leftDiv.getBoundingClientRect();
      console.log('B rect 左邊div的寬度=>', leftDivRect.width);
      this.leftDiv.style.width = (leftDivRect.width - distanceMoved) + 'px';
      leftDivRect = this.leftDiv.getBoundingClientRect();
      console.log('A rect 左邊div的寬度=>', leftDivRect.width);

      dividerRect = this.divider.getBoundingClientRect();
      console.log('after this.divider.rectLeft=>', dividerRect.left);


      // 取得拖曳線之前的元素寬度
      const leftDivComputedStyle = window.getComputedStyle(this.leftDiv);
      const dividerComputedStyle = window.getComputedStyle(this.divider);
      // console.log('左邊div的寬度==>', leftDivComputedStyle.width);
      console.log('leftDiv的marginLeft==>', leftDivComputedStyle.marginLeft);
      console.log('分隔線的marginLeft==>', dividerComputedStyle.marginLeft);
      // const totalWidthLeftOfTheDivider = this.getWidthNum(leftDivComputedStyle.width) + this.getWidthNum(leftDivComputedStyle.marginLeft) + this.getWidthNum(dividerComputedStyle.marginLeft)
      // console.log('**拖曳線之前的元素總寬度**==>', totalWidthLeftOfTheDivider);


      if(dividerRect.left > browserMaxWidthNoscrollbars - 200 ){
        console.log('拖曳線左邊的寬度 > 瀏覽器沒有卷軸的寬度，進行校正=>', leftDivRect.width);
        this.leftDiv.style.width = (browserMaxWidthNoscrollbars - 200 - this.getWidthNum(leftDivComputedStyle.marginLeft) - this.getWidthNum(dividerComputedStyle.marginLeft)) + 'px';
        leftDivRect = this.leftDiv.getBoundingClientRect();
        console.log('校正後的寬度=>', leftDivRect.width);
      }

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

  
  throttleDragHandler(func : Function) : (event : MouseEvent) => void {

      let timeouterId : any = null;

      return (event : MouseEvent) : void => {
        event.preventDefault();
        if(!this.isStartDrag) {
          return;
        }

        if(timeouterId !== null){
          console.log('正在執行拖曳', timeouterId);
          return;
        }

        timeouterId = setTimeout(()=>{
          func(event);
          timeouterId = null;
        }, 0);
      }
  }

}
