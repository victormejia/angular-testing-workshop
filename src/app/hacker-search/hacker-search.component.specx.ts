import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HackerSearchComponent } from './hacker-search.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  template: '<app-hacker-search (newSearch)="filterData($event)"></app-hacker-search>'
})
class TestHostComponent {
  filterData = jasmine.createSpy('filterDataSpy');
}

describe('HackerSearchComponent: Solution', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ HackerSearchComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(testHost).toBeTruthy();
  });

  it('should set form control value on input', async(() => {
    fixture.detectChanges();

    const inputEl: HTMLInputElement = fixture.debugElement
                                        .query(By.css('input')).nativeElement;

    inputEl.value = 'Kathlyn';
    inputEl.dispatchEvent(new Event('input'));

    const comp = fixture.debugElement
                  .query(By.directive(HackerSearchComponent))
                  .injector.get(HackerSearchComponent);

    fixture.whenStable()
      .then(() => {
        expect(comp.searchTerm.value).toEqual('Kathlyn');
      });
  }));

  it('should emit new search event', async(() => {
    fixture.detectChanges();

    const inputEl: HTMLInputElement = fixture.debugElement
                                        .query(By.css('input')).nativeElement;
    inputEl.value = 'Kathlyn';
    inputEl.dispatchEvent(new Event('input'));

    fixture.whenStable()
      .then(() => {
        expect(testHost.filterData).toHaveBeenCalledWith('Kathlyn');
      });
  }));

});
