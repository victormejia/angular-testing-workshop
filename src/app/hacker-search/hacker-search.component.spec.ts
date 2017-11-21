import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HackerSearchComponent } from './hacker-search.component';

// Step 1: import Component and By classes
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

// Step 2: Import the ReactiveFormsModule from @angular/forms
import { ReactiveFormsModule } from '@angular/forms';

// Step 3: Declare the test host component (uncomment)

@Component({
  template: '<app-hacker-search (newSearch)="filterData($event)"></app-hacker-search>'
})
class TestHostComponent {
  filterData = jasmine.createSpy('filterDataSpy');
}

describe('HackerSearchComponent', () => {
  // Step 4: declare variables for the test host component and its fixture
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // Step 5: include ReactiveFormsModule in imports
      imports: [ReactiveFormsModule],
      // Step 6: include the TestHostComponent in the declarations
      declarations: [ HackerSearchComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Step 5: Create instance of TestHostComponent
    // and store in "fixture"
    fixture = TestBed.createComponent(TestHostComponent);

    // Step 6: Grab the test component's instance
    // from the fixture and store in "testHost"
    testHost = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(testHost).toBeTruthy();
  });

  xit('should set form control value on input', async(() => {
    // Arrange
    // trigger change detection cycle for component
    // use fixure.debugElement to query for the input (use .query and By.css)

    // Act
    // update value of input
    // dispatch event using "new Event('input')" as argument

    // Assert
    // get the component instance using the injector
    // const comp = fixture.debugElement
                  // .query(By.directive(HackerSearchComponent))
                  // .injector.get(HackerSearchComponent);

    // use the fixture.whenStable method and assert that
    // the value of the form control is what is expected
  }));

  it('should emit new search event', async(() => {
    // Arrange
    // trigger change detection cycle for component
    fixture.detectChanges();

    // use fixure.debugElement to query for the input
    // (use .query and By.css)
    const inputEl: HTMLInputElement = fixture.debugElement
      .query(By.css('input')).nativeElement;

    // Act
    // update value of input
    inputEl.value = 'Kathlyn';
    // dispatch event using "new Event('input')" as argument
    inputEl.dispatchEvent(new Event('input'));

    // Assert
    // use the fixture.whenStable method and assert that
    // the test host's "filterData" spy was called with the correct argument
    fixture.whenStable()
      .then(() => {
        expect(testHost.filterData).toHaveBeenCalled();
      });
  }));
});
