import { renderHook, act } from '@testing-library/react';

import useCardCVC, { CardCVCResult } from './useCardCVC';
import { ERROR_MESSAGE } from '../constants/errorMessage';

describe('useCardCVCValidate', () => {
  let result: { current: CardCVCResult };

  beforeEach(() => {
    const rendered = renderHook(() => useCardCVC());
    result = rendered.result;
  });

  it('숫자로 이루어진 3자리 값이 들어오면 카드 CVC가 입력되고 에러 메시지가 null이다.', () => {
    act(() => {
      result.current.handleCvcChange({
        target: { value: '123' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cvc).toBe('123');
    expect(result.current.errorMessage).toBeNull();
  });

  it('숫자로 이루어지지 않은 값이 들어오면 "숫자만 입력해주세요." 에러 메시지가 나온다.', () => {
    act(() => {
      result.current.handleCvcChange({
        target: { value: '12a' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorMessage).toBe(ERROR_MESSAGE.INVALID_NUMBER);
  });

  it('3자리 이상의 값이 들어오면 "3자리만 입력해주세요." 에러 메시지가 나온다.', () => {
    act(() => {
      result.current.handleCvcChange({
        target: { value: '1234' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorMessage).toBe(ERROR_MESSAGE.INVALID_CVC_LENGTH);
  });
});
