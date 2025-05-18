import { renderHook, act } from '@testing-library/react';
import usePassword from '.';

describe('usePassword', () => {
  it('초기 noError 상태는 true이다.', () => {
    const { result } = renderHook(() => usePassword());

    expect(result.current.noError).toBe(true);
  });

  it('숫자가 아닌 값이 들어오면 에러메시지를 반환한다.', () => {
    const { result } = renderHook(() => usePassword());
    const badEvent = {
      target: { value: 'hi' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(badEvent);
    });

    expect(result.current.errorMessage).toBe('숫자만 입력 가능합니다.');
    expect(result.current.noError).toBe(false);
  });

  it('숫자만 입력하면 noError가 true이다.', () => {
    const { result } = renderHook(() => usePassword());
    const goodEvent = {
      target: { value: '12' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(goodEvent);
    });

    expect(result.current.noError).toBe(true);
    expect(result.current.errorMessage).toBe('');
  });

  it('숫자가 아닌 입력 시 에러 메시지가 나타난다.', () => {
    const { result } = renderHook(() => usePassword());
    const badEvent = {
      target: { value: '1a' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(badEvent);
    });

    expect(result.current.errorMessage).toBe('숫자만 입력 가능합니다.');
  });

  it('숫자 입력 시 에러 메시지가 사라진다.', () => {
    const { result } = renderHook(() => usePassword());
    const badEvent = {
      target: { value: 'abc' },
    } as React.ChangeEvent<HTMLInputElement>;
    const goodEvent = {
      target: { value: '45' },
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
    const { result } = renderHook(() => usePassword());
    const shortEvent = {
      target: { value: '1' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(shortEvent);
    });

    expect(result.current.errorMessage).toBe(
      '올바른 길이의 숫자를 입력해주세요.'
    );
    expect(result.current.noError).toBe(false);
  });

  it('정상적인 2자리 숫자 입력 시 noError가 true가 된다.', () => {
    const { result } = renderHook(() => usePassword());
    const goodEvent = {
      target: { value: '13' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(goodEvent);
    });

    expect(result.current.noError).toBe(true);
    expect(result.current.errorMessage).toBe('');
  });
});
