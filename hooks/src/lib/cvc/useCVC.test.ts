import { act, renderHook } from '@testing-library/react';
import { CVC_ERROR_TYPES } from '../config';
import useCVC from './useCVC';

describe('useCVC', () => {
  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const { result } = renderHook(() => useCVC());

    act(() => {
      result.current.handleCVCChange('123');
    });

    expect(result.current.CVC).toBe('123');
  });

  describe('getCVCValidationError', () => {
    const invalidCases = [
      {
        name: '숫자가 아닌 값',
        input: 'aaa',
        expected: CVC_ERROR_TYPES.notNumber,
      },
      {
        name: '세 자리가 넘는 값',
        input: '1234',
        expected: CVC_ERROR_TYPES.invalidLength,
      },
    ];

    it.each(invalidCases)(
      '%s 상황일 때 isValid로 false를 반환하고 에러 메시지를 반환해야 한다.',
      ({ input, expected }) => {
        const { result } = renderHook(() => useCVC());

        const error = result.current.getCVCValidationError(input);
        expect(error).toBe(expected);
      }
    );
  });
});
