import {Pipe, PipeTransform} from "@angular/core";

@Pipe({ name: 'spreadpesos'})
export class SpreadPesosPipe implements PipeTransform{
    transform(value1: string, value2: string, value3:string, value4:string){
        let value_one = parseFloat(value1);
        let value_two = parseFloat(value2);
        let value_three = parseFloat(value3);
        let value_for = parseFloat(value4);
        let result = (value_one * (value_two - value_three)) * value_for;
        return result;
    }
}