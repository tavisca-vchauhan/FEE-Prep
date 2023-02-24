import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'power',
})
export class PowerPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return Math.pow(value, args[0]);
  }
}
