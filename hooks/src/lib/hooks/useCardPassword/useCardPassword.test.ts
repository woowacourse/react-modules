import React from 'react';
import { renderHook } from '@testing-library/react';

import useCardPassword, { PASSWORD_DEFAULT_LENGTH } from './useCardPassword';
import { NUMBER_ERROR_MESSAGES } from '../../utils/validation/validation';

describe('useCardPassword 커스텀 훅 테스트', () => {
  it('올바른 카드 비밀번호를 입력하면 유효하다', () => {
    const { result } = renderHook(() => useCardPassword());

    React.act(() => result.current.handlePasswordChange('12'));

    expect(result.current.isValidPassword).toBe(true);
  });

  it('숫자 외의 값을 입력하면 유효하지 않다.', () => {
    const { result } = renderHook(() => useCardPassword());

    React.act(() => result.current.handlePasswordChange('ㄱ'));

    expect(result.current.isValidPassword).toBe(false);
  });

  it('숫자 외의 값을 입력하면 에러 메세지를 표시한다.', () => {
    const { result } = renderHook(() => useCardPassword());

    React.act(() => result.current.handlePasswordChange('ㄱ'));

    expect(result.current.isValidPassword).toBe(NUMBER_ERROR_MESSAGES.NOT_NUMBER);
  });

  it(`${PASSWORD_DEFAULT_LENGTH}자 미만의 카드 번호를 입력하면 유효하지 않다.`, () => {
    const { result } = renderHook(() => useCardPassword());

    React.act(() => result.current.handlePasswordChange('1'));

    expect(result.current.isValidPassword).toBe(false);
  });

  it(`${PASSWORD_DEFAULT_LENGTH}자 미만의 카드 번호를 입력하면 에러 메시지를 표시한다.`, () => {
    const { result } = renderHook(() => useCardPassword());

    React.act(() => result.current.handlePasswordChange('1'));

    expect(result.current.isValidPassword).toBe(NUMBER_ERROR_MESSAGES.MAX_LENGTH);
  });
});
