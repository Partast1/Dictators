import { Component, OnInit, Input } from '@angular/core';
import {Dictator } from '../Dictator';

@Component({
  selector: 'app-dictator-detail',
  templateUrl: './dictator-detail.component.html',
  styleUrls: ['./dictator-detail.component.css']
})
export class DictatorDetailComponent implements OnInit {
@Input() dictator: Dictator;
  constructor() { }

  ngOnInit(): void {
  }

}
