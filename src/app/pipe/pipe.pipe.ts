import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: string): string {
    let localhost = "https://localhost:7254/";
    return localhost + value;
  }

}
