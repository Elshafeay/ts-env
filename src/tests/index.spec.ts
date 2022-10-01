import { calcAverage } from '../utils/common';

describe('Testing the calc average function', function() {

  it('returns the average for group of numbers', async function() {
    expect(calcAverage(1, 2, 3)).toEqual(2);
    expect(calcAverage(3, 4, 5, 6)).toEqual(4.5);
    expect(calcAverage(-1, 2, 4, -2)).toEqual(0.75);
    expect(calcAverage()).toEqual(0);
  });

});