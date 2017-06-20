import { ShortDatePipe } from './short-date.pipe.soln';

describe('ShortDatePipe: Solution', () => {
  let pipe: ShortDatePipe;

  beforeEach(() => {
    pipe = new ShortDatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should not throw error', () => {
    expect(() => {
      pipe.transform('1972-08-23T15:22:34.694Z');
    }).not.toThrow();
  });

  it('returned value should contain date format dd/mm/yyyy', () => {
    const isoString = '1960-06-01T11:01:12.720Z';
    expect(pipe.transform(isoString)).toContain('06/01/1960');
  });

  it('returned value should contain time hh:mm[am|pm]', () => {
    const isoString = '1960-06-01T11:01:12.720Z';
    expect(pipe.transform(isoString)).toContain('11:01am');
  });

  it('should convert ISO string to correct date format (am)', () => {
    const isoString = '1960-06-01T11:01:12.720Z';
    expect(pipe.transform(isoString)).toBe('06/01/1960, 11:01am');
  });

  it('should convert ISO string to correct date format (pm)', () => {
    const isoString = '1980-10-04T21:35:51.869Z';
    expect(pipe.transform(isoString)).toBe('10/04/1980, 09:35pm');
  });

});
