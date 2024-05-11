import { renderHook } from '@testing-library/react';
import { ChangeEvent, act } from 'react';
import useCardNumbers from './useCardNumbers';

describe('useCardNumbers 테스트', () => {
  it.each([['0000000000000000']])('카드 번호의 초기값을 %s로 설정 시, 정확하게 설정되어야 한다.', (initialValue: string) => {
    const { result } = renderHook(() => useCardNumbers(initialValue));

    expect(result.current.number).toBe(initialValue);
  });

  it.each([['nakta'], ['/@[]'], ['한'], ['-']])('입력값이 숫자가 아닌 값(%s)이라면 입력을 제한한다.', (userInput: string) => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe('');
  });

  it.each([['visa']])('카드번호가 4로 시작한다면, 카드 브랜드를 "%s"로 설정한다.', (VISA: string) => {
    const userInput = '4000000000000000';

    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.brand).toBe(VISA);
  });

  it.each`
    userInput             | formatInput
    ${'4000000000000000'} | ${'4000-0000-0000-0000'}
  `('카드번호가 4로 시작한다면, $formatInput형태로 포맷팅된다.', ({ userInput, formatInput }: { [key: string]: string }) => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe(formatInput);
  });

  it.each([['5100000000000000'], ['5500000000000000']])('카드번호가 51~55 사이로 시작한다면, 카드 브랜드를 "mastercard"로 설정한다.', (userInput: string) => {
    const MASTERCARD = 'mastercard';

    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.brand).toBe(MASTERCARD);
  });

  it.each([['5000000000000000'], ['5600000000000000']])(
    '카드번호가 51~55 사이가 아니라면, 카드 브랜드를 "mastercard"로 설정하지 않는다.',
    (userInput: string) => {
      const MASTERCARD = 'mastercard';

      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.onChange({
          target: { value: userInput },
        } as ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.brand).not.toBe(MASTERCARD);
    },
  );

  it.each`
    userInput             | formatInput
    ${'5100000000000000'} | ${'5100-0000-0000-0000'}
    ${'5500000000000000'} | ${'5500-0000-0000-0000'}
  `('카드번호가 51~55로 시작한다면, $formatInput형태로 포맷팅된다.', ({ userInput, formatInput }: { [key: string]: string }) => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe(formatInput);
  });

  it.each([['36000000000000']])('카드번호가 36으로 시작한다면, 카드 브랜드를 "diners"로 설정한다.', (userInput: string) => {
    const DINERS = 'diners';

    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.brand).toBe(DINERS);
  });

  it.each`
    userInput           | formatInput
    ${'36000000000000'} | ${'3600-000000-0000'}
  `('카드번호가 36으로 시작한다면, $formatInput형태로 포맷팅된다.', ({ userInput, formatInput }: { [key: string]: string }) => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe(formatInput);
  });

  it.each([['340000000000000', '370000000000000']])('카드번호가 34, 37로 시작한다면, 카드 브랜드를 "amex"로 설정한다.', (userInput: string) => {
    const AMEX = 'amex';

    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.brand).toBe(AMEX);
  });

  it.each`
    userInput            | formatInput
    ${'340000000000000'} | ${'3400-000000-00000'}
    ${'370000000000000'} | ${'3700-000000-00000'}
  `('카드번호가 34, 37로 시작한다면, $formatInput형태로 포맷팅된다.', ({ userInput, formatInput }: { [key: string]: string }) => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe(formatInput);
  });

  it.each([['6221260000000000', '6229250000000000']])('카드번호가 622126~622925로 시작한다면, 카드 브랜드를 "unionpay"로 설정한다.', (userInput: string) => {
    const UNIONPAY = 'unionpay';

    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.brand).toBe(UNIONPAY);
  });

  it.each([['6221250000000000', '6229260000000000']])(
    '카드번호가 622126~622925로 시작하지 않는다면, 카드 브랜드를 "unionpay"로 설정하지 않는다.',
    (userInput: string) => {
      const UNIONPAY = 'unionpay';

      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.onChange({
          target: { value: userInput },
        } as ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.brand).not.toBe(UNIONPAY);
    },
  );

  it.each`
    userInput             | formatInput
    ${'6221260000000000'} | ${'6221-2600-0000-0000'}
    ${'6229250000000000'} | ${'6229-2500-0000-0000'}
  `('카드번호가 622126~622925로 시작한다면, $formatInput형태로 포맷팅된다.', ({ userInput, formatInput }: { [key: string]: string }) => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe(formatInput);
  });

  it.each([['6240000000000000', '6260000000000000']])('카드번호가 624~626으로 시작한다면, 카드 브랜드를 "unionpay"로 설정한다.', (userInput: string) => {
    const UNIONPAY = 'unionpay';

    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.brand).toBe(UNIONPAY);
  });

  it.each([['6230000000000000', '6270000000000000']])(
    '카드번호가 624~626으로 시작하지 않는다면, 카드 브랜드를 "unionpay"로 설정하지 않는다.',
    (userInput: string) => {
      const UNIONPAY = 'unionpay';

      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.onChange({
          target: { value: userInput },
        } as ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.brand).not.toBe(UNIONPAY);
    },
  );

  it.each`
    userInput             | formatInput
    ${'6240000000000000'} | ${'6240-0000-0000-0000'}
    ${'6250000000000000'} | ${'6250-0000-0000-0000'}
  `('카드번호가 624~626으로 시작한다면, $formatInput형태로 포맷팅된다.', ({ userInput, formatInput }: { [key: string]: string }) => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe(formatInput);
  });

  it.each([['6282000000000000', '6288000000000000']])('카드번호가 6282~6288로 시작한다면, 카드 브랜드를 "unionpay"로 설정한다.', (userInput: string) => {
    const UNIONPAY = 'unionpay';

    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.brand).toBe(UNIONPAY);
  });

  it.each([['6281000000000000', '6289000000000000']])(
    '카드번호가 6282~6288로 시작하지 않는다면, 카드 브랜드를 "unionpay"로 설정하지 않는다.',
    (userInput: string) => {
      const UNIONPAY = 'unionpay';

      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.onChange({
          target: { value: userInput },
        } as ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.brand).not.toBe(UNIONPAY);
    },
  );

  it.each`
    userInput             | formatInput
    ${'6282000000000000'} | ${'6282-0000-0000-0000'}
    ${'6288000000000000'} | ${'6288-0000-0000-0000'}
  `('카드번호가 6282~6288로 시작한다면, $formatInput형태로 포맷팅된다.', ({ userInput, formatInput }: { [key: string]: string }) => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe(formatInput);
  });
});
