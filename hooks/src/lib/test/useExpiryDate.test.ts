import { renderHook } from '@testing-library/react';
import React, { ChangeEvent, FocusEvent } from 'react';
import { ErrorStatus } from '../../types/errorStatus';
import useExpiryDate from '../useExpiryDate';
import { ExpiryDateErrorMessages } from '../../constants/error';

describe('useExpiryDate 훅 테스트', () => {
  it('초기값이 정확히 설정되어야 한다.', () => {
    const initialValues = {
      month: '12',
      year: '24',
    };
    const { result } = renderHook(() => useExpiryDate(initialValues));
    expect(result.current.values).toEqual(initialValues);
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const initialValues = {
      month: '12',
      year: '',
    };
    const { result } = renderHook(() => useExpiryDate(initialValues));
    const changeValues = {
      month: '12',
      year: '24',
    };

    React.act(() => {
      result.current.onChange({
        target: { value: '24', name: 'year' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.values).toEqual(changeValues);
  });

  it('숫자가 아닌 값이 들어오면 에러를 낸다.', () => {
    const initialValues = {
      month: '',
      year: '',
    };

    const { result } = renderHook(() => useExpiryDate(initialValues));

    React.act(() => {
      result.current.onChange({
        target: { value: 'ab', name: 'month' },
      } as ChangeEvent<HTMLInputElement>);
    });
    const expectedErrorMessage = {
      month: ExpiryDateErrorMessages[ErrorStatus.IS_NOT_NUMBER],
    };
    expect(result.current.errorMessages).toEqual(expectedErrorMessage);
  });

  it('월 입력은 2글자 초과면 에러를 낸다.', () => {
    const initialValues = {
      month: '',
      year: '',
    };

    const { result } = renderHook(() => useExpiryDate(initialValues));

    React.act(() => {
      result.current.onChange({
        target: { value: '123', name: 'month' },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage = {
      month: ExpiryDateErrorMessages[ErrorStatus.INVALID_LENGTH],
    };
    expect(result.current.errorMessages).toEqual(expectedErrorMessage);
  });

  it('월 입력은 1글자 미만(Blur)이면 에러를 낸다.', () => {
    const initialValues = {
      month: '',
      year: '',
    };
    const { result } = renderHook(() => useExpiryDate(initialValues));

    React.act(() => {
      result.current.onBlur({
        target: { value: '', name: 'month' },
      } as FocusEvent<HTMLInputElement>);
    });

    const expectedErrorMessage = {
      month: ExpiryDateErrorMessages[ErrorStatus.INVALID_LENGTH],
    };
    expect(result.current.errorMessages).toEqual(expectedErrorMessage);
  });

  it('유효하지 않은 월일 때 에러를 낸다.', () => {
    const initialValues = {
      month: '',
      year: '24',
    };

    const { result } = renderHook(() => useExpiryDate(initialValues));

    React.act(() => {
      result.current.onChange({
        target: { value: '13', name: 'month' },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage = {
      month: ExpiryDateErrorMessages[ErrorStatus.INVALID_MONTH],
    };
    expect(result.current.errorMessages).toEqual(expectedErrorMessage);
  });

  it('유효하지 않은 년일 때 에러를 낸다.', () => {
    const initialValues = {
      month: '12',
      year: '',
    };

    const { result } = renderHook(() => useExpiryDate(initialValues));

    React.act(() => {
      result.current.onChange({
        target: { value: '-2', name: 'year' },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage = {
      year: ExpiryDateErrorMessages[ErrorStatus.INVALID_YEAR],
    };

    expect(result.current.errorMessages).toEqual(expectedErrorMessage);
  });
});
