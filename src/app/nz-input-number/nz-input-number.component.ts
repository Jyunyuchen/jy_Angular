import { Component } from '@angular/core';

/**
 * 將輸入至 nz-input-number 的值，若有小數點或非數字的過濾掉 
 */
@Component({
  selector: 'app-nz-input-number',
  templateUrl: './nz-input-number.component.html',
  styleUrls: ['./nz-input-number.component.css']
})
export class NzInputNumberComponent {

  value = null;


  btnClick() {

    console.log(this.value, typeof this.value);
    
  } 

  formatNumber = (value: number | string) : string | number =>{

    /*let regx = /^(0+)|[^\d]/;
    if(regx.test(String(value))){
      return '';
    }

    console.log(value, typeof value);*/

    return value;
  }

  parseNumber = (value: string) => {

   /* let regx = /^(0+)|[^\d]/;
    if(regx.test(value)){
      console.log('parseNumber');
      return '';
    }*/

    return value;

  }

  focus(){
    console.log('focus !!');
    
  }

}
