import checkIsInRangeString from './index';

describe('checkIsInRangeString에 대한 테스트 케이스', () => {
  const resultTrueTest = (target: string, from: string, to: string) => {
    const result = checkIsInRangeString(target, from, to);
    expect(result).toBe(true);
  };

  const resultFalseTest = (target: string, from: string, to: string) => {
    const result = checkIsInRangeString(target, from, to);
    expect(result).toBe(false);
  };
  test.each([
    ['abc', 'a', 'b'],
    ['123', '1', '2'],
    ['abb', 'ab', 'abc'],
    ['A', 'a', 'B'],
  ])('사이에 있는 값인 경우 true를 반환한다.', resultTrueTest);

  test.each([
    ['a', 'a', 'b'],
    ['b', 'a', 'b'],
    ['1', '1', '2'],
    ['2', '1', '2'],
    ['abc', 'ab', 'abc'],
    ['ab', 'ab', 'ab'],
  ])('경계값인 경우 true를 반환한다.', resultTrueTest);

  test.each([
    ['2', '1', '3'],
    ['abb', 'ab', 'abc'],
    ['abc', 'ab', 'abcd'],
    ['나', '가', '다'],
  ])('사전순으로 사이에 있는값인 경우 true를 반환한다.', resultTrueTest);

  test.each([
    ['1', 'b', 'c'],
    ['1', 'A', 'B'],
  ])('숫자는 다른 글자보다 앞선다.', resultFalseTest);

  test.each([
    ['a', 'b', 'c'],
    ['01', '1', '2'],
    ['a', 'ab', 'abc'],
  ])('사전 순으로 앞에 값인 경우 false를 반환한다.', resultFalseTest);

  test.each([
    ['ba', 'a', 'b'],
    ['21', '1', '2'],
    ['abcd', 'ab', 'abc'],
  ])('사전 순으로 뒤에 있는 값인 경우 false를 반환한다.', resultFalseTest);

  test.each([
    ['a', 'b', 'a'],
    ['1', '3', '2'],
    ['가', '다', '가'],
  ])('to가 from보다 앞에 위치할 경우 예외처리한다', (target, from, to) => {
    expect(() => checkIsInRangeString(target, from, to)).toThrow();
  });

  test.each([
    ['a', 'b', 'b'],
    ['1', '3', '3'],
    ['가', '다', '다'],
  ])('to가 from과 같을 경우 예외처리하지 않는다', (target, from, to) => {
    expect(() => checkIsInRangeString(target, from, to)).not.toThrow();
  });
});
