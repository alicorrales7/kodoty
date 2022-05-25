import {Country} from './Country';
import {ChangeBehavior} from "./ChangeBehavior";

export class Currency{
    constructor(public country:Country,
                public value:number,
                public behavior:ChangeBehavior){}

             
    get valuetoMoneyFormat():string{
        return new Intl.NumberFormat(this.country.locale, {
            style: "currency", 
            currency: this.country.currency
        }).format(this.value)
    }
}