import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero' ;
import { GetHeroesService } from '../get-heroes.service' ;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes:Hero[] ;
  constructor(private heroService:GetHeroesService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes():void{
    this.heroService.getHeroes().subscribe(user => {
      this.heroes = user.slice(1,4);
    } )
  }
}
