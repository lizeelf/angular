/**
 * Created by 206-025 on 2017-04-25.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mydate' })
export class MyDatePipe implements PipeTransform {
    transform(value: string, separator: string): string {

        return value.substring(0, 4) + separator + value.substring(4, 6) + separator + value.substring(6, 8);
    }
}