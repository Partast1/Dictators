import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { Dictator} from './Dictator';
import { DICS} from './mock-dictator';

@Injectable({
  providedIn: 'root'
})
export class DictatorService {
  // getHeroes(): Dictator[] {
  //   return DICS;
  // }
  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Dictator[]> {
    return of(DICS);
  }
}
