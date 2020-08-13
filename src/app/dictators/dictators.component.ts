import { Component, OnInit, Input } from '@angular/core';
import { Dictator } from '../Dictator';
import {DICS} from '../mock-dictator';
import {DictatorDetailComponent} from '../dictator-detail/dictator-detail.component';

@Component({
  selector: 'app-dictators',
  templateUrl: './dictators.component.html',
  styleUrls: ['./dictators.component.css']
})
export class DictatorsComponent implements OnInit {
  @Input() dictator: Dictator;

  Dics = DICS;
  selectedDic: Dictator;
  constructor() {
  }

  ngOnInit(): void {
  }
  onSelect(dic: Dictator): void {
    this.selectedDic = dic;
  }

}
