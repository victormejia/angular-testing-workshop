import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  hackerLink = 'Hackers';
  statsLink = 'Stats';
  activeLink = this.hackerLink;

  constructor() { }

  ngOnInit() {
  }

}
