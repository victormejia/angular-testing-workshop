import { NonNumericDirective } from './non-numeric.directive';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<input appNonNumeric type="text"/>
             <textarea appNonNumeric></textarea>`
})
class TestHostComponent {
}

describe('NonNumericDirective: Solution', () => {
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

  it('should allow regular text input for input elements', () => {
    const input = fixture.debugElement.query(By.css('input'));

    const event = { key: 'x', preventDefault: jasmine.createSpy('preventDefault') };
    input.triggerEventHandler('keydown', event);

    expect(event.preventDefault).not.toHaveBeenCalled();
  });

  it('should not allow numeric text input for input elements', () => {
    const input = fixture.debugElement.query(By.css('input'));

    const event = { key: '2', preventDefault: jasmine.createSpy('preventDefault') };
    input.triggerEventHandler('keydown', event);

    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('should allow regular text input for textarea elements', () => {
    const input = fixture.debugElement.query(By.css('textarea'));

    const event = { key: 'x', preventDefault: jasmine.createSpy('preventDefault') };
    input.triggerEventHandler('keydown', event);

    expect(event.preventDefault).not.toHaveBeenCalled();

  });

  it('should not allow numeric text input for textarea elements', () => {
    const input = fixture.debugElement.query(By.css('textarea'));

    const event = { key: '2', preventDefault: jasmine.createSpy('preventDefault') };
    input.triggerEventHandler('keydown', event);

    expect(event.preventDefault).toHaveBeenCalled();
  });

});
