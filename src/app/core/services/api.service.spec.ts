import { ApiService } from './api.service';
import { mockHackers } from '../helpers.spec';

describe('HackerService', () => {
  // declare a temporary variable to hold the ApiService instance
  let service: ApiService;

  // declare an httpSpy variable using the jasmine.createSpyObj method
  const httpSpy = jasmine.createSpyObj('http', ['get']);

  beforeEach(() => {
    // create a new instance of the ApiService
    service = new ApiService(httpSpy);
  });

  describe('getHackers', () => {
    it('should return list of hackers', (done) => {

      // create mockResponse to return mockHackers
      const mockResponse = {
        toPromise: () => {
          return Promise.resolve({ json: () => mockHackers });
        }
      };

      // tell httpSpy.get to return the mockResponse when called
      httpSpy.get.and.returnValue(mockResponse);

      // make a call to the getHackers method
      service.getHackers()
        .then(() => {
          expect(httpSpy.get).toHaveBeenCalledWith('/api/hackers?q=');
          done();
        })
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
