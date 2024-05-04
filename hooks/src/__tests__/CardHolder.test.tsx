import { render, screen, fireEvent } from '@testing-library/react';
import { CardHolder } from '../components';
import '@testing-library/jest-dom';

describe('CardHolder', () => {
  it('초기 상태 확인', () => {
    render(<CardHolder />);
    const input = screen.getByTestId('card-holder-input');
    const errorMessage = screen.getByTestId('card-holder-error');

    expect(input).toHaveValue('');
    expect(errorMessage).toHaveTextContent('');
  });

  describe('카드 소유자 이름은 알파벳이 아닌 문자를 입력할 수 없으며 이를 시도하면 오류 메세지가 뜬다.', () => {
    test.each(['%!', '123', '바다와 렛서'])('입력 값 "%s"는 유효하지 않다', (invalidInput) => {
      render(<CardHolder />);
      const input = screen.getByTestId('card-holder-input');

      fireEvent.change(input, { target: { value: invalidInput } });

      expect(input).toHaveValue('');
      const errorMessage = screen.getByTestId('card-holder-error');
      expect(errorMessage).toHaveTextContent('알파벳만 입력해주세요.');
    });
  });

  it('카드 소유자 이름은 반드시 입력되어야 한다. 이름이 없으면 오류 메세지가 뜬다.', () => {
    render(<CardHolder />);
    const input = screen.getByTestId('card-holder-input');

    fireEvent.focus(input);
    fireEvent.blur(input);

    const errorMessage = screen.getByTestId('card-holder-error');
    expect(errorMessage).toHaveTextContent('소유자 이름을 입력해주세요.');
  });

  it('input에 유효한 값을 입력할 수 있고, 오류 메세지가 뜨지 않는다.', () => {
    render(<CardHolder />);
    const input = screen.getByTestId('card-holder-input');

    fireEvent.change(input, { target: { value: 'JOHN DOE' } });
    fireEvent.blur(input);

    expect(input).toHaveValue('JOHN DOE');

    const errorMessage = screen.getByTestId('card-holder-error');
    expect(errorMessage).toBeEmptyDOMElement();
  });
});
