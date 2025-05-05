import { renderHook, act } from '@testing-library/react';
import useCvcNumberValidation from '.';

describe('useCvcNumberValidation', () => {
  it('useCvcNumberValidation 초기 noError 상태는 true이다.', () => {
    const initialNoError = true;
    const { result } = renderHook(() => useCvcNumberValidation());

    expect(result.current.noError).toEqual(initialNoError);
  });

  it('숫자가 아닌 값이 들어오면 에러메시지를 반환한다.', () => {
    const { result } = renderHook(() => useCvcNumberValidation());
    const event = {
      target: { value: 'hi' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(event);
    });

    expect(result.current.errorMessage).toBe('숫자만 입력 가능합니다.');
  });

  it('숫자만 입력하면 noError가 true이다.', () => {
    const { result } = renderHook(() => useCvcNumberValidation());
    const goodEvent = {
      target: { value: '123' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(goodEvent);
    });

    expect(result.current.noError).toBe(true);
  });

  it('숫자가 아닌 값이 들어오면 noError가 false이다.', () => {
    const { result } = renderHook(() => useCvcNumberValidation());
    const badEvent = {
      target: { value: '3h' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(badEvent);
    });

    expect(result.current.noError).toBe(false);
  });

  it('숫자가 아닌 입력 시 에러 메시지가 나타난다.', () => {
    const { result } = renderHook(() => useCvcNumberValidation());
    const badEvent = {
      target: { value: '3ab' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(badEvent);
    });
    expect(result.current.errorMessage).toBe('숫자만 입력 가능합니다.');
  });

  it('숫자 입력 시 에러 메시지가 사라진다.', () => {
    const { result } = renderHook(() => useCvcNumberValidation());
    const badEvent = {
      target: { value: '3ab' },
    } as React.ChangeEvent<HTMLInputElement>;
    const goodEvent = {
      target: { value: '123' },
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

  it('3자리가 아닌 숫자가 들어오면 에러메시지를 반환한다.', () => {
    const { result } = renderHook(() => useCvcNumberValidation());
    const shortEvent = {
      target: { value: '12' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(shortEvent);
    });

    expect(result.current.errorMessage).toBe(
      '올바른 길이의 숫자를 입력해주세요.'
    );
    expect(result.current.noError).toBe(false);
  });

  it('정상적인 3자리 숫자 입력 시 noError가 true가 된다.', () => {
    const { result } = renderHook(() => useCvcNumberValidation());
    const goodEvent = {
      target: { value: '123' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(goodEvent);
    });

    expect(result.current.noError).toBe(true);
    expect(result.current.errorMessage).toBe('');
  });
});
