import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MenuComponent: Solution', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render two menu items', () => {
    const menuItems = fixture.debugElement.queryAll(By.css('a'));
    expect(menuItems.length).toBe(2);
  });

  it('should render a different hacker link title', () => {
    component.hackerLink = 'Spies';

    fixture.detectChanges();

    const hackerLink = fixture.debugElement.queryAll(By.css('a'))[0];
    expect(hackerLink.nativeElement.textContent).toBe('Spies');
  });
});
