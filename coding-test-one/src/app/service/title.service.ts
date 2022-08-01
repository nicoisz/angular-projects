import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { Title } from '../model/title.model';

@Injectable({
  providedIn: 'root'
})

export class TitleService {

  constructor() { }

  getTitles(): Observable<Title[]>{
    return of([
      {name:'Mr', isDefault: false},
      {name:'Mrs', isDefault: false},
      {name:'Miss', isDefault: false},
      {name:'!', isDefault: false},
      {name:'Dr', isDefault: true},
      {name:'Prof', isDefault: false},
    ])

  }
}
