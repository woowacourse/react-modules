import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CardNumbers } from '../components';

describe('CardNumbers', () => {
  it('초기 상태 확인', () => {
    render(<CardNumbers />);
    const inputs = screen.getAllByRole('textbox');
    const errorMessage = screen.getByTestId('card-numbers-error');

    inputs.forEach((input) => {
      expect(input).toHaveValue('');
    });
    expect(errorMessage).toBeEmptyDOMElement();
  });

  describe('카드 번호는 숫자가 아닌 문자를 입력할 수 없다. 이를 시도할 경우 오류 메세지가 화면에 표시된다.', () => {
    const invalidInputs = ['%!!!', 'aaaa', '하나'];

    test.each(invalidInputs)('입력 값 "%s"는 유효하지 않다', (invalidInput) => {
      render(<CardNumbers />);
      const input = screen.getByTestId('card-number-input-0');
      const errorMessage = screen.getByTestId('card-numbers-error');

      fireEvent.change(input, { target: { value: invalidInput } });

      expect(input).toHaveValue('');
      expect(errorMessage).toHaveTextContent('숫자만 사용 가능해요.');
    });
  });

  it('카드 번호로 숫자 4개로 이루어져야한다. 그렇지 않으면 오류 메세지가 화면에 표시된다.', () => {
    render(<CardNumbers />);
    const input = screen.getByTestId('card-number-input-0');
    const errorMessage = screen.getByTestId('card-numbers-error');

    fireEvent.change(input, { target: { value: '123' } });

    expect(errorMessage).toHaveTextContent('4개 숫자를 입력해주세요.');
  });

  it('카드 번호는 반드시 입력되어야 한다. 입력값이 없으면 오류 메세지가 화면에 표시된다.', () => {
    render(<CardNumbers />);

    const input = screen.getByTestId('card-number-input-0');
    const errorMessage = screen.getByTestId('card-numbers-error');

    fireEvent.focus(input);
    fireEvent.blur(input);

    expect(errorMessage).toHaveTextContent('카드 번호를 입력해주세요.');
  });

  it('input에 유효한 값을 입력하면 화면에 오류 메세지가 없다..', () => {
    render(<CardNumbers />);
    const inputs = screen.getAllByRole('textbox');
    const errorMessage = screen.getByTestId('card-numbers-error');

    const VALID_INPUT = ['1234', '5678', '0908', '0000'];

    inputs.forEach((input, index) => {
      const value = VALID_INPUT[index];
      fireEvent.change(input, { target: { value } });
      fireEvent.blur(input);

      expect(input).toHaveValue(value);
    });

    expect(errorMessage).toBeEmptyDOMElement();
  });
});
