import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
   nombre:string = "ironMan";
   edad:number = 45;

   get capitalizedName():string{
      return this.nombre.toUpperCase();
   };

   getHeroDescription():string{
      return `Nombre: ${this.nombre} Edad: ${this.edad}`;
   }

   changeHero():void{
      this.nombre= "Spiderman";
   }

   changeAge():void{
     this.edad=31;
   }

   reset():void{
      this.nombre= 'ironman';
      this.edad = 45;
   }
}
