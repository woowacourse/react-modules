import { render, screen, fireEvent } from '@testing-library/react';
import CardCVC from '../components/CardCVC';
import '@testing-library/jest-dom';

describe('CardCVC', () => {
  it('초기 상태 확인', () => {
    render(<CardCVC />);
    const input = screen.getByTestId('card-cvc-input');
    const errorMessage = screen.getByTestId('card-cvc-error');

    expect(input).toHaveValue('');
    expect(errorMessage).toBeEmptyDOMElement();
  });
  describe('cvc에는 숫자가 아닌 문자를 입력할 수 없으며 숫자 외의 문자를 입력하면 오류 메세지가 표시된다.', () => {
    test.each(['%!', '하나둘', 'one'])('입력 값 "%s"는 유효하지 않다', (invalidInput) => {
      render(<CardCVC />);
      const input = screen.getByTestId('card-cvc-input');

      fireEvent.change(input, { target: { value: invalidInput } });
      expect(input).toHaveValue('');

      const errorMessage = screen.getByTestId('card-cvc-error');
      expect(errorMessage).toHaveTextContent('숫자만 입력 가능해요.');
    });
  });

  it('CVC는 반드시 입력되어야 한다. 입력값이 없으면 오류 메세지가 표시된다.', () => {
    render(<CardCVC />);
    const input = screen.getByTestId('card-cvc-input');

    fireEvent.focus(input);
    fireEvent.blur(input);

    const errorMessage = screen.getByTestId('card-cvc-error');
    expect(errorMessage).toHaveTextContent('값을 입력해주세요.');
  });

  describe('cvc는 3자리여야 한다. 그렇지 않을 경우 오류 메세지가 표시된다.', () => {
    test.each(['1234', '12'])('입력 값 "%s"는 유효하지 않다', (invalidInput) => {
      render(<CardCVC />);
      const input = screen.getByTestId('card-cvc-input');

      fireEvent.change(input, { target: { value: invalidInput } });
      fireEvent.blur(input);

      const errorMessage = screen.getByTestId('card-cvc-error');
      expect(errorMessage).toHaveTextContent('세자리 숫자여야 합니다.');
    });
  });

  it('유효한 입력값일 경우 오류 메세지가 없다.', () => {
    render(<CardCVC />);
    const input = screen.getByTestId('card-cvc-input');

    fireEvent.change(input, { target: { value: '123' } });
    fireEvent.blur(input);

    const errorMessage = screen.getByTestId('card-cvc-error');
    expect(errorMessage).toBeEmptyDOMElement();
  });
});
