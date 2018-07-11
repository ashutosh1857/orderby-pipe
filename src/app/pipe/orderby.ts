import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const sortOrder = args[0].sortOrder;
    const columnName = args[0].columnName;

    if (columnName) {
      const desc = !(sortOrder === 'asc');
      return value.sort(
        (a: any, b: any) =>
          !desc
            ? this.OrderByComparator(a[columnName], b[columnName])
            : -this.OrderByComparator(a[columnName], b[columnName])
      );
    } else {
      return value;
    }
  }

  public OrderByComparator(a: any, b: any): number {
    if (typeof a === 'string') {
      return this.typeofString(a, b);
    } else if (typeof a === 'number') {
      return this.typeofNumber(a, b);
    } else {
      return this.typeofDate(a, b);
    }
  }

  private typeofNumber(a: number, b: number): number {
    if (!a || !b) {
      return -1;
    }
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0; // equal each other
  }

  private typeofDate(a: Date, b: Date): number {
    if (!a || !b) {
      return -1;
    }
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0; // equal each other
  }

  private typeofString(a: string, b: string): number {
    if (!a || !b) {
      return -1;
    }
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0; // equal each other
  }
}
