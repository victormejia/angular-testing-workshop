import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-hacker]', // tslint:disable-line
  templateUrl: './hacker.component.html',
  styleUrls: ['./hacker.component.scss']
})
export class HackerComponent {
  @Input() hacker;
  statusMessage: string;

  constructor() { }
}
