import { renderHook, act } from '@testing-library/react';
import useCardNumberValidation from '.';

describe('useCardNumberValidation', () => {
  it('useCardNumberValidation의 초기 noError 상태는 true이다.', () => {
    const initialNoError = true;
    const { result } = renderHook(() => useCardNumberValidation());

    expect(result.current.noError).toEqual(initialNoError);
  });

  it('숫자가 아닌 값이 들어오면 에러메시지를 반환한다.', () => {
    const { result } = renderHook(() => useCardNumberValidation());
    const event = {
      target: { value: 'hi' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(event);
    });

    expect(result.current.errorMessage).toBe('숫자만 입력 가능합니다.');
  });

  it('숫자만 입력하면 noError가 true이다.', () => {
    const { result } = renderHook(() => useCardNumberValidation());
    const event = {
      target: { value: '1234' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(event);
      result.current.onChange(1)(event);
      result.current.onChange(2)(event);
      result.current.onChange(3)(event);
    });

    expect(result.current.noError).toBe(true);
  });

  it('숫자가 아닌 값이 들어오면 noError가 false이다.', () => {
    const { result } = renderHook(() => useCardNumberValidation());
    const goodEvent = {
      target: { value: '1234' },
    } as React.ChangeEvent<HTMLInputElement>;
    const badEvent = {
      target: { value: 'hi' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(goodEvent);
      result.current.onChange(1)(goodEvent);
      result.current.onChange(2)(badEvent);
      result.current.onChange(3)(goodEvent);
    });

    expect(result.current.noError).toBe(false);
  });

  it('숫자 입력 시 에러 메시지가 사라진다.', () => {
    const { result } = renderHook(() => useCardNumberValidation());
    const badEvent = {
      target: { value: '3ab' },
    } as React.ChangeEvent<HTMLInputElement>;
    const goodEvent = {
      target: { value: '1234' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(badEvent);
    });
    expect(result.current.errorMessage).toBe('숫자만 입력 가능합니다.');

    act(() => {
      result.current.onChange(0)(goodEvent);
    });
    expect(result.current.errorMessage).toBe('');
  });
});
