import { Component, OnInit } from '@angular/core';

import {GetHeroesService} from '../get-heroes.service' ;
import {Hero} from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero:Hero;
  heroes:Hero[];
  constructor(private heroService:GetHeroesService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes():void{
    this.heroService.getHeroes().subscribe(user => this.heroes = user )
  }
  onSelect(hero:Hero){
    this.selectedHero = hero ;
  }

}
