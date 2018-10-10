import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {Hero} from './hero' ;

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GetHeroesService {
  private 
  private reqUrl = `https://api.github.com/orgs/angular/members?page=1&per_page=8`;
  constructor(private http:HttpClient,private messageService: MessageService) { }

  getHeroes():Observable<Hero[]>{
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.reqUrl)
  }
}
