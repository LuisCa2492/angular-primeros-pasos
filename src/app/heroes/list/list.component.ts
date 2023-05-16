import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroes:string[]=['Spiderman','Hulk','Capitan America'];
  heroeBorrado?:string ;
  borrado:boolean=false;
  borrarUltimoHeroe():void{
    this.heroeBorrado = this.heroes.pop();
    this.borrado=!this.borrado;
  }
}
