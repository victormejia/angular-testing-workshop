import { ApiService } from './api.service';
import { mockHackers } from '../helpers.spec';

describe('HackerService', () => {
  // declare a temporary variable to hold the ApiService instance

  // declare an httpSpy variable using the jasmine.createSpyObj method

  beforeEach(() => {
    // create a new instance of the ApiService
  });

  describe('getHackers', () => {
    xit('should return list of hackers', () => {

      // create mockResponse to return mockHackers
      const mockResponse = {
        toPromise: () => {
          return Promise.resolve({ json: () => mockHackers });
        }
      };

      // tell httpSpy.get to return the mockResponse when called

      // make a call to the getHackers method
      // listen for when the Promise resolves
      // once resolved, assert, and call done()
    });
  });

  describe('getHackerDetails', () => {

    xit('should return hacker details given hacker id', () => {

      // create mockResponse to return mockHackers[0]

      // get the id from that hacker

      // tell httpSpy.get to return the mockResponse when called


      // make a call to the getHackerDetails method
      // listen for when the Promise resolves
      // once resolved, assert, and call done()
    });
  });

});
