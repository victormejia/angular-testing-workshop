import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import * as faker from 'faker';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StatusComponent implements OnInit {

  @Input() status: string;
  @Output() newStatus = new EventEmitter();

  color: string;

  constructor() {
  }

  ngOnInit() {
    this.color = this.statusToColor(this.status);
  }

  statusToColor(status: string) {
    switch (status) {
      case 'danger':
        return 'red';
      case 'safe':
        return 'green';
      case 'warning':
        return 'yellow';
      default:
        return 'green';
    }
  }

}
