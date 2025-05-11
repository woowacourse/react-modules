import isNotOverMaxLength from '../../lib/utils/isNotOverMaxLength';

describe('isNotOverThanMax Util 테스트', () => {
  it.each(['mingo', '12345'])('최대 값보다 더 긴 값(%s)이 들어오면 false를 반환한다.', (value) => {
    expect(isNotOverMaxLength(value, 4)).toBeFalsy();
  });

  it.each(['813', 'hi!'])('최대 값보다 더 작은 값(%s)이 들어오면 true를 반환한다.', (value) => {
    expect(isNotOverMaxLength(value, 4)).toBeTruthy();
  });
});
