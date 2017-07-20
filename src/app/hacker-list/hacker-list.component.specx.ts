import { async, ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';
import { HackerListComponent } from './hacker-list.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { ApiService } from '../core/services/api.service';
import { mockHackers } from '../core/helpers.spec';

describe('HackerListComponent: Solution', () => {
  let component: HackerListComponent;
  let fixture: ComponentFixture<HackerListComponent>;
  let api: ApiService;
  let router: Router;

  const mockApiService = {
    getHackers: () => { }
  };

  const mockRouter = {
    navigate: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerListComponent ],
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
    api = fixture.debugElement.injector.get(ApiService);
    router = fixture.debugElement.injector.get(Router);
  });

  describe('initial display', () => {

    it('makes a call to api.getHackers', () => {
      spyOn(api, 'getHackers').and.returnValue(Promise.resolve({}));

      fixture.detectChanges();

      expect(api.getHackers).toHaveBeenCalled();
    });

    it('sets initial data (using async)', async(() => {
      spyOn(api, 'getHackers').and.returnValue(Promise.resolve(mockHackers));

      fixture.detectChanges();

      fixture.whenStable()
        .then(() => {
          expect(component.hackers).toEqual(mockHackers);
        });

    }));

  //   it('sets initial data (using fakeAsync)', fakeAsync(() => {
  //     spyOn(api, 'getHackers').and.returnValue(Promise.resolve(mockHackers));

  //     fixture.detectChanges();

  //     flush();

  //     expect(component.hackers).toEqual(mockHackers);
  //   }));

  //   it('renders correct number of tbody rows', fakeAsync(() => {
  //     spyOn(api, 'getHackers').and.returnValue(Promise.resolve(mockHackers));

  //     fixture.detectChanges();
  //     flush();
  //     fixture.detectChanges();

  //     const hackerRows = fixture.debugElement.queryAll(By.css('tr[app-hacker]'));

  //     expect(hackerRows.length).toEqual(mockHackers.length);
  //   }));

  // });

  // describe('click on hacker', () => {
  //   it('should navigate to the hacker/:id path', fakeAsync(() => {
  //     spyOn(api, 'getHackers').and.returnValue(Promise.resolve(mockHackers));
  //     spyOn(router, 'navigate');

  //     fixture.detectChanges();
  //     flush();
  //     fixture.detectChanges();

  //     const hackerMonica = fixture.debugElement.queryAll(By.css('tr[app-hacker]'))[0].nativeElement;
  //     hackerMonica.click();

  //     expect(router.navigate).toHaveBeenCalledWith(['/hackers/70dd6f38-fd14-4dfd-bd43-3b07586ce49e']);
  //   }));
  // });

});
