import { Component, OnInit } from '@angular/core';

import {GetHeroesService} from '../get-heroes.service' ;
import { MessageService } from '../message.service';
import {Hero} from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero:Hero;
  heroes:Hero[];
  hoveredHero:Hero ;
  constructor(private heroService:GetHeroesService,private messageService:MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes():void{
    this.heroService.getHeroes().subscribe(user =>{ this.heroes = user;} );
  }
  // onSelect(hero:Hero){
  //   this.messageService.add('Added heroe_id:'+ hero.id);
  //   this.selectedHero = hero ;
  //   // console.log('selectedHero:',this.selectedHero);
  // }
  // onHover(hero:Hero){
  //   this.hoveredHero = hero ;
  // }
}
