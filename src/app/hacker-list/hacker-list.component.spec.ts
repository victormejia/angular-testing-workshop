import { async, ComponentFixture, TestBed, fakeAsync, tick  } from '@angular/core/testing';
import { HackerListComponent } from './hacker-list.component';

// import the NO_ERRORS_SCHEMA

// import the Router

// import the By testing utiltity

// import the ApiService

// import mockHackers from core/helpers.spec.ts

xdescribe('HackerListComponent', () => {
  let component: HackerListComponent;
  let fixture: ComponentFixture<HackerListComponent>;

  // reference to api and router
  // let api: ApiService;
  // let router: Router;

  // create a mock api service (empty getHackers method)

  // create a mock router (empty navigate method)

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerListComponent ],
      // providers: use provide object literal for both
      // ApiService and Router
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerListComponent);
    component = fixture.componentInstance;
    // delete the following line as to not trigger ngOnInit()
    fixture.detectChanges();

    // get the ApiService and Router instance from the component's
    // injector (fixture.debugElement.injector)
  });

  describe('initial display', () => {
    xit('makes a call to api.getHackers', () => {
      // Arrange: spy on api.getHackers to return Promise.resolve({})

      // Act: trigger ngOnInit through fixture.detectChanges()

      // Assert: assert that api.getHackers gets called

    });

    xit('sets initial data (using async)', async(() => {
      // Arrange: spy on api.getHackers to return Promise.resolve({mockHackers})

      // Act: trigger ngOnInit through fixture.detectChanges()

      // Assert: use the fixture's whenStable() method to assert that component.hackers is equal to mockHackers

    }));

    xit('sets initial data (using fakeAsync)', fakeAsync(() => {
      // Arrange: spy on api.getHackers to return Promise.resolve({mockHackers})

      // Act: trigger ngOnInit through fixture.detectChanges()
      // call the flush function

      // Assert: component.hackers is equal to mockHackers
    }));

  });

  xit('renders correct number of tbody rows', fakeAsync(() => {
    // Arrange: spy on api.getHackers to return Promise.resolve({mockHackers})

    // Act:
    // trigger ngOnInit through fixture.detectChanges()
    // call the flush function
    // trigger a change detection cycle: fixture.detectChanges()

    // Assert
    // use fixture.debugElement and By to query for elements of selector tr[app-hacker]
    // assert that the length of that collection === length of mockHackers collection
  }));

  describe('click on hacker', () => {
    it('should navigate to the hacker/:id path', fakeAsync(() => {
      // Arrange:
      // spy on api.getHackers to return Promise.resolve({mockHackers})
      // spy on router.navigate and call a fake empty function

      // Act:
      // rigger ngOnInit through fixture.detectChanges()
      // call the flush function
      // trigger a change detection cycle: fixture.detectChanges()

      // Assert
      // use fixture.debugElement and By to query for elements of selector tr[app-hacker]
      // get a specific element pertaining to a hacker
      // simulate a click on that row
      // assert that router.navigate was called with the correct path: hackers/:id
    }));
  });
});
