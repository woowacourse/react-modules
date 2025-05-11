import { renderHook, act } from '@testing-library/react';
import useCardNumbers from './useCardNumbers';
import { ChangeEvent, FocusEvent } from 'react';
import {
  CARD_NUMBER_ERROR_TYPES,
  NetworkType,
  ValidateCardNumbersResult,
} from '../constants';
import { ValidationResult } from '../types';

interface RenderHookResult {
  current: RenderHookCurrent;
}

interface RenderHookCurrent {
  cardNumbers: string;
  validationResults: ValidationResult;
  validateCardNumbersChange: (value: string) => ValidateCardNumbersResult;
  validateCardNumbersBlur: (value: string) => ValidateCardNumbersResult;
  handleCardNumbersChange: (
    event: ChangeEvent<HTMLInputElement>,
    restrictChange?: boolean
  ) => void;
  handleCardNumbersBlur: (event: FocusEvent<HTMLInputElement>) => void;
  network: string;
  formatNumbersByNetwork: (
    cardNumbers: string,
    network: NetworkType | ''
  ) => string;
}

describe('useCardNumbers', () => {
  let result: RenderHookResult;

  beforeEach(() => {
    result = renderHook(() => useCardNumbers()).result;
  });

  it('이벤트 핸들러가 감지한 입력값이 hook 내부의 cardNumbers 상태(state)로 변경된다.', () => {
    act(() => {
      result.current.handleCardNumbersChange({
        target: { value: '1234567890123456' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardNumbers).toBe('1234567890123456');
  });

  it('입력값이 숫자가 아닐 때 isValid로 false를 반환하고 notNumber 에러 타입을 반환한다.', () => {
    expect(result.current.validateCardNumbersChange('aaaa')).toEqual({
      isValid: false,
      errorType: CARD_NUMBER_ERROR_TYPES.notNumber,
    });
  });

  it('입력값이 유효한 길이가 아닐 때 isValid로 false를 반환하고 invalidLength 에러 타입을 반환한다.', () => {
    expect(
      result.current.validateCardNumbersChange('12345678901234567')
    ).toEqual({
      isValid: false,
      errorType: CARD_NUMBER_ERROR_TYPES.invalidLength,
    });
  });

  test.each(['1234567890123456', '341234567890123'])(
    '입력값이 유효한 길이인 일 때 isValid로 true를 반환한다.',
    (cardNumbers) => {
      expect(result.current.validateCardNumbersChange(cardNumbers)).toEqual({
        isValid: true,
      });
    }
  );
});
