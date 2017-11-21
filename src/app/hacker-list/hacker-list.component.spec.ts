import { async, ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { HackerListComponent } from './hacker-list.component';

// import the NO_ERRORS_SCHEMA
import { NO_ERRORS_SCHEMA } from '@angular/core';

// import the Router
import { Router } from '@angular/router';

// import the By testing utiltity
import { By } from '@angular/platform-browser';

// import the ApiService
import { ApiService } from '../core/services/api.service';

// import mockHackers from core/helpers.spec.ts
import { mockHackers } from '../core/helpers.spec';

describe('HackerListComponent', () => {
  let component: HackerListComponent;
  let fixture: ComponentFixture<HackerListComponent>;

  // reference to api and router
  let api: ApiService;
  let router: Router;

  // create a mock api service (empty getHackers method)
  const mockApiService = {
    getHackers: () => { }
  }

  // create a mock router (empty navigate method)
  const mockRouter = {
    navigate: () => { }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerListComponent ],
      // providers: use provide object literal for both
      // ApiService and Router
      providers: [
        { provide: ApiService, useValue: mockApiService },
        { provide: Router, useValue: mockRouter }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerListComponent);
    component = fixture.componentInstance;
    // delete the following line as to not trigger ngOnInit()
    // fixture.detectChanges();

    // get the ApiService and Router instance from the component's
    // injector (fixture.debugElement.injector)
    api = fixture.debugElement.injector.get(ApiService);
    router = fixture.debugElement.injector.get(Router);

  });

  describe('initial display', () => {
    it('makes a call to api.getHackers', () => {
      // Arrange: spy on api.getHackers to return Promise.resolve({})
      spyOn(api, 'getHackers').and.returnValue(Promise.resolve({}));

      // Act: trigger ngOnInit through fixture.detectChanges()
      fixture.detectChanges();

      // Assert: assert that api.getHackers gets called
      expect(api.getHackers).toHaveBeenCalled();
    });

    it('sets initial data (using async)', async(() => {
      // Arrange: spy on api.getHackers to return Promise.resolve({mockHackers})
      spyOn(api, 'getHackers')
        .and.returnValue(Promise.resolve(mockHackers));

      // Act: trigger ngOnInit through fixture.detectChanges()
      fixture.detectChanges();

      // Assert: use the fixture's whenStable() method
      // to assert that component.hackers is equal to mockHackers
      fixture.whenStable()
        .then(() => {
          expect(component.hackers).toEqual(mockHackers);
        })
    }));

    it('sets initial data (using fakeAsync)', fakeAsync(() => {
      // Arrange: spy on api.getHackers to return Promise.resolve({mockHackers})
      spyOn(api, 'getHackers')
        .and.returnValue(Promise.resolve(mockHackers));

      // Act: trigger ngOnInit through fixture.detectChanges()
      fixture.detectChanges();
      flush();

      // Assert: component.hackers is equal to mockHackers
      expect(component.hackers).toEqual(mockHackers);
    }));

  });

  it('renders correct number of tbody rows', fakeAsync(() => {
    // Arrange: spy on api.getHackers to return Promise.resolve({mockHackers})
    spyOn(api, 'getHackers').and.returnValue(Promise.resolve(mockHackers));

    // Act:
    // trigger ngOnInit through fixture.detectChanges()
    fixture.detectChanges();
    // call the flush function
    flush();
    // trigger a change detection cycle: fixture.detectChanges()
    fixture.detectChanges();

    // Assert
    // use fixture.debugElement and By to query for elements of selector tr[app-hacker]
    // assert that the length of that collection === length of mockHackers collection

    const hackerRows = fixture.debugElement.queryAll(By.css('tr[app-hacker]'));

    expect(hackerRows.length).toEqual(mockHackers.length);
  }));

  describe('click on hacker', () => {
    it('should navigate to the hacker/:id path', fakeAsync(() => {
      // Arrange:
      // spy on api.getHackers to return Promise.resolve({mockHackers})
      spyOn(api, 'getHackers').and.returnValue(Promise.resolve(mockHackers));
      // spy on router.navigate and call a fake empty function
      spyOn(router, 'navigate');

      // Act:
      // trigger ngOnInit through fixture.detectChanges()
      fixture.detectChanges();
      // call the flush function
      flush();
      // trigger a change detection cycle: fixture.detectChanges()
      fixture.detectChanges();

      // Assert
      // use fixture.debugElement and By to query for elements of selector tr[app-hacker]
      // get a specific element pertaining to a hacker
      const hackerPrice = fixture.debugElement.queryAll(By.css('tr[app-hacker]'))[0].nativeElement;
      // simulate a click on that row
      hackerPrice.click();

      // assert that router.navigate was called with the correct path: hackers/:id
      expect(router.navigate).toHaveBeenCalledWith(['/hackers/70dd6f38-fd14-4dfd-bd43-3b07586ce49e']);
    }));
  });
});
