import isBeforeToday from '../../lib/utils/isBeforeToday';

describe('isBeforeToday Util 테스트', () => {
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayYear = today.getFullYear() - 2000;

  it('오늘이거나 오늘 날짜 이후의 값을 넣으면 false를 반환한다.', () => {
    expect(isBeforeToday(todayMonth, todayYear)).toBeFalsy();
    expect(isBeforeToday(todayMonth, todayYear + 1)).toBeFalsy();
  });

  it('오늘 날짜 이전의 값을 입력하면 true를 반환한다.', () => {
    expect(isBeforeToday(todayMonth, todayYear - 1)).toBeTruthy();
  });
});
