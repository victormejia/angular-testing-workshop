import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HackerDetailComponent } from './hacker-detail.component';

xdescribe('HackerDetailComponent', () => {
  let component: HackerDetailComponent;
  let fixture: ComponentFixture<HackerDetailComponent>;
  // declare element variable

  // create a mock ApiService and ActivatedRoute

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerDetailComponent ],
      // providers: use provide object literal for both
      // ApiService and ActivatedRoute
      providers: [],
      // use NO_ERRORS_SCHEMA since we are not rendering app-status
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerDetailComponent);
    component = fixture.componentInstance;
    // get the native element
  });

  it('should set the correct hacker name', async(() => {
    // Arrange: trigger ngOnInit through fixture.detectChanges()

    // Act: use fixture.whenStable()
    // once promise resolves, trigger change detection cycle
    // to display new data
    // get the .header element

    // Assert:
    // assert that its text content is the name for mockHackers[3]
  }));

  it('should set the correct hacker status message', async(() => {

    // Arrange: trigger ngOnInit through fixture.detectChanges()

    // Act: use fixture.whenStable()
    // once promise resolves, trigger change detection cycle
    // to display new data
    // get the .description element

    // Assert:
    // assert that its text content is the status message for mockHackers[3]
  }));
});
