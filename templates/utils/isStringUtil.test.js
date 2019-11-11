import { isStringUtil } from './isStringUtil'

describe('isStringUtil', () => {
  it('should return true if value is a string', () => {
    const testString = '...and thanks for all the fish';
    expect(true).toEqual(isStringUtil(testString));
  })
  it('should return false if value is not a string', () => {
    const testString = 42;
    expect(false).toEqual(isStringUtil(testString));
  })
});
