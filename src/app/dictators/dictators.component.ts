import { Component, OnInit, Input } from '@angular/core';

import { Dictator } from '../Dictator';
import {DictatorService} from '../dictator.service';
import { MessageService } from '../message.service';
import {DictatorDetailComponent} from '../dictator-detail/dictator-detail.component';

@Component({
  selector: 'app-dictators',
  templateUrl: './dictators.component.html',
  styleUrls: ['./dictators.component.css']
})
export class DictatorsComponent implements OnInit {
  @Input() fName: string;
  @Input() lName: string;
  @Input() yBorn: string;
  @Input() yDeceased: string;
  @Input() desciption: string;
  dic: Dictator;
  dictators: Dictator[];
  dicList: Array<Dictator> = [];
  selectedDic: Dictator;
  constructor(private dictatorService: DictatorService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getDics();
  }
  onSelect(dic: Dictator): void {
    this.selectedDic = dic;
    this.messageService.add(`Dictator description=${dic.description}`);
  }
  getDics(): void {
    this.dictatorService.getHeroes()
      .subscribe(dictators => this.dictators = dictators);
  }
  submitDic(fName: string, lName: string, yBorn: string, yDeceased: string, desciption: string): void{
    let greater = new Dictator(fName, lName, yBorn, yDeceased, desciption);
    this.dicList.push(greater);
  }
  deleteDic(): void{
    this.dicList.pop();
  }
}
