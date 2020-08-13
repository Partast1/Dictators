import { Component, OnInit } from '@angular/core';

import { Dictator } from '../Dictator';
import {DictatorService} from '../dictator.service';
import { MessageService } from '../message.service';
import {DICS} from '../mock-dictator';
import {DictatorDetailComponent} from '../dictator-detail/dictator-detail.component';

@Component({
  selector: 'app-dictators',
  templateUrl: './dictators.component.html',
  styleUrls: ['./dictators.component.css']
})
export class DictatorsComponent implements OnInit {
  dictators: Dictator[];

  Dics = DICS;
  selectedDic: Dictator;
  constructor(private dictatorService: DictatorService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getDics();
  }
  onSelect(dic: Dictator): void {
    this.selectedDic = dic;
    this.messageService.add(`DictatorComponent: Selected dic name=${dic.firstName}`);
  }
  getDics(): void {
    this.dictatorService.getHeroes()
      .subscribe(dictators => this.dictators = dictators);
  }
}
