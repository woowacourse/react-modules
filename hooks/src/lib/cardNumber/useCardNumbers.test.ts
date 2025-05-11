import { renderHook, act } from '@testing-library/react';
import useCardNumbers from './useCardNumbers';
import { ChangeEvent, FocusEvent } from 'react';
import {
  CARD_NUMBER_ERROR_TYPES,
  CARD_NUMBERS_LENGTH,
  DEFAULT_LENGTH,
  ValidateCardNumbersResult,
} from './constants';
import { ValidationResult } from '../types';
import { NetworkType } from '../utils/constants';

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
    preventInvalidTypo?: boolean
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

  it(`카드 브랜드가 없는 입력값이 유효한 길이인 ${CARD_NUMBERS_LENGTH}이(가) 아닐 때 isValid로 false를 반환하고 invalidLength 에러 타입을 반환한다.`, () => {
    expect(
      result.current.validateCardNumbersChange('12345678901234567')
    ).toEqual({
      isValid: false,
      errorType: CARD_NUMBER_ERROR_TYPES.invalidLength,
    });
  });

  it(`카드 브랜드가 없는 입력값이 유효한 길이인 ${DEFAULT_LENGTH}일 때 isValid로 true를 반환한다.`, () => {
    expect(
      result.current.validateCardNumbersChange('1234567890123456')
    ).toEqual({
      isValid: true,
    });
  });

  test.each([
    {
      network: 'visa',
      cardNumbers: '4234567890123456',
      length: CARD_NUMBERS_LENGTH['visa'],
    },
    {
      network: 'master',
      cardNumbers: '5134567890123456',
      length: CARD_NUMBERS_LENGTH['master'],
    },
    {
      network: 'diners',
      cardNumbers: '36123456789012',
      length: CARD_NUMBERS_LENGTH['diners'],
    },
    {
      network: 'amex',
      cardNumbers: '343456789012345',
      length: CARD_NUMBERS_LENGTH['amex'],
    },
    {
      network: 'union',
      cardNumbers: '6244567890123145',
      length: CARD_NUMBERS_LENGTH['union'],
    },
  ])(
    `카드 브랜드가 $network인 입력값이 유효한 길이 $length일 때, isValid로 true를 반환한다.`,
    ({ cardNumbers }) => {
      expect(result.current.validateCardNumbersChange(cardNumbers)).toEqual({
        isValid: true,
      });
    }
  );
});
