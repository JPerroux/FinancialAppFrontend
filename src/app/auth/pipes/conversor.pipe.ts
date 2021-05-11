import {Pipe, PipeTransform} from "@angular/core";

@Pipe({ name: 'position'})
export class ConversorPipe implements PipeTransform{
    transform(value1: string, value2: string){
        let value_one = parseFloat(value1);
        let value_two = parseFloat(value2);

        let result = value_one * value_two;

        return result;
    }
}