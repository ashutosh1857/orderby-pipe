import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sort;
  private _columnName: string;
  public data: Array<Employee> = [
    {
      name: 'Ashutosh',
      dob: new Date('08/11/1987'),
      id: 10001,
      accountnumber: 'a123logq',
      salary: 209.92
    },
    {
      name: 'Shivangi',
      dob: new Date('08/11/1986'),
      id: 10003,
      accountnumber: 'a123logq',
      salary: 209.01
    },
    {
      name: 'Abhishek',
      dob: new Date('08/11/1985'),
      id: 10002,
      accountnumber: 'm123logq',
      salary: 209.21
    },
    {
      name: 'Halrgen',
      dob: new Date('08/11/1992'),
      id: 10004,
      accountnumber: 'a123logx',
      salary: 100.91
    },
    {
      name: 'Kevin',
      dob: new Date('08/11/1982'),
      id: 10005,
      accountnumber: 'a123dmgq',
      salary: 208.92
    },
    {
      name: 'Ram',
      dob: new Date('08/11/1988'),
      id: 10006,
      accountnumber: 'c123chnq',
      salary: 206.92
    },
    {
      name: 'Laxman',
      dob: new Date('08/11/1981'),
      id: 10007,
      accountnumber: 'b123iuwq',
      salary: 209.32
    },
    {
      name: 'Ullas',
      dob: new Date('08/11/1985'),
      id: 10091,
      accountnumber: 'b123iuwq',
      salary: 309.32
    }
  ];

  constructor() {
    this.sort = { sortOrder: 'asc', columnName: 'name' };
  }

  public onAscending() {
    this.sort = { sortOrder: 'asc', columnName: this._columnName };
  }

  public onDescending() {
    this.sort = { sortOrder: 'desc', columnName: this._columnName };
  }

  public onSelectSortColumn(columnName: any) {
    this._columnName = columnName;
  }
}

interface Employee {
  name: string;
  dob: Date;
  id: number;
  accountnumber: string;
  salary: number;
}
