import { Pipe, PipeTransform } from '@angular/core';
import { consumerAfterComputation } from '@angular/core/primitives/signals';

@Pipe({
  name: 'firstKey'
})
export class FirstKeyPipe implements PipeTransform {

  transform(value: any):string|null {
   const keys=Object.keys(value);
if(keys && keys.length>0)
  return keys[0];

    return null;
  }

}
