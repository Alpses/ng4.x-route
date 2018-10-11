import { Component, OnInit,Input } from '@angular/core';

import { ActivatedRoute } from "@angular/router" ;
import { Location } from '@angular/common' ;

import { GetHeroesService } from '../get-heroes.service' ;

import { Hero  } from "../hero";
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() singleHero:Hero ;
  private heroes:Hero[];
  constructor(
    private route:ActivatedRoute,
    private heroService:GetHeroesService,
    private location:Location
  ) {  }

  ngOnInit() {
    this.getHero();
  }
  getHero():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(user => {this.heroes = user;
    console.log(user)} );
  }
  goBack():void{
    this.location.back();
  }
}
