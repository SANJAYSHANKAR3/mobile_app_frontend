import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseAndlowerCase',
  standalone: true
})
export class UpperCaseAndlowerCasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
