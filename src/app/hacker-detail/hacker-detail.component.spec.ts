import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HackerDetailComponent } from './hacker-detail.component';
import { mockHackers } from 'app/core/helpers.spec';
import { Observable } from 'rxjs/Observable';
import { ApiService } from 'app/core/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import 'rxjs/add/observable/of';

describe('HackerDetailComponent', () => {
  let component: HackerDetailComponent;
  let fixture: ComponentFixture<HackerDetailComponent>;
  // declare element variable
  let element;

  // create a mock ApiService and ActivatedRoute
  const mockApiService = {
    getHackerDetails: (id) => Promise.resolve(mockHackers[3])
  };

  const mockActivatedRouted = {
    params: Observable.of( { id: mockHackers[3].id })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerDetailComponent ],
      // providers: use provide object literal for both
      // ApiService and ActivatedRoute
      providers: [
        { provide: ApiService, useValue: mockApiService },
        { provide: ActivatedRoute, useValue: mockActivatedRouted }
      ],
      // use NO_ERRORS_SCHEMA since we are not rendering app-
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerDetailComponent);
    component = fixture.componentInstance;
    // get the native element
    element = fixture.nativeElement;
  });

  it('should set the correct hacker name', async(() => {
    // Arrange: trigger ngOnInit through fixture.detectChanges()
    fixture.detectChanges();

    fixture.whenStable()
      .then(() => {
        fixture.detectChanges();
        const name = element.querySelector('.header');
        expect(name.textContent).toBe('Kathlyn')
      });

    // Act: use fixture.whenStable()
    // once promise resolves, trigger change detection cycle
    // to display new data
    // get the .header element

    // Assert:
    // assert that its text content is the name for mockHackers[3]
  }));

  it('should set the correct hacker status message', async(() => {
    fixture.detectChanges();

    // Arrange: trigger ngOnInit through fixture.detectChanges()

    fixture.whenStable()
      .then(() => {
        fixture.detectChanges();
        const description = element.querySelector('.description');
        expect(description.textContent.trim())
          .toBe('You can\'t program the bus without bypassing the redundant RSS circuit!')
      })
    // Act: use fixture.whenStable()
    // once promise resolves, trigger change detection cycle
    // to display new data
    // get the .description element

    // Assert:
    // assert that its text content is the status message for mockHackers[3]
  }));
});
