import { NonNumericDirective } from './non-numeric.directive';
// impor testing utilities (TestBed, ComponentFixture, async)
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
// import Component
import { Component } from '@angular/core';
// import By
import { By } from '@angular/platform-browser';

// Create test host component (input and textarea elements)
@Component({
  template: `<input appNonNumeric type="text"/>
             <textarea appNonNumeric></textarea>`
})
class TestHostComponent {
}

describe('NonNumericDirective: Solution', () => {
  // configure TestBed in a beforeEach
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NonNumericDirective, TestHostComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  // retrieve fixture and the component instance
  it('should allow for regular text input', () => {
    const input = fixture.debugElement.query(By.css('input'));

    const event  = {
      key: 'x',
      preventDefault: jasmine.createSpy('preventDefault')
    };

    input.triggerEventHandler('keydown', event);

    expect(event.preventDefault).not.toHaveBeenCalled();
  });

  it('should now allow numeric input for input elements', () => {
    const input = fixture.debugElement.query(By.css('input'));

    const event = {
      key: '7',
      preventDefault: jasmine.createSpy('preventDefault')
    };

    input.triggerEventHandler('keydown', event);
    expect(event.preventDefault).toHaveBeenCalled()
  });

  it('should allow for regular text input for textarea elements', () => {
    const input = fixture.debugElement.query(By.css('textarea'));

    const event  = {
      key: 'x',
      preventDefault: jasmine.createSpy('preventDefault')
    };

    input.triggerEventHandler('keydown', event);

    expect(event.preventDefault).not.toHaveBeenCalled();
  });

  it('should not allow numeric input for textarea elements', () => {
    const input = fixture.debugElement.query(By.css('textarea'));

    const event = {
      key: '7',
      preventDefault: jasmine.createSpy('preventDefault')
    };

    input.triggerEventHandler('keydown', event);
    expect(event.preventDefault).toHaveBeenCalled()
  });
});
