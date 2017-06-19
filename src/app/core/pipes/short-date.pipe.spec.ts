import { ShortDatePipe } from './short-date.pipe';

describe('ShortDatePipe', () => {
  it('create an instance', () => {
    const pipe = new ShortDatePipe();
    expect(pipe).toBeTruthy();
  });
});
