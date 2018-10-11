import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Hero } from './hero' ;

import { catchError,map,tap } from 'rxjs/operators' ;

@Injectable({
  providedIn: 'root'
})
export class GetHeroesService {
  private reqUrl = `https://api.github.com/orgs/angular/members`;
  // https://api.github.com/orgs/angular/members?page=1&per_page=1
  constructor(private http:HttpClient) { }

  getHeroes():Observable<Hero[]>{
    const url = `${this.reqUrl}?page=1&per_page=8`;
    return this.http.get<Hero[]>(url);
    // return this.http.get<Hero[]>(url)
    // .pipe(
    //   tap(heroes=> this.log('fetched heroes')),
    //   catchError(this.handleErr('getHeroes',[]))
    // );
  }
  getHero(id:number):Observable<Hero[]>{
    const url = `${this.reqUrl}?page=${id}&per_page=1`;
    return this.http.get<Hero[]>(url);
  }
  private log(msg:string){
    console.log('Err:'+msg)
  }
  private handleErr<T>(operation='operation',result?:T){
    return (error:any):Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T)
    }
  }
}
