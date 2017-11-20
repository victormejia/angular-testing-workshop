import { ApiService } from './api.service';
import { mockHackers } from '../helpers.spec';

describe('ApiService: Solution', () => {
  let service: ApiService;
  const httpSpy = jasmine.createSpyObj('http', ['get']);

  beforeEach(() => {
    service = new ApiService(httpSpy);
  });

  describe('getHackers', () => {

    it('should return list of hackers', (done) => {
      const mockResponse = {
        toPromise: () => {
          return Promise.resolve({ json: () => mockHackers });
        }
      };

      httpSpy.get.and.returnValue(mockResponse);

      service.getHackers()
        .then(data => {
          expect(httpSpy.get).toHaveBeenCalledWith('/api/hackers?q=');
          expect(data).toEqual(mockHackers);
          done();
        });
    });
  });

  describe('getHackerDetails', () => {

    it('should return hacker details given hacker id', (done) => {
      const mockResponse = {
        toPromise: () => {
          return Promise.resolve({ json: () => mockHackers[0]});
        }
      };

      const id = mockHackers[0].id;

      httpSpy.get.and.returnValue(mockResponse);

      service.getHackerDetails(id)
        .then(data => {
          expect(httpSpy.get).toHaveBeenCalledWith(`/api/hackers/${id}`);
          expect(data).toEqual(mockHackers[0]);
          done();
        });
    });

  });

});
