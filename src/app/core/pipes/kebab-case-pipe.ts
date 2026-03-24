import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabCase',
  //pure: false
})
export class KebabCasePipe implements PipeTransform {
  transform(value: string, format: string = 'normal'):string {
    let kebab = value.toLocaleLowerCase().replace(/ /g, '-');

    if(format === 'uppercase'){
      return kebab.toUpperCase();
    }else{
      return kebab;
    }
  }

  // transform(value: string): string {
  //   return value.toLocaleLowerCase().replace(/ /g, '-');
  // }

}
