import { renderHook, waitFor } from '@testing-library/react';

import { act } from 'react';
import useCardExpirationDate from './useCardExpirationDate';

describe('useCardExpirationDate custom hook', () => {
  const maxLength = 4;

  test('hook이 초기화될 때 주어진 initValue로 설정된다.', () => {
    const { result } = renderHook(() =>
      useCardExpirationDate('12/23', maxLength),
    );
    expect(result.current.value).toBe('12/23');
    expect(result.current.isCompleted).toBe(false);
    expect(result.current.errorMessage).toBe('');
  });

  test(`${maxLength}글자를 초과하는 값을 입력하면 "각 유효기간은 ${maxLength}글자 까지만 입력이 가능해요." 라는 에러 메시지를 반환한다.`, () => {
    const { result } = renderHook(() => useCardExpirationDate('', maxLength));
    act(() => {
      result.current.onChangeHandler({
        target: { value: '12345' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.value).toBe('');
    expect(result.current.errorMessage).toBe(
      `각 유효기간은 ${maxLength}글자 까지만 입력이 가능해요.`,
    );
  });

  test('숫자가 아닌 값을 입력하면 "유효기간은 숫자만 입력이 가능해요." 라는 에러 메시지를 반환한다.', () => {
    const { result } = renderHook(() => useCardExpirationDate('', maxLength));
    act(() => {
      result.current.onChangeHandler({
        target: { value: 'ab/cd' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.value).toBe('');
    expect(result.current.errorMessage).toBe(
      '유효기간은 숫자만 입력이 가능해요.',
    );
  });
  test(`MM/YY 형식이 아닌 값을 입력하면 "유효기간은 (MM/YY) 형식의 ${maxLength}글자로 입력해 주세요." 라는 에러 메시지를 반환한다.`, async () => {
    const { result } = renderHook(() => useCardExpirationDate('', maxLength));
    await act(async () => {
      await waitFor(() =>
        result.current.onChangeHandler({
          target: { value: '123' },
        } as React.ChangeEvent<HTMLInputElement>),
      );
      result.current.onBlurHandler();
    });
    expect(result.current.value).toBe('12/3');
    expect(result.current.errorMessage).toBe(
      `유효기간은 (MM/YY) 형식의 ${maxLength}글자로 입력해 주세요.`,
    );
  });

  test(`월의 값이 01~12 사이의 값이 아니면 "유효기간 월은 01~12 사이만 입력이 가능해요" 라는 에러 메시지를 반환한다.`, () => {
    const { result } = renderHook(() => useCardExpirationDate('', maxLength));
    act(() => {
      result.current.onChangeHandler({
        target: { value: '1325' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    act(() => {
      result.current.onBlurHandler();
    });
    expect(result.current.value).toBe('13/25');
    expect(result.current.errorMessage).toBe(
      '유효기간 월은 01~12 사이만 입력이 가능해요',
    );
  });

  test('유효기간이 현재 날짜보다 이전이면 "만료된 카드입니다." 라는 에러 메시지를 반환한다.', () => {
    const { result } = renderHook(() =>
      useCardExpirationDate('01/21', maxLength),
    );
    act(() => {
      result.current.onBlurHandler();
    });
    expect(result.current.value).toBe('01/21');
    expect(result.current.isCompleted).toBe(false);
    expect(result.current.errorMessage).toBe('만료된 카드입니다.');
  });

  test('유효기간 입력이 정확하고 현재보다 후일 때는 isCompleted를 true로 설정한다.', () => {
    const { result } = renderHook(() =>
      useCardExpirationDate('12/30', maxLength),
    );
    act(() => {
      result.current.onBlurHandler();
    });
    expect(result.current.value).toBe('12/30');
    expect(result.current.isCompleted).toBe(true);
    expect(result.current.errorMessage).toBe('');
  });
});
