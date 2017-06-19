import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HackerComponent } from './hacker.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ShortDatePipe } from '../core/pipes/short-date.pipe';

describe('HackerComponent: Solution', () => {
  let component: HackerComponent;
  let fixture: ComponentFixture<HackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerComponent, ShortDatePipe ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerComponent);
    component = fixture.componentInstance;
  });

});
