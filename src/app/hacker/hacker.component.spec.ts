import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HackerComponent } from './hacker.component';

xdescribe('HackerComponent', () => {
  let component: HackerComponent;
  let fixture: ComponentFixture<HackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerComponent);
    component = fixture.componentInstance;
  });

});
