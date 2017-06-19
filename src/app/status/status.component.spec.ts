import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusComponent } from './status.component';

// Step 1: import Component and By classes


// Step 2: declare test host component


describe('StatusComponent', () => {
  // Step 3: replace the following with TestHostComponent
  // let testHost: TestHostComponent;
  // let fixture: ComponentFixture<TestHostComponent>;
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // Step 4: include the TestHostComponent in the declarations
      declarations: [ StatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Step 5: Create instance of TestHostComponent
    fixture = TestBed.createComponent(StatusComponent);

    // Step 6: Grab the test component's instance from the fixture
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  xit('should set pulse color to green when input is "safe"', () => {
    // Arrange

    // Act

    // Assert
  });

  xit('should set pulse color to yellow when input is "warning"', () => {
    // Arrange

    // Act

    // Assert
  });

  xit('should set pulse color to red when input is "danger"', () => {
    // Arrange

    // Act

    // Assert
  });

  xit('should set pulse color to green when input is undefined', () => {
    // Arrange

    // Act

    // Assert
  });

  xit('should output a new message when clicked', () => {
    // Arrange

    // Act

    // Assert
  });
});
