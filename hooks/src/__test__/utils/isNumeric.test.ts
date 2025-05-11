import isNumeric from '../../lib/utils/isNumeric';

describe('isNumeric Util 테스트', () => {
  it.each(['mingo', '-1', '0.5'])('숫자가 아닌 값(%s)이 들어오면 false를 반환한다.', (value) => {
    expect(isNumeric(value)).toBeFalsy();
  });

  it.each(['813', '05'])('숫자 값(%s)이 들어오면 true를 반환한다.', (value) => {
    expect(isNumeric(value)).toBeTruthy();
  });
});
