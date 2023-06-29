import { Component } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent, HeaderValueGetterParams, IDatasource, IGetRowsParams, RowModelType, ValueGetterParams } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid-infinite',
  templateUrl: './ag-grid-infinite.component.html',
  styleUrls: ['./ag-grid-infinite.component.css']
})
export class AgGridInfiniteComponent {

  public columnDefs: ColDef[] = [
    {
      headerName: 'ID',
      maxWidth: 100,
      // it is important to have node.id here, so that when the id changes (which happens
      // when the row is loaded) then the cell is refreshed.
      valueGetter: (params : ValueGetterParams) => {
        return params.node!.rowIndex === null ? null : params.node!.rowIndex + 1;
      }
    },
    { field: 'name', minWidth: 150 },
    { field: 'age' },

  ];

  public dataList = [
    {
      name : 'David',
      age:18
    },
    {
      name : 'David',
      age:18
    },
    {
      name : 'David',
      age:18
    },
    {
      name : 'David',
      age:18
    },
    {
      name : 'David',
      age:18
    },
    {
      name : 'David',
      age:18
    },
    {
      name : 'David',
      age:18
    },
    {
      name : 'David',
      age:18
    },
    {
      name : 'David',
      age:18
    },
    {
      name : 'Ken',
      age:23
    }
  ]

  public rowBuffer = 0;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  public rowModelType: RowModelType = 'infinite';
  public cacheBlockSize = 10;
  public cacheOverflowSize = 10;
  public maxConcurrentDatasourceRequests = 1;
  public infiniteInitialRowCount = 1000;
  public maxBlocksInCache = 10;
  public gridApi!:GridApi;

  fetchData(){

    const dataSource : IDatasource = {
      rowCount: undefined,
      getRows: (params: IGetRowsParams) => {
        console.log(
          'asking for ' + params.startRow + ' to ' + params.endRow
        );

        const rowsThisPage = this.dataList;
        let lastRow = -1
        if (params.endRow >= 500) {
          lastRow = 500;
          console.log("沒有資料了!!");
        }
        params.successCallback(rowsThisPage, lastRow);
        
        
      }
    };

    console.log('===>', this.gridApi);
    
    this.gridApi.setDatasource(dataSource);

  }

  onGridReady(params: GridReadyEvent<any>) {
    console.log('onGridReady!!!');
    this.gridApi = params.api;
    this.fetchData();
  }

}
