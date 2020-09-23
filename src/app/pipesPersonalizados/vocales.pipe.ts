import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vocales'
})
export class VocalesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    for (let i = 0; i < value.length; i++) {

      if (value.charAt(i) == 'a') {
        value = value.replace('a', '@');
      } else if (value.charAt(i) == 'e') {
        value = value.replace('e', '_');
      } else if (value.charAt(i) == 'i') {
        value = value.replace('i', '#');
      } else if (value.charAt(i) == 'o') {
        value = value.replace('o', '!');
      } else if (value.charAt(i) == 'u') {
        value = value.replace('u', '?');
      }

    }




    return value;
  }

}
