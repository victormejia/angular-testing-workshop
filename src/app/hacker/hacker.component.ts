import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-hacker]', // tslint:disable-line
  templateUrl: './hacker.component.html',
  styleUrls: ['./hacker.component.scss']
})
export class HackerComponent implements OnInit {
  @Input() hacker;
  statusMessage: string;

  constructor() { }

  ngOnInit() {
    this.statusMessage = this.hacker.statusMessage;
  }

  updateStatus(status) {
    this.statusMessage = status;
  }

}
