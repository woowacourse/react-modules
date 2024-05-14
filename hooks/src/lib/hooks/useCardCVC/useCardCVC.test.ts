import { renderHook } from '@testing-library/react';
import useCardCVC, { VALID_CVC_NUMBER_LENGTH } from './useCardCVC';
import { NUMBER_ERROR_MESSAGES } from '../../utils/validation/validation';
import { act } from 'react';

describe('useCardCVC 커스텀 훅 테스트', () => {
  const setup = (initialCVCNumber?: string) => {
    const { result } = renderHook(() => useCardCVC({ initialCVCNumber }));
    return result;
  };

  const setCVCNumber = (result: any, cvcNumber: string) => {
    act(() => result.current.handleCVCNumberChange(cvcNumber));
  };

  it('초기값을 전달해주면 해당 값으로 초기값을 세팅한다.', () => {
    const cvcNumber = '123';

    const result = setup(cvcNumber);

    expect(result.current.cvcNumber).toBe(cvcNumber);
  });

  describe('3자의 올바른 CVC 번호를 입력한 경우', () => {
    it('3자의 올바른 CVC 번호를 입력하면 유효하다', () => {
      const result = setup();

      setCVCNumber(result, '123');

      expect(result.current.isValidCVCNumber).toBe(true);
    });

    it('3자의 올바른 CVC 번호를 입력하면 해당 값을 저장한다.', () => {
      const cvcNumber = '123';
      const result = setup();

      setCVCNumber(result, cvcNumber);

      expect(result.current.cvcNumber).toBe(cvcNumber);
    });
  });

  describe('숫자 외의 값을 입력하는 경우', () => {
    it('문자를 입력하면 유효하지 않다.', () => {
      const invalidCVCNumber = 'v';
      const result = setup();

      setCVCNumber(result, invalidCVCNumber);

      expect(result.current.isValidCVCNumber).toBe(false);
    });

    it('문자를 입력하면 에러 메세지를 표시한다.', () => {
      const invalidCVCNumber = 'v';
      const result = setup();

      setCVCNumber(result, invalidCVCNumber);

      expect(result.current.cvcNumberErrorMessage).toBe(NUMBER_ERROR_MESSAGES.NOT_NUMBER);
    });

    it('공백을 입력하면 유효하지 않다.', () => {
      const invalidCVCNumber = ' ';
      const result = setup();

      setCVCNumber(result, invalidCVCNumber);

      expect(result.current.isValidCVCNumber).toBe(false);
    });

    it('공백을 입력하면 에러 메세지를 표시한다.', () => {
      const invalidCVCNumber = ' ';
      const result = setup();

      setCVCNumber(result, invalidCVCNumber);

      expect(result.current.cvcNumberErrorMessage).toBe(NUMBER_ERROR_MESSAGES.NOT_NUMBER);
    });

    it('공백을 입력하면 갱신되지 않고 값이 유지된다.', () => {
      const invalidCVCNumber = ' ';
      const result = setup();

      setCVCNumber(result, invalidCVCNumber);

      expect(result.current.cvcNumber).toBe('');
    });
  });

  describe('필요 길이보다 적게 입력되었을 경우', () => {
    it('3자 미만의 CVC 번호를 입력하면 유효하지 않다.', () => {
      const cvcNumber = '1';
      const result = setup();

      setCVCNumber(result, cvcNumber);

      expect(result.current.isValidCVCNumber).toBe(false);
    });

    it('3자 미만의 CVC 번호를 입력하면 에러 메시지를 표시한다.', () => {
      const cvcNumber = '1';
      const result = setup();

      setCVCNumber(result, cvcNumber);

      expect(result.current.cvcNumberErrorMessage).toBe(NUMBER_ERROR_MESSAGES.MAX_LENGTH(VALID_CVC_NUMBER_LENGTH));
    });
  });
});
