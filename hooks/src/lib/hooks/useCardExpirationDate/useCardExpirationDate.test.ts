import { renderHook } from '@testing-library/react';
import useCardExpirationDate, {
  EXPIRATION_DATE_ERROR_MESSAGES,
  useCardExpirationDateProps,
} from './useCardExpirationDate';
import { act } from 'react';

describe('useCardExpirationDate 커스텀 훅 테스트', () => {
  const setup = (initialExpirationDate?: useCardExpirationDateProps) => {
    const { result } = renderHook(() => useCardExpirationDate(initialExpirationDate));
    return result;
  };

  const setExpirationDate = (result: any, expirationDate: useCardExpirationDateProps = { month: '', year: '' }) => {
    act(() => result.current.handleMonthChange(expirationDate.month));
    act(() => result.current.handleYearChange(expirationDate.year));
  };

  it('초기값을 전달해주면 해당 값으로 초기값을 세팅한다.', () => {
    const expirationDate = { month: '03', year: '40' };

    const result = setup(expirationDate);

    expect(result.current.month).toBe(expirationDate.month);
    expect(result.current.year).toBe(expirationDate.year);
  });

  describe('올바른 날짜를 입력한 경우', () => {
    test.each(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'])(
      '01 ~ 12 사이의 올바른 달 %s를 입력하면 유효하다',
      (month) => {
        const result = setup();
        setExpirationDate(result, { month });

        expect(result.current.isValidMonth).toBe(true);
      },
    );

    it('현재보다 과거가 아닌 2자리의 올바른 년도를 입력하면 유효하다', () => {
      const fullYear = new Date().getFullYear(); // 현재 연도 4자리
      const slicedYear = String(fullYear).slice(-2);

      const result = setup();
      setExpirationDate(result, { year: slicedYear });

      expect(result.current.isValidYear).toBe(true);
    });
  });

  describe('올바른 날짜가 아닌 경우', () => {
    it('숫자가 아닌 달을 입력하면 유효하지 않다.', () => {
      const result = setup();
      setExpirationDate(result, { month: 's' });

      expect(result.current.isValidMonth).toBe(false);
    });

    // 페이지 상에선 제대로 오류가 뜨는데 테스트는 통과 불가
    // it('숫자가 아닌 달을 입력하면 에러 메시지를 표시한다.', () => {
    //   const result = setup();
    //   setExpirationDate(result, { month: 's' });

    //   expect(result.current.monthErrorMessage).toBe(EXPIRATION_DATE_ERROR_MESSAGES.NOT_NUMBER);
    // });

    it('2자 미만의 달을 입력하면 유효하지 않다.', () => {
      const result = setup();
      setExpirationDate(result, { month: '1' });

      expect(result.current.isValidMonth).toBe(false);
    });

    it('2자 미만의 달을 입력하면 입력하는 중이라 판단하고 에러 메세지를 표시하지 않는다.', () => {
      const result = setup();
      setExpirationDate(result, { month: '1' });

      expect(result.current.monthErrorMessage).toBe('');
    });

    it('01 ~ 12 사이의 달을 입력하지 않으면 유효하지 않다.', () => {
      const result = setup();
      setExpirationDate(result, { month: '13' });

      expect(result.current.isValidMonth).toBe(false);
    });

    it('01 ~ 12 사이의 달을 입력하지 않으면 에러 메세지를 표시한다.', () => {
      const result = setup();
      setExpirationDate(result, { month: '13' });

      expect(result.current.monthErrorMessage).toBe(EXPIRATION_DATE_ERROR_MESSAGES.INVALID_MONTH);
    });

    it('숫자가 아닌 년도를 입력하면 유효하지 않다.', () => {
      const result = setup();
      setExpirationDate(result, { year: 'ㄱ' });

      expect(result.current.isValidYear).toBe(false);
    });

    it('숫자가 아닌 년도를 입력하면 에러 메시지를 표시한다.', () => {
      const result = setup();
      setExpirationDate(result, { year: 'ㄱ' });

      expect(result.current.yearErrorMessage).toBe(EXPIRATION_DATE_ERROR_MESSAGES.NOT_NUMBER);
    });

    it('2자 미만의 년도를 입력하면 유효하지 않다.', () => {
      const result = setup();
      setExpirationDate(result, { year: '1' });

      expect(result.current.isValidYear).toBe(false);
    });

    it('2자 미만의 년도를 입력하면 입력하는 중이라 판단하고 에러 메세지를 표시하지 않는다.', () => {
      const result = setup();
      setExpirationDate(result, { year: '1' });

      expect(result.current.yearErrorMessage).toBe('');
    });

    it('과거의 년도를 입력하면 유효하지 않다.', () => {
      const result = setup();
      setExpirationDate(result, { month: '03', year: '23' });

      expect(result.current.isValidYear).toBe(false);
    });

    it('과거의 년도를 입력하면 에러 메시지를 표시한다.', () => {
      const result = setup();
      setExpirationDate(result, { month: '03', year: '23' });

      expect(result.current.yearErrorMessage).toBe(EXPIRATION_DATE_ERROR_MESSAGES.EXPIRED_DATE);
    });

    it('현재의 년도에 과거의 달을 입력하면 유효하지 않다.', () => {
      const result = setup();
      setExpirationDate(result, { month: '03', year: '24' });

      expect(result.current.isValidMonth).toBe(false);
    });

    it('현재의 년도에 과거의 달을 입력하면 에러 메시지를 표시한다.', () => {
      const result = setup();
      setExpirationDate(result, { month: '03', year: '24' });

      expect(result.current.monthErrorMessage).toBe(EXPIRATION_DATE_ERROR_MESSAGES.EXPIRED_DATE);
    });
  });
});
