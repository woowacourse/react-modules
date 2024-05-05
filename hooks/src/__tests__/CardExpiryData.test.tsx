import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import CardExpiryDate from '../components/CardExpiryDate';
import { getNowYearAndMonth } from '../lib/utils';

describe('CardExpiryDate', () => {
  const currentDate = getNowYearAndMonth();
  it('초기 상태 확인', () => {
    render(<CardExpiryDate />);
    const monthInput = screen.getByTestId('card-expiry-date-month');
    const yearInput = screen.getByTestId('card-expiry-date-year');
    const errorMessage = screen.getByTestId('card-expiry-date-error');

    expect(monthInput).toBeInTheDocument();
    expect(yearInput).toBeInTheDocument();

    expect(errorMessage).toBeInTheDocument();
  });

  describe('달에 대한 입력 테스트', () => {
    test.each(['%!', '12.1', '하나둘', 'one'])(
      '달에는 숫자만 입력할 수 있으며, 숫자 외의 문자를 입력하면 오류 메세지가 표시된다.(입력값:%s)',
      (invalidInput) => {
        render(<CardExpiryDate />);

        const monthInput = screen.getByTestId('card-expiry-date-month');

        fireEvent.change(monthInput, { target: { value: invalidInput } });

        expect(monthInput).toHaveValue('');

        const errorMessage = screen.getByTestId('card-expiry-date-error');
        expect(errorMessage).toHaveTextContent('숫자를 입력해 주세요.');
      },
    );

    test.each(['0', '13'])(
      '달은 1-12까지의 숫자외의 숫자를 입력하면 오류 메세지를 표시한다.(입력값:%s)',
      (invalidInput) => {
        render(<CardExpiryDate />);

        const monthInput = screen.getByTestId('card-expiry-date-month');

        fireEvent.change(monthInput, { target: { value: invalidInput } });
        fireEvent.blur(monthInput);

        const errorMessage = screen.getByTestId('card-expiry-date-error');
        expect(errorMessage).toHaveTextContent('유효하지 않은 달이에요.');
      },
    );
    it('달은 2자리까지 입력가능하며, 3자리 이상이면 오류 메세지를 표시한다.(입력값:%s)', () => {
      render(<CardExpiryDate />);

      const monthInput = screen.getByTestId('card-expiry-date-month');

      fireEvent.change(monthInput, { target: { value: '122' } });

      const errorMessage = screen.getByTestId('card-expiry-date-error');
      expect(errorMessage).toHaveTextContent('2자리 숫자만 입력 가능해요');
    });
  });
  describe('연도에 대한 입력 테스트', () => {
    test.each(['%!', '12.1', '하나둘', 'one'])(
      '연도에는 숫자만 입력할 수 있으며, 숫자 외의 문자를 입력하면 오류 메세지가 표시된다.(입력값:%s)',
      (invalidInput) => {
        render(<CardExpiryDate />);

        const yearInput = screen.getByTestId('card-expiry-date-year');

        fireEvent.change(yearInput, { target: { value: invalidInput } });

        expect(yearInput).toHaveValue('');

        const errorMessage = screen.getByTestId('card-expiry-date-error');
        expect(errorMessage).toHaveTextContent('숫자를 입력해 주세요.');
      },
    );

    test.each([`${currentDate.year - 1}`, `${currentDate.year + 4}`])(
      '입력 가능한 연도는 올해 부터 maxYearsFromNow인 3년안의 있는 연도이며 (해당 props가 없으면 기본값(5)으로 계산된다.) 이를 어길 시 오류 메세지를 표시한다.(입력값:%s)',
      (invalidInput) => {
        render(<CardExpiryDate />);

        const yearInput = screen.getByTestId('card-expiry-date-year');

        fireEvent.change(yearInput, { target: { value: invalidInput } });
        fireEvent.blur(yearInput);

        const errorMessage = screen.getByTestId('card-expiry-date-error');
        expect(errorMessage).toHaveTextContent('유효하지 않은 연도에요.');
      },
    );
    it('연도는 2자리까지 입력가능하며, 3자리 이상이면 오류 메세지를 표시한다.(입력값:%s)', () => {
      render(<CardExpiryDate />);

      const yearInput = screen.getByTestId('card-expiry-date-year');

      fireEvent.change(yearInput, { target: { value: '122' } });

      const errorMessage = screen.getByTestId('card-expiry-date-error');
      expect(errorMessage).toHaveTextContent('2자리 숫자만 입력 가능해요');
    });
  });

  it('유효한 카드 기간은 현재 달,연도 부터이며, 그렇지 않으면 오류 메세기가 표시된다.', () => {
    render(<CardExpiryDate />);
    const INVALID_CARD_PERIOD = { month: (currentDate.month - 1).toString(), year: currentDate.year.toString() };

    const monthInput = screen.getByTestId('card-expiry-date-month');
    const yearInput = screen.getByTestId('card-expiry-date-year');

    fireEvent.change(monthInput, { target: { value: INVALID_CARD_PERIOD.month } });
    fireEvent.blur(monthInput);
    fireEvent.change(yearInput, { target: { value: INVALID_CARD_PERIOD.year } });
    fireEvent.blur(yearInput);

    const errorMessage = screen.getByTestId('card-expiry-date-error');
    expect(errorMessage).toHaveTextContent('유효기간이 만료된 카드는 등록할 수 없어요.');
  });

  describe('입력값이 유효하면 오류 메세지가 없다.', () => {
    test.each([
      { month: currentDate.month, year: currentDate.year },
      { month: currentDate.month - 1, year: currentDate.year + 1 },
    ])('입력 값 "%s"는 유효하다', (date) => {
      render(<CardExpiryDate />);
      const monthInput = screen.getByTestId('card-expiry-date-month');
      const yearInput = screen.getByTestId('card-expiry-date-year');

      fireEvent.change(monthInput, { target: { value: date.month } });
      fireEvent.blur(monthInput);
      fireEvent.change(yearInput, { target: { value: date.year } });
      fireEvent.blur(yearInput);

      const errorMessage = screen.getByTestId('card-expiry-date-error');
      expect(errorMessage).toBeEmptyDOMElement();
    });
  });
});
