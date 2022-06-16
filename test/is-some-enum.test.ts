import { isSomeEnum } from '../src';

enum ETestEnum {
  A = 'A',
  B = 'B',
  C = 'C',
}

describe('isSomeEnum function', () => {
  it('should return true if token is a member of enum', () => {
    const isSomeEnumTest = isSomeEnum(ETestEnum);

    expect(isSomeEnumTest('A')).toBe(true);
    expect(isSomeEnumTest('B')).toBe(true);
    expect(isSomeEnumTest('C')).toBe(true);
  });

  it('should return false if token is not a member of enum', () => {
    const isSomeEnumTest = isSomeEnum(ETestEnum);

    expect(isSomeEnumTest('D')).toBe(false);
    expect(isSomeEnumTest('E')).toBe(false);
    expect(isSomeEnumTest('F')).toBe(false);
  });
});
