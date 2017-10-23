import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusComponent } from './status.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: '<app-status [status]="appStatus" (newStatus)="updateStatus($event)"></app-status>'
})
class TestHostComponent {
  appStatus: string;
  updateStatus = jasmine.createSpy('updateStatusSpy');
}

describe('StatusComponent: Solution', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusComponent, TestHostComponent ]
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

  it('should set pulse color to green when input is "safe"', () => {
    testHost.appStatus = 'safe';

    fixture.detectChanges();
    const pulseEl: HTMLElement = fixture.debugElement.query(By.css('.pulse')).nativeElement;

    expect(pulseEl.classList).toContain('green');
  });

  it('should set pulse color to yellow when input is "warning"', () => {
    testHost.appStatus = 'warning';

    fixture.detectChanges();
    const pulseEl: HTMLElement = fixture.debugElement.query(By.css('.pulse')).nativeElement;

    expect(pulseEl.classList.toString().trim()).toBe('pulse yellow');
  });

  it('should set pulse color to red when input is "danger"', () => {
    testHost.appStatus = 'danger';

    fixture.detectChanges();
    const pulseEl: HTMLElement = fixture.debugElement.query(By.css('.pulse')).nativeElement;

    expect(pulseEl.classList.toString().trim()).toBe('pulse red');
  });

  it('should set pulse color to green when input is undefined', () => {
    fixture.detectChanges();

    const pulseEl: HTMLElement = fixture.debugElement.query(By.css('.pulse')).nativeElement;

    expect(pulseEl.classList).toContain('green');
  });
});
