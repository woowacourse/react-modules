import { fireEvent, render, screen } from '@testing-library/react';

import { renderHook } from '@testing-library/react';
import useCardholderName from '.';

describe.only('useCardholderName에 대한 테스트 케이스', () => {
  const testWrongCase = (name: string) => {
    const { result } = renderHook(() => useCardholderName());

    render(<input data-testid='test' onChange={result.current.onChange} />);
    const input = screen.getByTestId('test');
    fireEvent.change(input, { target: { value: name } });

    expect(result.current.isValid).toBe(false);
    expect(result.current.errorMessage).not.toBeNull();
  };

  const testValidCase = (name: string) => {
    const { result } = renderHook(() => useCardholderName());

    render(<input data-testid='test' onChange={result.current.onChange} />);
    const input = screen.getByTestId('test');
    fireEvent.change(input, { target: { value: name } });

    expect(result.current.isValid).toBe(true);
    expect(result.current.errorMessage).toBeNull();
  };
  describe('유효성 검증에 실패하는 경우', () => {
    it.each(['한글', 'ㄱ', 'ㅏ'])(
      '한글(%s)을 입력한 경우 유효하지 않은 값으로 판단한다.',
      testWrongCase
    );

    it.each(['123', '1', '0', '-1'])(
      '숫자(%s)를 입력한 경우 유효하지 않은 값으로 판단한다.',
      testWrongCase
    );

    it.each(['abc', 'ABc', 'ABc', 'AbC', 'aB'])(
      '소문자(%s)를 입력한 경우 유효하지 않은 값으로 판단한다.',
      testWrongCase
    );

    it.each([' ABC ', 'ABC ', ' ABC'])(
      '양 끝에 공백이 포함된 경우(%s) 유효하지 않은 값으로 판단한다.',
      testWrongCase
    );

    it.each(['A B  C', 'A  B C'])(
      '사이 공백이 두 개 이상 포함된 경우 유효하지 않은 값으로 판단한다.',
      testWrongCase
    );
  });

  describe('유효성 검증에 성공하는 경우', () => {
    it.each(['ABC', 'A'])(
      '공백 없이 영어 대문자로만 이루어진 값을 입력한 경우 유효한 값으로 판단한다.',
      testValidCase
    );

    it.each(['A B C', 'A B'])(
      '사이 공백이 한 개 이하로 포함된 경우 유효한 값으로 판단한다.',
      testValidCase
    );
  });
});
