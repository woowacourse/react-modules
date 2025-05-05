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

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    act(() => {
      result.current.handleCardNumbersChange({
        target: { name: 'part1', value: '1234' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardNumbers.part1).toBe('1234');
  });

  it('입력값이 숫자가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    expect(result.current.validateCardNumbers('aaaa')).toBe(
      CARD_NUMBER_ERROR_TYPES.notNumber
    );
  });

  it('입력값이 네 자리가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    expect(result.current.validateCardNumbers('12345')).toBe(
      CARD_NUMBER_ERROR_TYPES.invalidLength
    );
  });
});
