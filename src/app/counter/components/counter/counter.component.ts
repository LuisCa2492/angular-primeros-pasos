import {Component} from '@angular/core'

@Component({
    selector:'app-counter',
    templateUrl: './app-counter.html'
})
export class CounterComponent{
    counter:number = 10;

    increaseBy():void{
        this.counter++;
    }

    decreaseBy():void{
        this.counter--;
    }

    reset():void{
        this.counter = 10;
    }
}