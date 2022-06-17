import { Component, Input, OnInit } from '@angular/core';

export interface INgxTableColumn {
  title: string;
  key: string;
}

@Component({
  selector: 'ngx-data-table',
  templateUrl: './ngx-data-table.component.html',
  styleUrls: ['./ngx-data-table.component.scss'],
})
export class NgxDataTableComponent<T extends { [x: string]: any }>
  implements OnInit
{
  @Input() list: T[] = [];

  @Input() columns: INgxTableColumn[] = [];

  pageSizes: number[] = [10, 20, 30, 40];

  pageSize: number = 10;

  numOfPages = 0;

  startSlice: number = 0;

  endSlice: number = 10;

  page: number = 1;

  get pageList(): number[] {
    this.numOfPages = Math.ceil(this.list.length / this.pageSize);
    return [...Array(this.numOfPages).keys()].map((item) => item + 1);
  }

  constructor() {}

  ngOnInit(): void {
    this.numOfPages = Math.ceil(this.list.length / this.pageSize);
  }

  jumpToPage(pageNum: number): void {
    this.page = pageNum;
    this.startSlice = this.pageSize * (this.page - 1);
    this.endSlice = this.startSlice + this.pageSize;
  }

  setPageSize(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.pageSize = Number(target.value);
    this.jumpToPage(1);
  }
}
