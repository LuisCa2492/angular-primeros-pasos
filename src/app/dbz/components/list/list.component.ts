import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList:Character[]=[{
    id: uuid(),
    name:"Trunks",
    power: 10
  }]

  @Output()
  public emitIndex: EventEmitter<string>=new EventEmitter();

  // onDelete(index:number):void{
  //   this.emitIndex.emit(index);
  // }

  deleteCharacterById(index:string):void{
    this.emitIndex.emit(index);
  }

  onDeleteCharacter(index:string):void{
    console.log(index);
  }
}
