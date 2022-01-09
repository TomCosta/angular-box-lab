import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // transform(items: Array<any>, filter: {[key: string]: any }): Array<any> {
  //   return items.filter(item => {
  //       const notMatchingField = Object.keys(filter)
  //         .find(key => item[key] !== filter[key]);
  //       return !notMatchingField; // true if matches all fields
  //   });
  // }
  // transform(value: Array<any>, field: string, args: string): Array<any> {
  //   let filter = args ? args.toLocaleLowerCase() : null;
  //   return filter ? value.filter((item: any) => item[field].toLocaleLowerCase().indexOf(filter) != -1) : value;
  // }
  transform(value: any, input: any): any {
    if (input) {
      // return value.filter(val => val.indexOf(input))>=0;
      return value.filter((val: { operacao: string | any[]; }) => val.operacao.indexOf(input.toLowerCase())>=0);
    } else {
      return value;
    }
  }
}
// https://stackoverflow.com/questions/41672578/filter-on-multiple-columns-using-one-pipe-angular-2
