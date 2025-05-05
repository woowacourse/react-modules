import { act, renderHook } from '@testing-library/react';
import { useSingleCardInput } from '../lib/hooks/useSingleCardInput/useSingleCardInput';

describe('카드 입력값 검증 테스트', () => {
  const testCases = [
    { name: 'CVC', validLength: 3 },
    { name: 'PassWord', validLength: 2 },
  ];

  const createMockEvent = (value: string): React.ChangeEvent<HTMLInputElement> =>
    ({
      target: { value },
    } as React.ChangeEvent<HTMLInputElement>);

  const runInputTest = (validLength: number, inputValue: string, expectedErrorMessage: string) => {
    const { result } = renderHook(() => useSingleCardInput(validLength));

    act(() => {
      result.current.handleSingleCardInputChange(createMockEvent(inputValue));
    });

    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  };

  test.each(testCases)(
    '$name: 유효한 길이($validLength)의 숫자를 입력하면 에러 메시지가 없어야 한다.',
    ({ validLength }) => {
      const validInput = '0'.repeat(validLength);
      runInputTest(validLength, validInput, '');
    }
  );

  test.each(testCases)(
    '$name: 숫자가 아닌 값을 입력하면 숫자 입력 에러 메시지를 반환해야 한다.',
    ({ validLength }) => {
      runInputTest(validLength, '가나'.padEnd(validLength, '가'), '숫자(0~9)만 입력 가능합니다.');
    }
  );

  test.each(testCases)(
    '$name: 길이가 유효 길이($validLength)보다 짧으면 길이 에러 메시지를 반환해야 한다.',
    ({ validLength }) => {
      const shortInput = '1'.repeat(validLength - 1);
      runInputTest(validLength, shortInput, `숫자 ${validLength}자리를 정확히 입력해주세요.`);
    }
  );

  test.each(testCases)(
    '$name: 길이가 유효 길이($validLength)보다 길면 길이 에러 메시지를 반환해야 한다.',
    ({ validLength }) => {
      const longInput = '1'.repeat(validLength + 1);
      runInputTest(validLength, longInput, `숫자 ${validLength}자리를 정확히 입력해주세요.`);
    }
  );
});
