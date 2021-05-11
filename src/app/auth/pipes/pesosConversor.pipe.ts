import {Pipe, PipeTransform} from "@angular/core";
import { ComunicationService } from "src/app/finance-tools/services/comunication.service";

@Pipe({ name: 'pesos'})
export class PesosConversorPipe implements PipeTransform{
    private value3:string;


    constructor(private _comunicationService: ComunicationService){
        this._comunicationService.sendMessageObservable.subscribe(message => {
            this.value3 = message;
        })
    }

    transform(value1: string, value2: string, value3:string){
        let value_one = parseFloat(value1);
        let value_two = parseFloat(value2);
        let pesos = parseFloat(value3);

        let result = value_one * value_two * pesos;

        return result;
    }
}