import getRangeStringList from '../../lib/utils/getRangeStringList';

describe('getRangeStringList Util 테스트', () => {
  it('시작값과 끝값을 제공하면 사이의 숫자를 문자열로 바꿔서 배열로 반환한다.', () => {
    expect(getRangeStringList(1, 4)).toEqual(['1', '2', '3', '4']);
  });

  it('시작값이 끝값보다 큰 경우 빈 배열을 반환한다.', () => {
    expect(getRangeStringList(4, 1)).toEqual([]);
  });

  it('시작값과 끝값이 같은 경우 해당 값만 포함된 배열을 반환한다.', () => {
    expect(getRangeStringList(3, 3)).toEqual(['3']);
  });

  it('음수 범위도 정상적으로 처리한다.', () => {
    expect(getRangeStringList(-3, 0)).toEqual(['-3', '-2', '-1', '0']);
  });
});
