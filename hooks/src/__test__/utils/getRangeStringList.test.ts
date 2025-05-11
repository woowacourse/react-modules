import getRangeStringList from '../../lib/utils/getRangeStringList';

describe('getRangeStringList Util 테스트', () => {
  it('시작값과 끝값을 제공하면 사이의 숫자를 문자열로 바꿔서 배열로 반환한다.', () => {
    expect(getRangeStringList(1, 4)).toEqual(['1', '2', '3', '4']);
  });
});
