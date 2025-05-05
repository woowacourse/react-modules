import { renderHook, act } from '@testing-library/react';
import useCardNumbers from './useCardNumbers';
import { ChangeEvent } from 'react';
import {
  CARD_NUMBER_ERROR_TYPES,
  CardNumberErrorType,
  CardNumbersKey,
} from '../constants';
import { ValidationResult } from '../types';

interface RenderHookResult {
  current: RenderHookCurrent;
}

interface RenderHookCurrent {
  cardNumbers: Record<CardNumbersKey, string>;
  validationResults: Record<CardNumbersKey, ValidationResult>;
  validateCardNumbers: (value: string) => CardNumberErrorType | null;
  handleCardNumbersChange: (
    event: ChangeEvent<HTMLInputElement>,
    restrictChange?: boolean
  ) => void;
}

describe('useCardNumbers', () => {
  let result: RenderHookResult;

  beforeEach(() => {
    result = renderHook(() => useCardNumbers()).result;
  });

  it('이벤트 핸들러가 감지한 입력값이 hook 내부의 cardNumbers 상태(state)로 변경된다.', () => {
    act(() => {
      result.current.handleCardNumbersChange({
        target: { name: 'part1', value: '1234' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardNumbers.part1).toBe('1234');
  });

  it('입력값이 숫자가 아닐 때 notNumber 에러 타입을 반환한다.', () => {
    expect(result.current.validateCardNumbers('aaaa')).toBe(
      CARD_NUMBER_ERROR_TYPES.notNumber
    );
  });

  it('입력값이 네 자리가 아닐 때 invalidLength 에러 타입을 반환한다.', () => {
    expect(result.current.validateCardNumbers('12345')).toBe(
      CARD_NUMBER_ERROR_TYPES.invalidLength
    );
  });
});
