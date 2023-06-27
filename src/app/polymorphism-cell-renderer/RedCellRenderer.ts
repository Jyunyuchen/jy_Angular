import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'RedCellRenderer-component',
  template: `<span class="spanClazz">{{ this.displayValue }}</span>`,
  styles:[`
      .spanClazz{
        background-color: red;
      }
  
  `]
})
export class RedCellRenderer implements ICellRendererAngularComp {
  displayValue = '';

  constructor(){}

  agInit(params: ICellRendererParams<any, string>): void {
    this.displayValue = params.value || '';
  }

  refresh(params: ICellRendererParams) {
    return false;
  }
}
