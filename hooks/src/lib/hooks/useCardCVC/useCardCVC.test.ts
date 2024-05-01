import { renderHook, waitFor } from '@testing-library/react';
import useCardCVC, { VALID_CVC_NUMBER_LENGTH } from './useCardCVC';
import { NUMBER_ERROR_MESSAGES } from '../../utils/validation/validation';

describe('useCardCVC 커스텀 훅 테스트', () => {
  const { result } = renderHook(() => useCardCVC());

  it('올바른 CVC 번호를 입력하면 유효하다', () => {
    result.current.handleCVCNumberChange('123');

    waitFor(() => expect(result.current.isValidCVCNumber).toBe(true));
  });

  it('숫자 외의 값을 입력하면 유효하지 않다.', () => {
    result.current.handleCVCNumberChange('v');

    waitFor(() => expect(result.current.isValidCVCNumber).toBe(false));
  });

  it('숫자 외의 값을 입력하면 에러 메세지를 표시한다.', () => {
    result.current.handleCVCNumberChange('v');

    waitFor(() =>
      expect(result.current.cvcNumberErrorMessage).toBe(NUMBER_ERROR_MESSAGES.NOT_NUMBER)
    );
  });

  it('3자 미만의 CVC 번호를 입력하면 유효하지 않다.', () => {
    result.current.handleCVCNumberChange('1');

    waitFor(() => expect(result.current.isValidCVCNumber).toBe(false));
  });

  it('3자 미만의 CVC 번호를 입력하면 에러 메시지를 표시한다.', () => {
    result.current.handleCVCNumberChange('1');

    waitFor(() =>
      expect(result.current.cvcNumberErrorMessage).toBe(
        NUMBER_ERROR_MESSAGES.MAX_LENGTH(VALID_CVC_NUMBER_LENGTH)
      )
    );
  });
});
