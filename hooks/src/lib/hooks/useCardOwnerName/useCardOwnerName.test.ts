import React from 'react';
import { renderHook } from '@testing-library/react';
import useCardOwnerName, { OWNER_NAME_ERROR_MESSAGES } from './useCardOwnerName';

describe('useCardOwnerName 커스텀 훅 테스트', () => {
  it('올바른 사용자 명을 입력하면 유효하다', () => {
    const { result } = renderHook(() => useCardOwnerName());

    React.act(() => result.current.handleOwnerNameChange('PARK PARK'));

    expect(result.current.isValidOwnerName).toBe(true);
  });

  it('영어 외 다른 문자를 입력하면 유효하지 않다.', () => {
    const { result } = renderHook(() => useCardOwnerName());

    React.act(() => result.current.handleOwnerNameChange('PARK 빡'));

    expect(result.current.isValidOwnerName).toBe(false);
  });

  it('영어 외 다른 문자를 입력하면 에러 메세지를 표시한다.', () => {
    const { result } = renderHook(() => useCardOwnerName());

    React.act(() => result.current.handleOwnerNameChange('PARK 빡'));

    expect(result.current.ownerNameErrorMessage).toBe(OWNER_NAME_ERROR_MESSAGES.NOT_ENG);
  });

  it('공백을 연속으로 입력하면 유효하지 않다.', () => {
    const { result } = renderHook(() => useCardOwnerName());

    React.act(() => result.current.handleOwnerNameChange('PA   SLY'));

    expect(result.current.isValidOwnerName).toBe(false);
  });

  it('공백을 연속으로 입력하면 에러 메세지를 표시한다.', () => {
    const { result } = renderHook(() => useCardOwnerName());

    React.act(() => result.current.handleOwnerNameChange('PA   SLY'));

    expect(result.current.ownerNameErrorMessage).toBe(OWNER_NAME_ERROR_MESSAGES.EXCESSIVE_WHITE_SPACE);
  });
});
