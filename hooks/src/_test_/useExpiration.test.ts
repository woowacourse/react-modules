import { renderHook, act } from '@testing-library/react';
import useExpiration from '../lib/expiration/useExpiration';
import { ChangeEvent } from 'react';

describe('useExpiration 성공 케이스', () => {
  it('모든 입력값이 없을 경우, 에러 메시지는 비어 있어야 한다.', () => {
    const { result } = renderHook(() => useExpiration());

    act(() => {
      result.current.handleExpirationChange({ target: { value: '' } } as ChangeEvent<HTMLInputElement>, 'month');
      result.current.handleExpirationChange({ target: { value: '' } } as ChangeEvent<HTMLInputElement>, 'year');
    });

    expect(result.current.errorState.errorMessage).toBe('');
  });

  it('모든 입력값이 유효할 경우, 에러 메시지는 비어 있어야 한다.', () => {
    const { result } = renderHook(() => useExpiration());

    act(() => {
      result.current.handleExpirationChange({ target: { value: '11' } } as ChangeEvent<HTMLInputElement>, 'month');
      result.current.handleExpirationChange({ target: { value: '25' } } as ChangeEvent<HTMLInputElement>, 'year');
    });

    expect(result.current.errorState.errorMessage).toBe('');
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const { result } = renderHook(() => useExpiration());

    act(() => {
      result.current.handleExpirationChange({ target: { value: '11' } } as ChangeEvent<HTMLInputElement>, 'month');
      result.current.handleExpirationChange({ target: { value: '25' } } as ChangeEvent<HTMLInputElement>, 'year');
    });

    expect(result.current.expiration.month).toBe('11');
    expect(result.current.expiration.year).toBe('25');
  });
});

describe('useExpiration 실패 케이스', () => {
  it('숫자가 아닌 문자를 입력하면 "숫자만 입력하세요." 에러가 반환된다', () => {
    const { result } = renderHook(() => useExpiration());

    act(() => {
      result.current.handleExpirationChange({ target: { value: '11d' } } as ChangeEvent<HTMLInputElement>, 'month');
    });

    expect(result.current.errorState.errorMessage).toBe('숫자만 입력하세요.');
  });

  it('월 또는 연도가 2자리가 아니면 "2자리 숫자를 입력하세요." 에러가 반환된다', () => {
    const { result } = renderHook(() => useExpiration());

    act(() => {
      result.current.handleExpirationChange({ target: { value: '123' } } as ChangeEvent<HTMLInputElement>, 'month');
    });

    expect(result.current.errorState.errorMessage).toBe('2자리 숫자를 입력하세요.');
  });

  it('유효하지 않은 연도를 입력하면 "유효한 연도를 입력하세요." 에러가 반환된다', () => {
    const { result } = renderHook(() => useExpiration());
    act(() => {
      result.current.handleExpirationChange({ target: { value: '23' } } as ChangeEvent<HTMLInputElement>, 'year');
    });
    expect(result.current.errorState.errorMessage).toBe('유효한 연도를 입력하세요.');
  });

  it('유효한 형식이지만 현재보다 이전 날짜면 "지나지 않은 날짜를 입력해주세요." 에러가 반환된다', () => {
    const { result } = renderHook(() => useExpiration());
    act(() => {
      result.current.handleExpirationChange({ target: { value: '03' } } as ChangeEvent<HTMLInputElement>, 'month');
      result.current.handleExpirationChange({ target: { value: '25' } } as ChangeEvent<HTMLInputElement>, 'year');
    });
    expect(result.current.errorState.errorMessage).toBe('지나지 않은 날짜를 입력해주세요.');
  });
});
