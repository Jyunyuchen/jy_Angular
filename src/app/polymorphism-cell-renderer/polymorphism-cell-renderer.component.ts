import { Component } from '@angular/core';
import { ColDef, ICellRenderer } from 'ag-grid-community';
import { RedCellRenderer } from './RedCellRenderer';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { BlueCellRenderer } from './BlueCellRenderer';

@Component({
  selector: 'app-polymorphism-cell-renderer',
  templateUrl: './polymorphism-cell-renderer.component.html',
  styleUrls: ['./polymorphism-cell-renderer.component.css']
})
export class PolymorphismCellRendererComponent {

  type = "blue";

  rowData = [
    {
      id : 1,
      name : 'David'
    },
    {
      id : 1,
      name : 'David'
    },
    {
      id : 1,
      name : 'David'
    },
    {
      id : 1,
      name : 'David'
    },
    {
      id : 1,
      name : 'David'
    },
    {
      id : 2,
      name : 'Kevin'
    }
  ];

  public columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'name', cellRenderer: this.colorCellRenderer() },
  ];

  colorCellRenderer() : any {
    if(this.type === 'red'){
      return RedCellRenderer;
    }
    else{
      return BlueCellRenderer;
    }

    return undefined;
  }

  public defaultColDef: ColDef = {
    editable: true,
    sortable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
    resizable: true,
  };

  

}
