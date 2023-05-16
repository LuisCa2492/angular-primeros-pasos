import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

    characters:Character[]= [{
        id:uuid(),
        name:"Vegeta",
        power:1000
    },
    {
        id:uuid(),
        name:"Picoro",
        power:500
    },
    {
        id:uuid(),
        name:"Androide 18",
        power:3000
    }];

    addCharacter(character:Character):void{
        const newCharacter={
            id:uuid(),
            name:character.name,
            power:character.power
        }
        this.characters.push(newCharacter);
        console.log(newCharacter);
    }

    // onDeleteCharacter(index:number):void{
    //     this.characters.splice(index,1);
    // }
    
    deleteCharacterById(index:string):void{
        this.characters = this.characters.filter(character => character.id != index);
    }
}