import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { CardPassword } from '../components';

describe('Card비밀번호', () => {
  it('초기 상태 확인', () => {
    render(<CardPassword />);

    const input = screen.getByTestId('card-password-input');
    const errorMessage = screen.getByTestId('card-password-error');

    expect(input).toHaveValue('');
    expect(errorMessage).toBeEmptyDOMElement();
  });
  describe('비밀번호는 숫자가 아닌 문자를 입력할 수 없으며 숫자 외의 문자를 입력하면 오류 메세지가 표시된다.', () => {
    test.each(['%!', '하나둘', 'one'])('입력 값 "%s"는 유효하지 않다', (invalidInput) => {
      render(<CardPassword />);

      const input = screen.getByTestId('card-password-input');

      fireEvent.change(input, { target: { value: invalidInput } });

      const errorMessage = screen.getByTestId('card-password-error');
      expect(input).toHaveValue('');
      expect(errorMessage).toHaveTextContent('숫자만 입력 가능해요.');
    });
  });

  it('비밀번호는 반드시 입력되어야 한다. 입력값이 없으면 오류 메세지가 표시된다.', () => {
    render(<CardPassword />);

    const input = screen.getByTestId('card-password-input');

    fireEvent.focus(input);
    fireEvent.blur(input);

    const errorMessage = screen.getByTestId('card-password-error');
    expect(errorMessage).toHaveTextContent('값을 입력해주세요.');
  });

  describe('비밀번호는 두자리여야 한다. 그렇지 않을 경우 오류 메세지가 표시된다.', () => {
    test.each(['123', '2'])('입력 값 "%s"는 유효하지 않다', (invalidInput) => {
      render(<CardPassword />);

      const input = screen.getByTestId('card-password-input');

      fireEvent.change(input, { target: { value: invalidInput } });

      const errorMessage = screen.getByTestId('card-password-error');
      expect(errorMessage).toHaveTextContent('두자리 숫자여야 합니다.');
    });
  });

  it('유효한 입력값일 경우 오류 메세지가 없다.', () => {
    render(<CardPassword />);

    const input = screen.getByTestId('card-password-input');

    fireEvent.change(input, { target: { value: '12' } });
    fireEvent.blur(input);

    const errorMessage = screen.getByTestId('card-password-error');
    expect(errorMessage).toBeEmptyDOMElement();
  });
});
