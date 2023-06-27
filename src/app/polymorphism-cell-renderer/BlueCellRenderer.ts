import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'BlueCellRenderer-component',
  template: `<span class="spanClazz">{{ this.displayValue }}</span>`,
  styles:[`
      .spanClazz{
        background-color: blue;
        color:white;
      }
  
  `]
})
export class BlueCellRenderer implements ICellRendererAngularComp {
  displayValue = '';

  constructor(){}

  agInit(params: ICellRendererParams<any, string>): void {
    this.displayValue = params.value || '';
  }

  refresh(params: ICellRendererParams) {
    return false;
  }
}
