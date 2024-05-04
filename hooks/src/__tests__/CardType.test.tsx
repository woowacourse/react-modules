import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import CardType from '../components/CardType';

describe('CardType', () => {
  it('초기 상태 확인', () => {
    render(<CardType />);

    const input = screen.getByTestId('card-type-input');
    const brand = screen.getByTestId('card-type-brand');

    expect(input).toBeInTheDocument();
    expect(brand).toHaveTextContent('etc');
  });

  describe('카드 번호 입력 시 브랜드 표시', () => {
    test.each(['4123', '4222', '4999'])('카드 번호가 4로 시작하면, visa를 표시한다.(입력값:"%s")', (inputValue) => {
      render(<CardType />);

      const input = screen.getByTestId('card-type-input');
      const brand = screen.getByTestId('card-type-brand');

      fireEvent.change(input, { target: { value: inputValue } });
      expect(brand).toHaveTextContent('visa');
    });
    test.each(['5111', '5222', '5333', '5444'])(
      '카드 번호가 51~54로 시작하면,  master를 표시한다.(입력값:"%s")',
      (inputValue) => {
        render(<CardType />);

        const input = screen.getByTestId('card-type-input');
        const brand = screen.getByTestId('card-type-brand');

        fireEvent.change(input, { target: { value: inputValue } });
        expect(brand).toHaveTextContent('master');
      },
    );

    test.each(['3444', '3777'])(
      '카드 번호가 34 또는 37로 시작하면,  american express를 표시한다.(입력값:"%s")',
      (inputValue) => {
        render(<CardType />);

        const input = screen.getByTestId('card-type-input');
        const brand = screen.getByTestId('card-type-brand');

        fireEvent.change(input, { target: { value: inputValue } });
        expect(brand).toHaveTextContent('american express');
      },
    );
  });

  describe('카드 타입에 맞닌 않은 카드 번호를 입력하면 "etc"를 표시한다.', () => {
    test.each(['3344', '3666,5555,2345'])(
      '카드 번호가 34 또는 37로 시작하면,  american express를 표시한다.(입력값:"%s")',
      (inputValue) => {
        render(<CardType />);

        const input = screen.getByTestId('card-type-input');
        const brand = screen.getByTestId('card-type-brand');

        fireEvent.change(input, { target: { value: inputValue } });
        expect(brand).toHaveTextContent('etc');
      },
    );
  });

  it('카드 번호 4자리 미만 입력 시 브랜드 표시가 없거나 변경되지 않는다.', () => {
    render(<CardType />);

    const input = screen.getByTestId('card-type-input');
    const brand = screen.getByTestId('card-type-brand');

    fireEvent.change(input, { target: { value: '414' } });
    expect(brand).toHaveTextContent('etc');
  });
});
